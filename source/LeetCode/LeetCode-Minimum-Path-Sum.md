title: 'LeetCode: Minimum Path Sum'
date: 2015-06-24 00:03:22
tags:
 - LeetCode
---
<hr/>    

```java

/**
 * Description: Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which
 * minimizes the sum of all numbers along its path.
 * <p/>
 * Note: You can only move either down or right at any point in time.
 *
 * @author hzhou
 */
public class MinimumPathSum {
	public int minPathSum(int[][] grid) {
		if (grid == null || grid.length == 0 || grid[0].length == 0) {
			return 0;
		}
		int h = grid.length;
		int w = grid[0].length;
		int[][] map = new int[h][w];
		map[0][0] = grid[0][0];
		for (int i = 1; i < h; i++) {
			map[i][0] = grid[i][0] + map[i-1][0];
		}
		for (int i = 1; i < w; i++) {
			map[0][i] = grid[0][i]+ map[0][i-1];
		}
		for (int i = 1; i < h; i++) {
			for (int j = 1; j < w; j++) {
				map[i][j] = grid[i][j] + Math.min(map[i - 1][j], map[i][j - 1]);
			}
		}
		return map[h - 1][w - 1];
	}
}
```
