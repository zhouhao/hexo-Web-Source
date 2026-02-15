title: 'LeetCode: Climbing Stairs'
date: 2015-06-24 00:03:22
---
```java
public class ClimbingStairs {
    public int climbStairs1(int n) {
        assert n > 0;
        if (n == 1) {
            return 1;
        }
        if (n == 2) {
            return 2;
        }
        return climbStairs1(n - 1) + climbStairs1(n - 2);
    }
    public int climbStairs2(int n) {
        assert n > 0;
        if (n == 1) {
            return 1;
        }
        if (n == 2) {
            return 2;
        }
        int x = 1;
        int y = 2;
        int result = 0;
        for (int i = 3; i <= n; i++) {
            result = x + y;
            x = y;
            y = result;
        }
        return result;
    }
}
```
