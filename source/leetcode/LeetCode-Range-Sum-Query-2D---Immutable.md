title: 'LeetCode: Range Sum Query 2D - Immutable'
date: 2016-06-25 20:03:22
---

Given a 2D matrix matrix, find the sum of the elements inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).


### Example:
```
Given matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
]

sumRegion(2, 1, 4, 3) -> 8
sumRegion(1, 1, 2, 2) -> 11
sumRegion(1, 2, 2, 4) -> 12
```

### Note:
1. You may assume that the matrix does not change.
2. There are many calls to sumRegion function.
3. You may assume that row1 ≤ row2 and col1 ≤ col2.

```java
public class NumMatrix {

     private int[][] dict;

    public NumMatrix(int[][] matrix) {
        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return;
        }

        dict = new int[matrix.length][matrix[0].length];
        int sum = 0;
        for (int i = 0; i < matrix[0].length; i++) {
            int x = matrix[0][i];
            sum += x;
            dict[0][i] = sum;
        }
        sum = 0;
        for (int i = 0; i < matrix.length; i++) {
            int x = matrix[i][0];
            sum += x;
            dict[i][0] = sum;
        }

        for (int i = 1; i < matrix.length; i++) {
            for (int j = 1; j < matrix[0].length; j++) {
                dict[i][j] = dict[i - 1][j] + dict[i][j - 1] - dict[i - 1][j - 1] + matrix[i][j];
            }
        }
    }

    public int sumRegion(int row1, int col1, int row2, int col2) {
         return dict[row2][col2] -
                (col1 == 0 ? 0 : dict[row2][col1 - 1]) -
                (row1 == 0 ? 0 : dict[row1 - 1][col2]) +
                (col1 * row1 == 0 ? 0 : dict[row1 - 1][col1 - 1]);
    }
}


// Your NumMatrix object will be instantiated and called as such:
// NumMatrix numMatrix = new NumMatrix(matrix);
// numMatrix.sumRegion(0, 1, 2, 3);
// numMatrix.sumRegion(1, 2, 3, 4);
```