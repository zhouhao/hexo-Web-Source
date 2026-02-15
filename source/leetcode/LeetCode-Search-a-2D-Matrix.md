title: 'LeetCode: Search a 2D Matrix'
date: 2015-06-24 00:03:22
---
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

1. Integers in each row are sorted from left to right.
2. The first integer of each row is greater than the last integer of the previous row.

For example,

Consider the following matrix:
```
[
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
```
Given target = `3`, return `true`.

 
```java

public class SearchA2DMatrix {
    public boolean searchMatrix(int[][] matrix, int target) {
        if (matrix == null || matrix.length == 0 || matrix[0] == null || matrix[0].length == 0) return false;
        int h = matrix.length;
        int w = matrix[0].length;

        int l = 0, r = h * w - 1;
        while (l <= r) {
            int m = l + (r - l) / 2;
            int g = get(m, matrix);
            if (g == target) return true;
            if (g > target) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        }
        return false;
    }

    private int get(int i, int[][] matrix) {
        int r = i / matrix[0].length;
        int c = i % matrix[0].length;
        return matrix[r][c];
    }
}
```
