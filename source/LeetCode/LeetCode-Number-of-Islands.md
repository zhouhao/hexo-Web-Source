title: 'LeetCode: Number of Islands'
date: 2015-06-24 00:03:22
tags:
 - LeetCode
---
<hr/>    

```java

/**
 * Created by hzhou on 2015/5/18.
 * <p/>
 * Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
 * <p/>
 * Example 1:
 * <pre>
 * 11110
 * 11010
 * 11000
 * 00000
 * </pre>
 * Answer: 1
 * <p/>
 * Example 2:
 * <pre>
 * 11000
 * 11000
 * 00100
 * 00011
 * </pre>
 * Answer: 3
 */
public class NumberOfIslands {
    public int numIslands(char[][] grid) {
        if (grid == null || grid.length == 0 || grid[0].length == 0) {
            return 0;
        }
        int count = 0;
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[0].length; j++) {
                if (grid[i][j] == '1') {
                    count++;
                    fillHelper(grid, i, j);
                }
            }
        }
        return count;
    }
    private void fillHelper(char[][] grid, int i, int j) {
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) {
            return;
        }
        if (grid[i][j] != '1') {
            return;
        }
        grid[i][j] = '2';
        fillHelper(grid, i - 1, j);
        fillHelper(grid, i, j - 1);
        fillHelper(grid, i + 1, j);
        fillHelper(grid, i, j + 1);
    }
}
```
