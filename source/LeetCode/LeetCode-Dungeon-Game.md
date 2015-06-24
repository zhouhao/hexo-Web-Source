title: 'LeetCode: Dungeon Game'
date: 2015-06-24 00:03:22
tags:
 - LeetCode
---
<hr/>    

```java

/**
 * Created by hzhou on 2015/6/7.
 * Email: i@hzhou.me
 */
public class DungeonGame {
    public int calculateMinimumHP(int[][] dungeon) {
        int result = 0;
        if (dungeon == null || dungeon.length == 0) {
            return result;
        }
        int h = dungeon.length;
        int w = dungeon[0].length;
        int[][] map = new int[h][w];
        map[h - 1][w - 1] = Math.max(1, 1 - dungeon[h - 1][w - 1]);
        for (int i = h - 2; i >= 0; i--) {
            map[i][w - 1] = Math.max(map[i + 1][w - 1] - dungeon[i][w - 1], 1);
        }
        for (int i = w - 2; i >= 0; i--) {
            map[h - 1][i] = Math.max(map[h - 1][i + 1] - dungeon[h - 1][i], 1);
        }
        for (int i = h - 2; i >= 0; i--) {
            for (int j = w - 2; j >= 0; j--) {
                map[i][j] = Math.min(Math.max(1, map[i + 1][j] - dungeon[i][j]),
                        Math.max(1, map[i][j + 1] - dungeon[i][j]));
            }
        }
        return map[0][0];
    }
}
```
