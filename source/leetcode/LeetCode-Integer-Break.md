title: 'LeetCode: Integer Break'
date: 2016-06-25 20:03:22
---

Given a positive integer n, break it into the sum of at least two positive integers and maximize the product of those integers. Return the maximum product you can get.

For example, given n = 2, return 1 (2 = 1 + 1); given n = 10, return 36 (10 = 3 + 3 + 4).

**Note**: You may assume that n is not less than 2 and not larger than 58.

```java

public class Solution {
    public int integerBreak(int n) {
        if (n < 2) {
            return 0;
        }
        if (n == 2) return 1;
        if (n == 3) return 2;

        int x = n / 3;
        int y = n % 3;
        switch (y) {
            case 0:
                return (int) Math.pow(3, x);
            case 1:
                return (int) Math.pow(3, x - 1) * 4;
            case 2:
                return (int) Math.pow(3, x) * 2;
        }

        return 0;
    }
}

```