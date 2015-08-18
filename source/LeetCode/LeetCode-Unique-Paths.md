title: 'LeetCode: Unique Paths'
date: 2015-06-24 00:03:22
---

```java
public class UniquePaths {
    public int uniquePaths1(int m, int n) {
        if (m < 1 || n < 1) {
            return 0;
        }
        if (m == 1) {
            return 1;
        }
        if (n == 1) {
            return 1;
        }
        return uniquePaths1(m - 1, n) + uniquePaths1(m, n - 1);
    }
    public int uniquePaths2(int m, int n) {
        if (m < 1 || n < 1) {
            return 0;
        }
        if (m == 1 || n == 1) {
            return 1;
        }
        int[][] result = new int[m][n];
        for (int i = 0; i < m; i++) {
            result[i][0] = 1;
        }
        for (int i = 0; i < n; i++) {
            result[0][i] = 1;
        }
        for(int i =1; i< m; i++) {
            for(int j = 1; j < n; j++) {
                result[i][j] = result[i][j-1] + result[i-1][j];
            }
        }
        return result[m-1][n-1];
    }
}
```
