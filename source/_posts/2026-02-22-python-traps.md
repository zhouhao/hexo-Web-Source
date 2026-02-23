---
title: Python 踩坑指南：这 10 个坑你踩过几个？
date: 2026-02-22 20:00:00
categories:
  - 技术
  - Python
tags:
  - Python
  - 踩坑
  - 编程陷阱
---

!!! warning 引言
    Python 虽然简洁易读，但其中藏着不少"坑"。本文总结了 10 个最常见的陷阱，帮助你避免重蹈覆辙。

## 1. 可变默认参数

```python
def add_item(item, lst=[]):
    lst.append(item)
    return lst

print(add_item(1))  # [1]
print(add_item(2))  # [1, 2] ❌ 预期是 [2]
```

**原因**：默认参数在函数定义时求值，列表是可变对象。

**正确写法**：

```python
def add_item(item, lst=None):
    if lst is None:
        lst = []
    lst.append(item)
    return lst
```

---

## 2. 字典迭代时修改

```python
d = {'a': 1, 'b': 2}
for key in d:
    del d[key]  # RuntimeError: dictionary changed size during iteration
```

**正确写法**：

```python
d = {'a': 1, 'b': 2}
for key in list(d.keys()):
    del d[key]
```

---

## 3. == vs is

```python
a = [1, 2, 3]
b = [1, 2, 3]
print(a == b)  # True - 值相等
print(a is b)  # False - 不是同一个对象
```

**注意**：`is` 比较的是对象身份（内存地址），`==` 比较的是值。

小整数池例外的陷阱：

```python
a = 256
b = 256
print(a is b)  # True - 小整数在池中

a = 257
b = 257
print(a is b)  # False - 超出池的范围
```

---

## 4. 循环变量作用域

```python
funcs = [lambda: i for i in range(3)]
for f in funcs:
    print(f(), end=' ')  # 2 2 2 ❌
```

**原因**：闭包捕获的是变量引用，不是值。

**正确写法**：

```python
funcs = [lambda x=i: x for i in range(3)]
for f in funcs:
    print(f(), end=' ')  # 0 1 2 ✅
```

---

## 5. datetime 时区问题

```python
from datetime import datetime

now = datetime.now()
print(now)  # 没有时区信息

# 错误地直接比较
from datetime import timezone
now_utc = datetime.now(timezone.utc)
print(now > now_utc)  # TypeError
```

**正确写法**：

```python
from datetime import datetime, timezone

# 统一使用时区-aware datetime
now = datetime.now(timezone.utc)
now_utc = datetime.now(timezone.utc)
print(now > now_utc)  # ✅
```

---

## 6. requests 超时和重定向

```python
import requests

r = requests.get('http://httpbin.org/get')  # 可能永远等待
print(r.status_code)
```

**正确写法**：

```python
import requests

r = requests.get('http://httpbin.org/get', timeout=5, allow_redirects=True)
```

---

## 7. 字符串格式化

```python
# 旧式格式化（已废弃）
print("Hello %s" % name)

# f-string 是现代选择
print(f"Hello {name}")
```

**注意**：f-string 中不要滥用表达式：

```python
name = "World"
print(f"Hello {name.upper() if name else 'Guest'}")  # 可读性差
```

---

## 8. None 和空值判断

```python
# 常见错误
if name != None and name != "":
    ...

# 正确写法
if name:  # 自动排除 None 和空字符串
    ...
```

**但要注意**：

```python
name = ""
if name:
    print("Truthy")  # 不执行
if name is not None:
    print("Not None")  # ✅ 执行
```

---

## 9. 类变量 vs 实例变量

```python
class Dog:
    tricks = []  # 类变量

    def __init__(self, name):
        self.name = name  # 实例变量

dog1 = Dog("Buddy")
dog2 = Dog("Max")

dog1.tricks.append("roll over")
print(dog2.tricks)  # ['roll over'] ❌
```

**正确写法**：

```python
class Dog:
    def __init__(self, name):
        self.name = name
        self.tricks = []  # 实例变量
```

---

## 10. 浮点数精度

```python
0.1 + 0.2 == 0.3  # False
print(0.1 + 0.2)   # 0.30000000000000004
```

**正确写法**：

```python
from decimal import Decimal

Decimal('0.1') + Decimal('0.2') == Decimal('0.3')  # True

# 或者用于货币计算
from decimal import Decimal, getcontext
getcontext().prec = 2
```

---

## 总结

| 陷阱 | 关键点 |
|------|--------|
| 可变默认参数 | 用 `None` 作为默认值 |
| 字典迭代修改 | 先转 `list()` |
| == vs is | 比较值用 `==`，比较对象用 `is` |
| 循环变量闭包 | 默认参数捕获引用 |
| datetime 时区 | 统一用 aware datetime |
| requests 超时 | 始终设置 timeout |
| None 判断 | 用 `if x is not None` |
| 类变量共享 | 实例变量在 `__init__` 中定义 |
| 浮点数精度 | 用 `Decimal` |

希望这篇文章能帮你避开这些坑！如果觉得有用，点个赞吧 👏
