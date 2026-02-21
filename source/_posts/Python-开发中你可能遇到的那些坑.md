---
title: "Python 开发中你可能遇到的那些坑"
date: 2026-02-20 23:30:00
tags: [Python, 踩坑记录, 编程技巧]
categories: [编程人生, Python]
---

> 整理了一些 Python 开发中常见但容易踩坑的问题，希望对你有所帮助。

<!-- more -->

## 1. 可变默认参数（Mutable Default Arguments）

这是 Python 最经典的坑之一。

```python
def append_to(element, to=[]):
    to.append(element)
    return to

# 第一次调用
print(append_to(1))  # [1]

# 第二次调用 - 预期是 [2]，实际是 [1, 2]！
print(append_to(2))  # [1, 2]
```

**原因**：默认参数在函数定义时就被评估，列表在每次调用中共享。

**正确做法**：

```python
def append_to(element, to=None):
    if to is None:
        to = []
    to.append(element)
    return to
```

---

## 2. 字典迭代时修改（Dictionary Change Size During Iteration）

```python
d = {'a': 1, 'b': 2, 'c': 3}

# 错误 - 会抛出 RuntimeError
for key in d:
    if key == 'a':
        del d[key]
```

**正确做法**：

```python
# 方法1: 使用 list() 复制 keys
for key in list(d.keys()):
    if key == 'a':
        del d[key]

# 方法2: 使用字典推导式
d = {k: v for k, v in d.items() if k != 'a'}
```

---

## 3. == 和 is 的区别

```python
a = [1, 2, 3]
b = [1, 2, 3]

print(a == b)  # True - 值相等
print(a is b)  # False - 不是同一个对象

# 字符串 interning
c = "hello"
d = "hello"
print(c is d)  # True - Python 会复用短字符串
```

**记住**：
- `==` 比较值
- `is` 比较身份（内存地址）
- 比较 None 应该用 `is None`，而不是 `== None`

---

## 4. 循环变量作用域

```python
# Python 3 中 list comprehension 有自己的作用域
# 但变量会泄露到外部
result = [x for x in range(3)]
print(x)  # 2 - x 泄露出来了！

# Python 2 中变量会泄露
# Python 3.2+ 已修复
```

---

## 5. datetime 时的时区问题

```python
from datetime import datetime

# 错误 - 缺少时区信息
now = datetime.now()
print(now)  # 2026-02-20 15:30:00.123456

# 正确做法 - 使用 timezone
from datetime import timezone, timedelta

now_utc = datetime.now(timezone.utc)
print(now_utc)  # 2026-02-20 07:30:00.123456+00:00

# 时区转换
tz = timezone(timedelta(hours=8))
now_beijing = now_utc.astimezone(tz)
print(now_beijing)  # 2026-02-20 15:30:00.123456+08:00
```

---

## 6. requests 库的超时和重定向

```python
import requests

# 默认没有超时，会无限等待
response = requests.get('https://example.com')  # 可能永远卡住

# 正确设置超时
response = requests.get('https://example.com', timeout=5)

# 默认最多重定向 30 次
response = requests.get('https://example.com', timeout=5, allow_redirects=True)
```

---

## 7. 字符串格式化

```python
# 旧式 - 已不推荐
print("Hello %s" % "World")

# f-string - Python 3.6+
name = "World"
print(f"Hello {name}")

# 注意 f-string 中的引号
# 错误
# print(f'Hello {name}')  # 如果 name 包含单引号会出错

# 正确
print(f'Hello {name}')  # 用双引号包裹
print(f"Hello {name}")  # 用单引号包裹
```

---

## 8. None 和空值的判断

```python
# 常见错误
my_list = []
if my_list:  # False，但列表不为 None
    print("Not empty")

# 正确判断
if my_list is not None and len(my_list) > 0:
    print("Not empty")

# 或者更 Pythonic
if my_list:
    print("Not empty")  # 空列表也为 False
```

---

## 总结

Python 虽然简洁易用，但有些坑如果不注意真的会浪费很多调试时间。建议：

1. 使用 linter（如 flake8、pylint）
2. 使用 type hints
3. 多看官方文档
4. 遵循 PEP 8 规范

希望这些坑能帮你避雷！有问题欢迎评论区交流。

---

**参考资料**：
- [Python Official Docs](https://docs.python.org/3/)
- [Fluent Python](https://book.douban.com/subject/26592894/)
