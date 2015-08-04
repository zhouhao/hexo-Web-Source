title: 'LeetCode: Best Time to Buy and Sell Stock III'
date: 2015-06-24 00:03:22
---

```java

import static org.junit.Assert.assertSame;
/**
 * Created by hzhou on 4/30/15. codeashobby@gmail.com
 */
public class BestTimeToBuyAndSellStockIII {
    public int maxProfit(int[] prices) {
        if (prices.length < 2) {
            return 0;
        }
        int[] before = new int[prices.length];
        int[] after = new int[prices.length];
        before[0] = 0;
        after[prices.length - 1] = 0;
        int min = prices[0];
        for (int i = 1; i < prices.length; i++) {
            min = Math.min(min, prices[i]);
            before[i] = Math.max(before[i - 1], prices[i] - min);
        }
        int max = prices[prices.length - 1];
        for (int i = prices.length - 2; i >= 0; i--) {
            max = Math.max(max, prices[i]);
            after[i] = Math.max(after[i + 1], max - prices[i]);
        }
        max = 0;
        for (int i = 0; i < prices.length; i++) {
            if (before[i] + after[i] > max) {
                max = before[i] + after[i];
            }
        }
        return max;
    }
    @Test
    public void test() {
        int[] prices = new int[]{1, 4, 5, 7, 6, 3, 2, 9};
        assertSame(13, maxProfit(prices));
    }
}
```
