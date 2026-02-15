title: 'LeetCode: Valid Perfect Square'
date: 2017-08-27 20:03:22
---

Given a positive integer num, write a function which returns True if num is a perfect square else False.

Note: Do not use any built-in library function such as `sqrt`.

### Example 1:

Input: 16
Returns: True

### Example 2:

Input: 14
Returns: False


```java
public class Solution {
    public boolean isPerfectSquare(int num) {
        for (int i = 1; i <= num / i; i++) {
            if (num == i * i) {
                return true;
            }
        }
        return false;
    }
}
```