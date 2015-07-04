title: 'LeetCode: Best Time to Buy and Sell Stock'
date: 2015-06-24 00:03:22
---
```java
public class BestTimeToBuyAndSellStock {
    public int maxProfit(int[] prices) {
        if (prices.length < 2) {
            return 0;
        }
        int min = prices[0];
        int max = 0;
        for (int i = 1; i < prices.length; i++) {
            if (min > prices[i]) {
                min = prices[i];
            }
            if (max < prices[i] - min) {
                max = prices[i] - min;
            }
        }
        return max;
    }
}
```
