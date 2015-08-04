title: 'LeetCode: Reverse Integer'
date: 2015-06-24 00:03:22
---

```java

/**
 * Created by hzhou on 4/22/15. codeashobby@gmail.com
 */
 public class ReverseInteger {
     public int reverse(int x) {
         int positive = x >= 0 ? 1 : -1;
         if (x == Integer.MIN_VALUE) {
             return 0;
         }
         x *= positive;
         if (x < 10) {
             return x;
         }
         int result = 0;
         do {
             if (result > Integer.MAX_VALUE / 10 || (result == Integer.MAX_VALUE / 10 && x % 10 > Integer.MAX_VALUE % 10)) {
                 result = 0;
                 break;
             }
             result = result * 10 + x % 10;
             x /= 10;
         } while (x > 0);
         if (result < 0) {
             return 0;
         } else {
             return positive * result;
         }
     }
 }
 ```
