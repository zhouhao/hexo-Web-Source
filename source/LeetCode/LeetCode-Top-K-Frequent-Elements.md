title: 'LeetCode: Top K Frequent Elements'
date: 2016-06-25 20:03:22
---

There are a row of n houses, each house can be painted with one of the k colors. The cost of painting each house with a certain color is different. You have to paint all the houses such that no two adjacent houses have the same color.

The cost of painting each house with a certain color is represented by a n x k cost matrix. For example, costs[0][0] is the cost of painting house 0 with color 0; costs[1][2] is the cost of painting house 1 with color 2, and so on... Find the minimum cost to paint all houses.

### Note:
All costs are positive integers.


```java
public class Solution {
    public int minCostII(int[][] costs) {
        if (costs == null || costs.length == 0 || costs[0].length == 0) {
            return 0;
        }
        int h = costs.length;
        int c = costs[0].length;

        int[][] dp = new int[h][c];

        System.arraycopy(costs[0], 0, dp[0], 0, c);

        for (int i = 1; i < h; i++) {
            for (int j = 0; j < c; j++) {
                dp[i][j] = Integer.MAX_VALUE;
                for (int k = 0; k < c; k++) {
                    if (k != j) {
                        dp[i][j] = Math.min(dp[i][j], dp[i - 1][k] + costs[i][j]);
                    }
                }
            }
        }
        int min = Integer.MAX_VALUE;
        for (int i = 0; i < c; i++) {
            min = Math.min(min, dp[h - 1][i]);
        }

        return min;
    }
}
```