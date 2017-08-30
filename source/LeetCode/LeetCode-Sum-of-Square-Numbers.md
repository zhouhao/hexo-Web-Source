title: 'LeetCode: Sum of Square Numbers'
date: 2017-08-30 20:03:22
---

Given a non-negative integer c, your task is to decide whether there're two integers a and b such that a2 + b2 = c.

### Example 1:
```
Input: 5
Output: True
Explanation: 1 * 1 + 2 * 2 = 5
```
### Example 2:
```
Input: 3
Output: False
```

```java
public class Solution {
    public boolean judgeSquareSum(int c) {
        if(c==0) return true;
        for (int i = 0; i < Math.sqrt(c); i++) {
            int x = c - i * i;
            int a = (int) Math.sqrt(x);
            if (a * a == x) {
                return true;
            }
        }
        return false;
    }
}
```
