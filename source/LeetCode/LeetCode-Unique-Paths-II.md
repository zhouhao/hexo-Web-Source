title: 'LeetCode: Unique Paths II'
date: 2015-06-24 00:03:22
tags:
 - LeetCode
---
<hr/>    

```java

/**
 * Description
 *
 * @author hzhou
 */
public class UniquePathsII {
	public int uniquePathsWithObstacles(int[][] obstacleGrid) {
		if (obstacleGrid == null) {
			return 0;
		}
		int h = obstacleGrid.length;
		int w = obstacleGrid[0].length;
		int[][] map = new int[h][w];
		for (int i = 0; i < w; i++) {
			if (obstacleGrid[0][i] == 0) {
				map[0][i] = 1;
			} else {
				break;
			}
		}
		for (int i = 0; i < h; i++) {
			if (obstacleGrid[i][0] == 0) {
				map[i][0] = 1;
			} else {
				break;
			}
		}
		for (int i = 1; i < w; i++) {
			for (int j = 1; j < h; j++) {
				map[j][i] = obstacleGrid[j][i] == 1 ? 0 : map[j - 1][i] + map[j][i - 1];
			}
		}
		return map[h - 1][w - 1];
	}
}
```
