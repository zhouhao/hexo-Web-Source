title: 'LeetCode: Search a 2D Matrix'
date: 2015-06-24 00:03:22
---
 
```java

/**
 * Description:
 * TODO: this algorithm is not elegant
 *
 * @author hzhou
 */
public class SearchA2DMatrix {
    public boolean searchMatrix(int[][] matrix, int target) {
        if (matrix == null || matrix.length == 0) {
            return false;
        }
        if (target < matrix[0][0] || target > matrix[matrix.length - 1][matrix[0].length - 1]) {
            return false;
        }
        // find the right row
        int start = 0;
        int end = matrix.length - 1;
        while (start <= end) {
            if (start + 1 == end) {
                start = (target >= matrix[end][0]) ? end : start;
                break;
            }
            int middle = (start + end) / 2;
            if (matrix[middle][0] == target) {
                return true;
            }
            if (target > matrix[end][0]) {
                start = end;
                break;
            }
            if (matrix[middle][0] > target) {
                end = middle - 1;
            } else {
                start = middle;
            }
        }
        int row = start;
        start = 0;
        end = matrix[0].length - 1;
        while (start <= end) {
            int middle = (start + end) / 2;
            if (matrix[row][middle] == target) {
                return true;
            }
            if (matrix[row][middle] > target) {
                end = middle - 1;
            } else {
                start = middle + 1;
            }
        }
        return false;
    }
    @Test
    public void test() {
        int[][] matrix = new int[][]{{1}, {3}};
        searchMatrix(matrix, 3);
    }
}
```
