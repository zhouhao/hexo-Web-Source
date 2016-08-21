title: 'LeetCode: Maximal Square'
date: 2015-06-23 21:03:42
---
 Given a 2D binary matrix filled with 0's and 1's, find the largest square containing all 1's and return its area.

For example, given the following matrix:
```
1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0
```
Return 4.

### To finish this, please implement this first: [Maximal Rectangle](LeetCode-Maximal-Rectangle.html)

```java
public class MaximalSquare {
    public int maximalSquare(char[][] matrix) {
        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return 0;
        }

        int h = matrix.length;
        int w = matrix[0].length;
        int[][] map = new int[h][w + 1];
        
        for (int i = 0; i < h; i++) {
            for (int j = 0; j < w; j++) {
                if (i == 0) {
                    map[i][j] = matrix[i][j] - '0';
                } else {
                    if (matrix[i][j] == '0') {
                        map[i][j] = 0;
                    } else {
                        map[i][j] = 1 + map[i - 1][j];
                    }
                }
            }
        }

        int max = 0;
        for (int i = 0; i < h; i++) {
            max = Math.max(max, helper(map[i]));
        }

        return max;
    }

    private int helper(int[] height) {
        if (height == null || height.length == 0) {
            return 0;
        }

        Stack<Integer> stack = new Stack<Integer>();
        int crt, max;
        crt = max = 0;
        while (crt < height.length) {
            if (stack.isEmpty() || height[crt] >= height[stack.peek()]) {
                stack.push(crt++);
            } else {
                int top = stack.pop();
                int length = Math.min(height[top], (stack.isEmpty() ? crt : crt - stack.peek() - 1));
                max = Math.max(max, length * length);
            }
        }

        return max;
    }
}
```
