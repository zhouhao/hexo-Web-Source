title: 'LeetCode: Happy Number'
date: 2015-06-24 00:03:22
tags:
 - LeetCode
---
<hr/>    

```java

/**
 * Created by hzhou on 4/22/15. codeashobby@gmail.com
 */
public class HappyNumber {
    public boolean isHappy(int n) {
        if (n < 1) {
            return false;
        }
        Set<Integer> set = new HashSet<Integer>();
        int result = n;
        while (true) {
            result = calc(result);
            if (result == 1) {
                return true;
            }
            if (set.contains(result)) {
                return false;
            }
            set.add(result);
        }
    }
    private int calc(int n) {
        int result = 0;
        while (n > 0) {
            int x = n % 10;
            n /= 10;
            result += x * x;
        }
        return result;
    }
}
```
