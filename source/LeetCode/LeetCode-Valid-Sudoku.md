title: 'LeetCode: Valid Sudoku'
date: 2015-06-24 00:03:22
---

```java
public class ValidSudoku {
    public boolean isValidSudoku(char[][] board) {
        Set<Character> set = new HashSet<Character>();
        for (int i = 0; i < 9; i++) {
            set.clear();
            for (int j = 0; j < 9; j++) {
                char c = board[i][j];
                if (c != '.') {
                    if (set.contains(c)) {
                        return false;
                    } else {
                        set.add(c);
                    }
                }
            }
        }
        for (int i = 0; i < 9; i++) {
            set.clear();
            for (int j = 0; j < 9; j++) {
                char c = board[j][i];
                if (c != '.') {
                    if (set.contains(c)) {
                        return false;
                    } else {
                        set.add(c);
                    }
                }
            }
        }
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                int r = 3 * i;
                int c = 3 * j;
                set.clear();
                for (int x = r; x < r + 3; x++) {
                    for (int y = c; y < c + 3; y++) {
                        char z = board[x][y];
                        if (z != '.') {
                            if (set.contains(z)) {
                                return false;
                            } else {
                                set.add(z);
                            }
                        }
                    }
                }
            }
        }
        return true;
    }
}
```
