title: 'LeetCode: Largest Palindrome Product'
date: 2017-08-30 20:03:22
---

Find the largest palindrome made from the product of two n-digit numbers.

Since the result could be very large, you should return the largest palindrome mod 1337.

### Example:
```
Input: 2
Output: 987
Explanation: 99 x 91 = 9009, 9009 % 1337 = 987
```

#### Note:

The range of n is [1,8].

```java
public class Solution {
    public int largestPalindrome(int n) {
        if (n == 1) return 9;

        int max = (int) Math.pow(10, n) - 1;
        int min = (int) Math.pow(10, n - 1);
        for (int i = max; i >= min; i--) {
            long p = getPalindrome(i);
            for (int j = max; j >= min; j--) {
                if (p / j > max || p / j < min) break;
                if (p % j == 0) {
                    return (int) (p % 1337);
                }
            }
        }
        return -1;
    }

    private long getPalindrome(int x) {
        String value = x + new StringBuilder(x + "").reverse().toString();
        return Long.valueOf(value);
    }
}
```
