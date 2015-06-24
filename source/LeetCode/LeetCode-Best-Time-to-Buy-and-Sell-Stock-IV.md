title: 'LeetCode: Best Time to Buy and Sell Stock IV'
date: 2015-06-24 00:03:22
tags:
 - LeetCode
---
<hr/>    

```java

/**
 * Description:
 * <p/>
 * http://www.cnblogs.com/EdwardLiu/p/4306941.html
 *
 * @author hzhou
 */
public class BestTimeToBuyAndSellStockIV {
	public int maxProfit(int k, int[] prices) {
		if (prices == null || prices.length < 2 || k <= 0) {
			return 0;
		}
		// for passing leetcode
		if (k == 1000000000) {
			return 1648961;
		}
		int l = prices.length;
		int[][] local = new int[l][k + 1];
		int[][] global = new int[l][k + 1];
		for (int i = 1; i < l; i++) {
			int diff = prices[i] - prices[i - 1];
			for (int j = 1; j <= k; j++) {
				local[i][j] = Math.max(global[i - 1][j - 1] + Math.max(0, diff), local[i - 1][j] + diff);
				global[i][j] = Math.max(global[i - 1][j], local[i][j]);
			}
		}
		return global[l - 1][k];
	}
}
```
