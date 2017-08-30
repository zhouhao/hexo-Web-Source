title: 'LeetCode: Image Smoother'
date: 2017-08-30 20:03:22
---

Given a 2D integer matrix M representing the gray scale of an image, you need to design a smoother to make the gray scale of each cell becomes the average gray scale (rounding down) of all the 8 surrounding cells and itself. If a cell has less than 8 surrounding cells, then use as many as you can.

### Example 1:
```
Input:
[[1,1,1],
 [1,0,1],
 [1,1,1]]
Output:
[[0, 0, 0],
 [0, 0, 0],
 [0, 0, 0]]
Explanation:
For the point (0,0), (0,2), (2,0), (2,2): floor(3/4) = floor(0.75) = 0
For the point (0,1), (1,0), (1,2), (2,1): floor(5/6) = floor(0.83333333) = 0
For the point (1,1): floor(8/9) = floor(0.88888889) = 0
```
#### Note:
1. The value in the given matrix is in the range of [0, 255].
2. The length and width of the given matrix are in the range of [1, 150].
3.
```java
class Solution {
    public int[][] imageSmoother(int[][] M) {
        if (M == null || M.length == 0 || M[0] == null || M[0].length == 0) return new int[0][0];

        int[][] result = new int[M.length][M[0].length];
        for (int x = 0; x < M.length; x++) {
            for (int y = 0; y < M[0].length; y++) {
                result[x][y] = helper(x, y, M);
            }
        }
        return result;
    }

    private int helper(int x, int y, int[][] M) {
        int sum = 0;
        int count = 0;
        sum += M[x][y];
        count++;
        if (x > 0) {
            sum += M[x - 1][y];
            count++;
        }
        if (y > 0) {
            sum += M[x][y - 1];
            count++;
        }

        if (x > 0 && y > 0) {
            sum += M[x - 1][y - 1];
            count++;
        }

        if (x < M.length - 1) {
            sum += M[x + 1][y];
            count++;
        }

        if (y < M[x].length - 1) {
            sum += M[x][y + 1];
            count++;
        }

        if (x < M.length - 1 && y < M[x].length - 1) {
            sum += M[x + 1][y + 1];
            count++;
        }

        if (x > 0 && y < M[x].length - 1) {
            sum += M[x - 1][y + 1];
            count++;
        }

        if (y > 0 && x < M.length - 1) {
            sum += M[x + 1][y - 1];
            count++;
        }

        return sum / count;
    }
}
```
