title: 'LeetCode: Paint Fence'
date: 2016-06-25 20:03:22
---

There is a fence with n posts, each post can be painted with one of the k colors.

You have to paint all the posts such that no more than two adjacent fence posts have the same color.

Return the total number of ways you can paint the fence.

### Note:
n and k are non-negative integers.

```java
public class Solution {
    public int numWays(int n, int k) {
        if(n*k==0 || n>2&&k==1){
            return 0;
        }
        if(n==1){
            return k;
        }
        int[] dp = new int[n];
        dp[0] = k;
        dp[1] = k * k;

        for (int i = 2; i < n; i++) {
            dp[i] = (k - 1) * (dp[i - 1] + dp[i - 2]);
        }
        return dp[n - 1];
    }
}
```