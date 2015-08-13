title: '困惑的Java: 数组的hashCode()'
date: 2015-08-06 18:13:11
tags:
  - Java
categories:
  - 计算机那些事
  - Java
---
这是我在StackOverflow上提的第一个问题：[Why Objects.hash() returns different values for the same input?](http://stackoverflow.com/questions/29955291/why-objects-hash-returns-different-values-for-the-same-input)

<!-- more -->
![hashCode](https://dn-myblog.qbox.me/img/blog/hashcode.png "hashCode")    

之所以会遇到这个问题，是因为我准备在`Spring`的项目中通过注解的方式使用`EhCache`。如果没记错的话，`@Cacheable`默认的`key`是function的***输入参数***（不含方法名），然后在我的`service`层中有许多的functions有同样的输入参数，比如`getRoleByUserId(int userId)`, `getInfoByUserId(int userId)`。如果这两个function都把`cache`指向`userCache`(`@Cacheable(value = "userCache")`)，这样会导致`cache`会被误调用。

这对这种情况，我当时的做法是自己写一个`MyKeyGenerator`。   
```Java
    @Override
    public Object generate(Object target, Method method, Object... params) {
        int key = Objects.hashCode(method.getName(), params);
        //log.info("key = " + key);
        return key;
    }
```

我以为这样是万事无忧的，然而实际中，我发现我的`Ehcache`根本没派上用场，每次service的调用都会执行数据库操作语句。经过丛丛调试，终于发现即使我每次的输入参数数据一模一样，但是每次生成的`key`值不一样。

### 问题所在
后来发现问题出现是数字的`hashCode()`上，如SO的评论所说，`int[]`没有覆写`hashCode()`（如果没记错的话，Java反射机制通过`java.lang.reflect.Array`类来创建数组）。

### 修改如下
```Java
int key = Objects.hashCode(method.getName(), Arrays.hashCode(params));
```

