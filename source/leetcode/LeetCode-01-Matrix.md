title: 'LeetCode: 01 Matrix'
date: 2016-06-25 20:03:22
---

Given a matrix consists of 0 and 1, find the distance of the nearest 0 for each cell.

The distance between two adjacent cells is 1.

### Example 1:
Input:
```
0 0 0
0 1 0
0 0 0
```
Output:
```
0 0 0
0 1 0
0 0 0
```

### Example 2:
Input:
```
0 0 0
0 1 0
1 1 1
```
Output:
```
0 0 0
0 1 0
1 2 1
```

### Note:
The number of elements of the given matrix will not exceed 10,000.   
There are at least one 0 in the given matrix.   
The cells are adjacent in only four directions: up, down, left and right.   

从每个0 cell开始广度遍历

```java
public class Solution {
    private static final List<Point> DIRECTIONS = new ArrayList<>();

    static {
        DIRECTIONS.add(new Point(0, 1));
        DIRECTIONS.add(new Point(1, 0));
        DIRECTIONS.add(new Point(0, -1));
        DIRECTIONS.add(new Point(-1, 0));
    }


    public int[][] updateMatrix(int[][] matrix) {
        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return null;
        }

        int h = matrix.length;
        int w = matrix[0].length;

        Queue<Point> queue = new LinkedList<>();

        for (int i = 0; i < h; i++) {
            for (int j = 0; j < w; j++) {
                if (matrix[i][j] == 0) {
                    queue.offer(new Point(i, j));
                } else {
                    matrix[i][j] = Integer.MAX_VALUE;
                }
            }
        }

        while (!queue.isEmpty()) {
            Point p = queue.poll();
            for (Point dir : DIRECTIONS) {
                int x = p.getX() + dir.getX();
                int y = p.getY() + dir.getY();
                if (x < 0 || y < 0 || x >= h || y >= w) {
                    continue;
                }
                if (matrix[p.getX()][p.getY()] >= matrix[x][y]) {
                    continue;
                }

                matrix[x][y] = matrix[p.getX()][p.getY()] + 1;
                queue.offer(new Point(x, y));
            }
        }
        return matrix;
    }

    private static class Point {
        private int x;
        private int y;

        public Point(int x, int y) {
            this.x = x;
            this.y = y;
        }

        public int getX() {
            return x;
        }

        public int getY() {
            return y;
        }
    }
}
```
