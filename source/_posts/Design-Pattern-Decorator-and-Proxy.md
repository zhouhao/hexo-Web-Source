title: "Design Pattern: Decorator & Proxy"
date: 2014-08-17 13:39:57
tags: [Design Pattern, Java]
categories: [计算机那些事, 设计模式]
---
I think it is better to master 23 Design Patterns as a Java developer.
After I have a brief study, I find design pattern is not a new concept, and I have already used some of them in my daily projects unconsciously.

Here I will describe some details about **Decorator** and **Proxy**, as I find they share something in common.
<!-- more -->

### Decorator
*This pattern can dynamically add some new features to an Instance.*
**When to use this?**
1. Need to extend a class dynamically
2. Dynamically add/remove functions for new instance (Inheritance is static without dynamically adding or removing.)


```java
public interface Sourceable {
    public void method();
}

public class Source implements Sourceable {

    @override
    public void method() {
        System.out.println("The origin method");
    }
}

public class Decorator implements Sourceable {
    private Source source;

    public Decorator(Source source) {
        this.source = source;
    }

    @override
    public void method() {
        System.out.println("Before Decorator");
        source.method();
        System.out.println("After Decorator");
    }
}

// Test Class
public class DecoratorTest {

    public static void main(String[] args) {
        Sourceable source = new Source();
        Sourceable dec = new Decorator(source);
        dec.method();
    }
}
```

## Proxy
*Create a new proxy class, which can do some operations for the origin Instance*


```java
public interface Sourceable {
    public void method();
}

public class Source implements Sourceable {

    @override
    public void method() {
        System.out.println("The origin method");
    }
}

public class Proxy implements Sourceable {
    private Source source;

    public Proxy() {
        this.source = new Source();
    }

    @override
    public void method() {
        before();
        source.method();
        after();
    }

    private void before() {
        System.out.println("This is before");
    }

    private void after() {
        System.out.println("This is after");
    }
}

// Test Class
public class ProxyTest {

    public static void main(String[] args) {

        Sourceable proxy = new Proxy();
        proxy.method();
    }
}
```
