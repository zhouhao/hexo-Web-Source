title: 'LeetCode: Spiral Matrix'
date: 2015-06-24 00:03:22
---

```java

/**
 * Description Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.
 * <p/>
 * For example, Given the following matrix:
 * <p/>
 * [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ] You should return [1,2,3,6,9,8,7,4,5].
 *
 * @author hzhou
 */
public class SpiralMatrix {
    public List<Integer> spiralOrder(int[][] matrix) {
        List<Integer> result = new ArrayList<Integer>();
        if (matrix == null || matrix.length == 0) {
            return result;
        }
        int h = matrix.length;
        int w = matrix[0].length;
        int x = 0;
        int y = 0;
        while (h > 0 && w > 0) {
            if (h == 1) {
                for (int i = 0; i < w; i++) {
                    result.add(matrix[x][y++]);
                }
                break;
            } else if (w == 1) {
                for (int i = 0; i < h; i++) {
                    result.add(matrix[x++][y]);
                }
                break;
            }
            // top
            for (int i = 0; i < w - 1; i++) {
                result.add(matrix[x][y++]);
            }
            // right
            for (int i = 0; i < h - 1; i++) {
                result.add(matrix[x++][y]);
            }
            // bottom
            for (int i = 0; i < w - 1; i++) {
                result.add(matrix[x][y--]);
            }
            // left
            for (int i = 0; i < h - 1; i++) {
                result.add(matrix[x--][y]);
            }
            y++;
            x++;
            w = w - 2;
            h = h - 2;
        }
        return result;
    }
}
```
