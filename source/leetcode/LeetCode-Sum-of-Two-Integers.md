title: 'LeetCode: Sum of Two Integers'
date: 2017-08-27 20:03:22
---

Calculate the sum of two integers a and b, but you are not allowed to use the operator `+` and `-`.

### Example:
Given a = 1 and b = 2, return 3.


```java
public class Solution {
    public int getSum(int a, int b) {
        if (b == 0) return a;
        int x = a ^ b;
        int y = (a & b) << 1;
        return getSum(x, y);
    }
}
```