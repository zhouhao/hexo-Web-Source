title: 'LeetCode: Best Time to Buy and Sell Stock II'
date: 2015-06-24 00:03:22
---

```java

/**
 * Created by hzhou on 4/30/15. codeashobby@gmail.com
 */
public class BestTimeToBuyAndSellStockII {
    public int maxProfit(int[] prices) {
        if (prices.length < 2) {
            return 0;
        }
        int result = 0;
        for (int i = 1; i < prices.length; i++) {
            int diff = prices[i] - prices[i - 1];
            if (diff > 0) {
                result += diff;
            }
        }
        return result;
    }
}
```
