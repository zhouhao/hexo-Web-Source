title: 'LeetCode: Android Unlock Patterns'
date: 2017-09-04 20:03:22
---

Given an Android 3x3 key lock screen and two integers m and n, where 1 ≤ m ≤ n ≤ 9, count the total number of unlock patterns of the Android lock screen, which consist of minimum of m keys and maximum n keys.

### Rules for a valid pattern:
1. Each pattern must connect at least m keys and at most n keys.
2. All the keys must be distinct.
3. If the line connecting two consecutive keys in the pattern passes through any other keys, the other keys must have previously selected in the pattern. No jumps through non selected key is allowed.
4. The order of keys used matters.

https://leetcode.com/problems/android-unlock-patterns/description/

```
Explanation:
| 1 | 2 | 3 |
| 4 | 5 | 6 |
| 7 | 8 | 9 |
```
Invalid move: `4 - 1 - 3 - 6`
Line 1 - 3 passes through key 2 which had not been selected in the pattern.

Invalid move: `4 - 1 - 9 - 2`
Line 1 - 9 passes through key 5 which had not been selected in the pattern.

Valid move: `2 - 4 - 1 - 3 - 6`
Line 1 - 3 is valid because it passes through key 2, which had been selected in the pattern

Valid move: `6 - 5 - 4 - 1 - 9 - 2`
Line 1 - 9 is valid because it passes through key 5, which had been selected in the pattern.

Example:
Given m = 1, n = 1, return 9.

 ```java
class Solution {
    public int numberOfPatterns(int m, int n) {
        int[][] dict = new int[10][10];
        for (int i = 1; i < 10; i++) {
            for (int j = 0; j < 10; j++) {
                dict[i][j] = 0;
            }
        }
        dict[1][3] = dict[3][1] = 2;
        dict[1][7] = dict[7][1] = 4;
        dict[4][6] = dict[6][4] = 5;
        dict[2][8] = dict[8][2] = 5;
        dict[7][9] = dict[9][7] = 8;
        dict[3][9] = dict[9][3] = 6;
        dict[1][9] = dict[9][1] = dict[3][7] = dict[7][3] = 5;

        boolean[] visited = new boolean[10];
        for (int i = 1; i < 10; i++) {
            visited[i] = false;
        }

        int result = 0;
        result += 4 * helper(m, n, dict, visited, 1, 0, 1); // 1,3,7,9
        result += 4 * helper(m, n, dict, visited, 2, 0, 1); // 2,4,6,8
        result += helper(m, n, dict, visited, 5, 0, 1);
        return result;

    }

    private int helper(int m, int n, int[][] dict, boolean[] visited, int start, int result, int length) {
        if (length >= m) {
            result++;
        }
        if (length >= n) {
            return result;
        }

        visited[start] = true;
        for (int i = 1; i < 10; i++) {
            int x = dict[start][i];
            if (!visited[i] && (x == 0 || visited[x])) {
                result = helper(m, n, dict, visited, i, result, length + 1);
            }
        }
        visited[start] = false;

        return result;
    }
}
```
