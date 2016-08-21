title: 'LeetCode: Rotate Image'
date: 2015-06-24 00:03:22
---
 
```java

/**
 * Description:
 *
 * @author hzhou
 */
public class RotateImage {
    public void rotate(int[][] matrix) {
        if (matrix == null || matrix.length < 2) {
            return;
        }
        int n = matrix.length;
        int m = n;
        if (n % 2 != 0) {
            m++;
        }
        for (int i = 0; i < n / 2; i++) {
            for (int j = 0; j < m / 2; j++) {
                int tmp = matrix[i][j];
                matrix[i][j] = matrix[n - 1 - j][i];
                matrix[n - 1 - j][i] = matrix[n - i - 1][n - 1 - j];
                matrix[n - i - 1][n - 1 - j] = matrix[j][n - 1 - i];
                matrix[j][n - 1 - i] = tmp;
            }
        }
    }
}
```
