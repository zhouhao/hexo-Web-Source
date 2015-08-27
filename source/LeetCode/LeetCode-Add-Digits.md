title: 'LeetCode: Add Digits'
date: 2015-08-16 17:06:06
---
Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

### For example:

Given num = `38`, the process is like: `3 + 8 = 11`, `1 + 1 = 2`. Since `2` has only one digit, return it.

```java
public class Solution {
    public int addDigits(int num) {
        while (num > 9) {
            num = getInt(num);
        }
        return num;
    }

    private int getInt(int num) {
        int result = 0;
        while (num >= 10) {
            result += num % 10;
            num /= 10;
        }
        result += num;
        return result;
    }
}
```

### a faster one
```java
public class Solution {
    public int addDigits(int num) {
        return  (num - 1) % 9 + 1;
    }
}
```
