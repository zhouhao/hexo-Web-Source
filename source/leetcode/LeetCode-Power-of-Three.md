title: 'LeetCode: Power of Three'
date: 2016-06-25 20:03:22
---

```java
public class Solution {
    public boolean isPowerOfThree(int n) {
               if (n == 1) {
            return true;
        }

        if (n < 3) {
            return false;
        }

        while (n / 3 > 0) {
            if (n % 3 != 0) {
                return false;
            }
            n = n / 3;
            if(n == 1){
                return true;
            }
        }

        return false;
    }
}
```