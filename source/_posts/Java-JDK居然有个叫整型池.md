---
title: 'Java: JDK居然有个叫整型池的东西'
date: 2015-08-15 16:15:48
tags: [Java] 
categories: [计算机那些事, Java]
---
其实下面这些个`assert`语句都可以通过`junit`测试。
```java
    @Test
    public void integerValueOfTest() {
        Assert.assertTrue(Integer.valueOf(-128) == Integer.valueOf(-128));
        Assert.assertFalse(Integer.valueOf(128) == Integer.valueOf(128));
        Assert.assertTrue(Integer.valueOf(127) == Integer.valueOf(127));
        Assert.assertTrue(Integer.valueOf(1) == Integer.valueOf(1));
        Assert.assertFalse(Integer.valueOf(1000) == Integer.valueOf(1000));
    }
```
<!-- more -->
!["Integer.valueOf()"](/img/blog/integer-valueof.png "Integer.valueOf()")

`Integer`的`public static Integer valueOf(int i)`是一个工厂方法，每次调用都会返回一个新的`Integer`的对象。

### 但是为什么对于`127`和`128`的两个结果完全不一样？？？

撸一眼JDK的源码看看，底下就是那个`valueOf`的具体实现：
```java
    public static Integer valueOf(int i) {
        if (i >= IntegerCache.low && i <= IntegerCache.high)
            return IntegerCache.cache[i + (-IntegerCache.low)];
        return new Integer(i);
    }
```

原来内部有个整型池(默认`IntegerCache.low = -128`和`IntegerCache.high = 127`)，这样`valueOf`对于`-128 ~ 127`之间的返回值都是从池里面获取的。

### 可怜的不在这个范围内的整数！默哀
