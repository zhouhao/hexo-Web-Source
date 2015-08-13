title: 'Database design for the App'
date: 2014-05-30 23:25:19
tags:
  - Mobile App
  - MySQL
  - Database
categories:
  - 计算机那些事
  - 数据库
---
As a Open-Source enthusiast, of course I choose MySQL as my database server.
For this app I want to do, the database side is very simple, just 2 tables(one for user info, and the other for event info) and one view(for Quartz jobs check).
<!-- more -->
The script for `user` table:
```sql
CREATE TABLE `todolist`.`user` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(45) NOT NULL,
    `email` VARCHAR(45),
    `password` VARCHAR(32),
    `token` VARCHAR(32),
    `token_date` VARCHAR(10),
    `last_login_time` DATETIME
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8
GO
ALTER TABLE `todolist`.`user`
    ADD UNIQUE INDEX `email_UNIQUE`
    USING BTREE (`email`)
GO
```
And the one for `event` is:
```sql
CREATE TABLE `todolist`.`event` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(128),
    `start` DATETIME,
    `end` DATETIME,
    `create_time` DATETIME,
    `is_done` TINYINT DEFAULT 0,
    `user_id` INT NOT NULL,
    `is_notified` TINYINT DEFAULT 0
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8
GO
ALTER TABLE `todolist`.`event`
    ADD INDEX `idx_event_is_notified`
    USING BTREE (`is_notified`)
GO
ALTER TABLE `todolist`.`event`
    ADD INDEX `idx_event_is_done`
    USING BTREE (`is_done`)
GO
ALTER TABLE `todolist`.`event`
    ADD INDEX `idx_event_start`
    USING BTREE (`start`)
GO
```

The script for `eventView` is:
```sql
CREATE VIEW `eventView`
AS
select `user`.`email` AS `email`,`user`.`name` AS `name`,`event`.`id` AS `eventId`,`event`.`title` AS `title`,`event`.`start` AS `start`
from (`user` join `event`)
where ((`user`.`id` = `event`.`user_id`) and (`event`.`is_notified` = 0) and (`event`.`is_done` = 0) and (`event`.`start` > now()) and (`event`.`start` < addtime(now(),'0 1:0:0')))
order by `event`.`start`
```

### Note: Please do not tell me that you don't know how to connect MySQL in your code! :-)
