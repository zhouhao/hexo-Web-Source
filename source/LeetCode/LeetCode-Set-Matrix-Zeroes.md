title: 'LeetCode: Set Matrix Zeroes'
date: 2015-06-24 00:03:22
---
 
```java

/**
 * Description:
 *
 * @author hzhou
 */
public class SetMatrixZeroes {
    public void setZeroes(int[][] matrix) {
        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return;
        }
        Set<Integer> line = new HashSet<Integer>();
        Set<Integer> row = new HashSet<Integer>();
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[0].length; j++) {
                if (matrix[i][j] == 0) {
                    line.add(i);
                    row.add(j);
                }
            }
        }
        for (Integer n : line) {
            for (int i = 0; i < matrix[0].length; i++) {
                matrix[n][i] = 0;
            }
        }
        for (Integer n : row) {
            for (int i = 0; i < matrix.length; i++) {
                matrix[i][n] = 0;
            }
        }
    }
}
```
