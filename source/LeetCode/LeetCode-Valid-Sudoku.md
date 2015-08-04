title: 'LeetCode: Valid Sudoku'
date: 2015-06-24 00:03:22
---

```java

/**
 * Created by hzhou on 5/11/15. codeashobby@gmail.com
 */
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
    @Test
    public void test() {
        String[] s = new String[]{".87654321","2........","3........","4........","5........","6........","7........","8........","9........"};
        char[][] board = new char[9][9];
        for(int i = 0; i < 9; i++) {
            board[i] = s[i].toCharArray();
        }
        isValidSudoku(board);
    }
}
```
