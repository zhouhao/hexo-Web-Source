---
title: "JSON serialization and deserialization: Circular References"
date: 2017-08-10 18:34:02
tags: [Jackson, Json, deserialize]
categories: [编程人生, Java]
---
In recent times, I did a lot practise of micro-service with spring boot. And handled a lot of JSON(Jackson) related serialization and deserialization issues. In this post, I will share some tricky how to "fix" Circular References.

<!-- more -->

**Note:** What I want to do are:

1. I can serialize object to JSON string
2. I can deserialize the JSON string to the *same* object(*at least all important info retains*)

### Circular References 

Let's see a quick demo first: (`Book` has its `Author`, while `Author` keeps a list of his/her `Book`s)

```java
public class Book {
    private String name;
    private Author author;

   // getter & setter 
}

public class Author {
    private String name;
    private List<Book> books;
    
    // getter & setter 
}

```

Now, we can have a serialization sample as:

```java
public static void main(String[] args) throws IOException {
    Book book = new Book();
    book.setName("Book");

    Author author = new Author();
    author.setName("Author");
    List<Book> books = new ArrayList<Book>();
    books.add(book);
    author.setBooks(books);

    book.setAuthor(author);

    ObjectMapper mapper = new ObjectMapper();
    System.out.println(mapper.writeValueAsString(book));
    System.out.println(mapper.writeValueAsString(author));
}
```

Then it will throw this exception:

`Exception in thread "main" com.fasterxml.jackson.databind.JsonMappingException: Infinite recursion (StackOverflowError) (through reference chain: ...`

<span style="color:red;">JSON is pretty hard to demonstrate the data with Circular References</span>

##### Solution:
Thx to Jackson, with [@JsonIdentityInfo](http://wiki.fasterxml.com/JacksonFeatureObjectIdentity), we can easy fix this issue.
After I add `@JsonIdentityInfo(generator=ObjectIdGenerators.IntSequenceGenerator.class, property="@id")` to both class, then I can have the JSON string as:
```json
{"@id":1,"name":"Book","author":{"@id":2,"name":"Author","books":[1]}}
```
```json
{"@id":1,"name":"Author","books":[{"@id":2,"name":"Book","author":1}]}
```
However, I am not sure whether this JSON string can be deserialized by other libraries(e.g. GSON), or other languages, my guess is NOT.

**Note:** Think twice before using it!


