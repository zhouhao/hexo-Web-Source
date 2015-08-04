title: 'LeetCode: Surrounded Regions'
date: 2015-06-24 00:03:22
---

```java

/**
 * Description:
 *
 * @author hzhou
 */
public class SurroundedRegions {
    Queue<Pair> queue = new LinkedList<Pair>();
    public void solve(char[][] board) {
        if (board == null || board.length < 3 || board[0] == null || board[0].length < 3) {
            return;
        }
        for (int i = 0; i < board.length; i++) {
            if (board[i][0] == 'O') {
                helper(board, i, 0);
            }
            if (board[i][board[0].length - 1] == 'O') {
                helper(board, i, board[0].length - 1);
            }
        }
        for (int i = 0; i < board[0].length; i++) {
            if (board[0][i] == 'O') {
                helper(board, 0, i);
            }
            if (board[board.length - 1][i] == 'O') {
                helper(board, board.length - 1, i);
            }
        }
        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[0].length; j++) {
                if (board[i][j] == 'O') {
                    board[i][j] = 'X';
                }
                if (board[i][j] == '#') {
                    board[i][j] = 'O';
                }
            }
        }
    }
    private void helper(char[][] board, int i, int j) {
        search(board, i, j);
        while (!queue.isEmpty()) {
            Pair p = queue.poll();
            search(board, p.x + 1, p.y);
            search(board, p.x - 1, p.y);
            search(board, p.x, p.y + 1);
            search(board, p.x, p.y - 1);
        }
    }
    private void search(char[][] board, int i, int j) {
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] != 'O') {
            return;
        }
        queue.add(new Pair(i, j));
        board[i][j] = '#';
    }
    static class Pair {
        Pair(int x, int y) {
            this.x = x;
            this.y = y;
        }
        int x, y;
    }
}
```
