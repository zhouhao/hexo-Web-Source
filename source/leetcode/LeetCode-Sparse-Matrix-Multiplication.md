title: 'LeetCode: Sparse Matrix Multiplication'
date: 2016-06-25 20:03:22
---

Given two [sparse matrices](https://en.wikipedia.org/wiki/Sparse_matrix) A and B, return the result of AB.

You may assume that A's column number is equal to B's row number.

### Example:

```
A = [
  [ 1, 0, 0],
  [-1, 0, 3]
]

B = [
  [ 7, 0, 0 ],
  [ 0, 0, 0 ],
  [ 0, 0, 1 ]
]


     |  1 0 0 |   | 7 0 0 |   |  7 0 0 |
AB = | -1 0 3 | x | 0 0 0 | = | -7 0 3 |
                  | 0 0 1 |
```

```java
public class Solution {
     public int[][] multiply(int[][] A, int[][] B) {
        if (A == null || A.length == 0 || B == null || B.length == 0 || A[0].length != B.length) {
            return new int[0][0];
        }

        int[][] result = new int[A.length][B[0].length];
        int length = B[0].length;
        for (int i = 0; i < A.length; i++) {
            for (int j = 0; j < A[0].length; j++) {
                if (A[i][j] == 0) continue;
                for (int k = 0; k < length; k++) {
                    result[i][k] += A[i][j] * B[j][k];
                }
            }
        }
        return result;
    }
}
```