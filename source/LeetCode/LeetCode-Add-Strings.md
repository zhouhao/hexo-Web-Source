title: 'LeetCode: Add Strings'
date: 2017-08-30 20:03:22
---

Given two non-negative integers `num1` and `num2` represented as string, return the sum of `num1` and `num2`.

#### Note:

1. The length of both num1 and num2 is < 5100.
2. Both num1 and num2 contains only digits `0-9`.
3. Both num1 and num2 does not contain any leading zero.
4. You **must not use any built-in BigInteger library or convert the inputs to integer** directly.

```java
public class Solution {
    public String addStrings(String num1, String num2) {
        char[] x = new StringBuilder(num1).reverse().toString().toCharArray();
        char[] y = new StringBuilder(num2).reverse().toString().toCharArray();

        char[] l, s;
        if (num1.length() > num2.length()) {
            l = x;
            s = y;
        } else {
            l = y;
            s = x;
        }
        StringBuilder sb = new StringBuilder();

        int carry = 0;
        int i = 0;
        for (; i < l.length; i++) {
            int a = l[i] - '0';
            int b = (i >= s.length) ? 0 : s[i] - '0';
            sb.append((a + b + carry) % 10);
            if (a + b + carry >= 10) {
                carry = 1;
            } else {
                carry = 0;
            }
        }
        if (carry > 0) {
            sb.append(1);
        }

        return sb.reverse().toString();
    }
}
```
