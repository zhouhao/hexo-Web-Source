---
title: Java 开发的五个致命陷阱
date: 2026-02-23 20:30:00
tags:
  - Java
  - 踩坑记录
  - 后端
categories:
  - 技术踩坑
---

# Java 开发的五个致命陷阱

> 那些年我踩过的 Java 坑，希望你不要再踩

## 1. null 导致的 NPE

```java
// 危险写法
String name = user.getName();
int length = name.length(); // 如果 user 为 null，直接 NPE

// 安全写法
String name = Optional.ofNullable(user)
    .map(User::getName)
    .orElse("Unknown");
```

**避坑建议**：尽量避免返回 null，使用 Optional 或空对象模式。

---

## 2. 循环中修改集合

```java
// 危险！ConcurrentModificationException
List<String> list = new ArrayList<>(Arrays.asList("a", "b", "c"));
for (String item : list) {
    if ("b".equals(item)) {
        list.remove(item);
    }
}

// 正确方式
list.removeIf("b"::equals);
```

**避坑建议**：使用Iterator或removeIf，不要在遍历时修改集合。

---

## 3. 日期时间处理的时区坑

```java
// 危险！没有指定时区
Date date = new Date();
SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
String result = sdf.format(date); // 取决于系统时区

// 正确方式
ZonedDateTime now = ZonedDateTime.now(ZoneId.of("Asia/Shanghai"));
DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
String result = now.format(formatter);
```

**避坑建议**：使用 Java 8 的 java.time API，明确指定时区。

---

## 4. 字符串比较用 == 

```java
// 危险！比较的是引用，不是值
String a = new String("hello");
String b = new String("hello");
a == b // false

// 正确方式
a.equals(b) // true
// 或者用 Intern
a.intern() == b.intern()
```

**避坑建议**：字符串比较始终用 equals()。

---

## 5. BigDecimal 精度丢失

```java
// 危险！double 精度问题
double d = 0.1 + 0.2; // 0.30000000000000004

// 正确方式
BigDecimal bd1 = new BigDecimal("0.1");
BigDecimal bd2 = new BigDecimal("0.2");
bd1.add(bd2) // 0.3 精确
```

**避坑建议**：使用 String 构造 BigDecimal，不要用 double。

---

## 总结

Java 看似简单，细节却很多。养成良好习惯，远离这些陷阱。

