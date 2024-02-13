---
title: Migrate to MongoDB from MariaDB for SaltyNote Service
tags: [ microservice, SpringBoot, Java, Redis, MariaDB, MongoDB, SaltyNote ]
categories: [ 计算机那些事, microservice, database ]
date: 2023-05-01 11:19:33
---

As a software engineer, I think everyone can tell thousands of words about the differences between SQL vs NoSQL. And how
to make a choice between them with your requirement.

Recently, I migrated the SaltyNote service from MariaDB to MongoDB. While the reason is not for high throughput or
performance.

<!-- more -->

Be host, the important reason I changed to Mongo is that I need a more flexible schema for the note data.

If I stick to MariaDB, I need to have a separate table for note tags field for better aggregation and search later.

!!! note Info
    I know some SQL database support JSON field, that can also be the solution. While instead of using JSON field, I prefer NoSQL.


## For MariaDB

### Without JSON field

```sql
create table note (
    id           int auto_increment                  not null primary key,
    user_id      varchar(40)                         NOT NULL,
    text         varchar(512)                        not null,
    url          varchar(512)                        not null,
    note         text,
    is_page_only bit       default b'0'              null,
    created_time timestamp default CURRENT_TIMESTAMP not null
);

create table tag (
    id      int auto_increment not null primary key,
    tag     varchar(128) null,
    note_id int          null
);
```

Without JSON field, I need to create a separate table for note tags field, so I can query note by tags easily.
For example, to query all notes with tag `java`, I can use the following SQL:

```sql
# Using * here is not a good practice, just for demo
select * from note where id in (select distinct note_id from tag where tag = 'java');
```

While this solution will bring some trouble when update tags, for example, if I have a note with tags `java`
and `spring`.
Later, I need to update the tags to `java` and `spring-boot`. I need to delete the old tags and insert the new tags. The
full **update** will include multiple actions.

```sql
delete * from tag where note_id = 1;
insert into tag (tag, note_id) values ('java', 1), ('spring-boot', 1);

# or more complex, if we only delete non-used tags, e.g. no delete  `java` here.
# There we need to query all tags for note 1, and delete the tags not in the new tags list.
```

### With JSON field

```sql
create table note (
    id           int auto_increment                  not null primary key,
    user_id      varchar(40)                         NOT NULL,
    text         varchar(512)                        not null,
    url          varchar(512)                        not null,
    note         text,
    # tags field here
    tags         JSON,   
    is_page_only bit       default b'0'              null,
    created_time timestamp default CURRENT_TIMESTAMP not null
);
```

With JSON field, we can store the tags in the same table. And the update will be much easier, since we do not need to
scan multiple rows.

```sql
# query all notes with tag `java`
SELECT * from note WHERE JSON_CONTAINS(tags, 'java', '$');

# update tags for note 1
update note set tags = JSON_ARRAY('Java', 'Spring') where id = 1
```

On my research, I find Spring-Data-JPA does not support JSON field well. So I need to use native SQL to query and
update, or introduce new dependency: [_Hibernate
Types_](https://prateek-ashtikar512.medium.com/how-to-handle-json-in-mysql-4adaeeb1d42f).

## For MongoDB

For the reason above, eventually, I choose MongoDB. With MongoDB, I can store the tags in the same document with the
note object.

!!! note Info
    Transaction is not a concern for SaltyNote. Since it is OK to save duplicated notes, and user can simply delete it. (No duplicated notes have been found so far)

### Pros:

1. Flexible schema, so no need to do db migration when the schema changes.
2. Great Spring boot integration, with Spring Data MongoDB, we can use the same repository interface as Spring Data JPA.
3. Auto generated ID field works pretty well.
4. All benefits of NoSQL.

### Cons:

1. Less knowledge than RDB, so it may take more time to set it up, and maintain it.

## The Tag UI in Chrome Extension

The tag feature will be available in the next release
of [SaltyNote Chrome Extension](https://chrome.google.com/webstore/detail/saltynote/baanghljiehhpljdbonfknboakpfajnn)
v0.4.0.

![Tag UI](/img/saltynote/tag-ui.png)