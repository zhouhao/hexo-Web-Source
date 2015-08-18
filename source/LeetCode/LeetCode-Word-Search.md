title: 'LeetCode: Word Search'
date: 2015-06-24 00:03:22
---

```java

public class WordSearch {
    public boolean exist(char[][] board, String word) {
        if (board == null || board.length == 0 || board[0].length == 0) {
            return false;
        }
        int l = board.length;
        int w = board[0].length;
        boolean[][] isVisited = new boolean[l][w];
        for (int i = 0; i < l; i++) {
            for (int j = 0; j < w; j++) {
                if (helper(board, word, i, j, 0, isVisited)) {
                    return true;
                }
            }
        }
        return false;
    }
    private boolean helper(char[][] board, String word, int l, int w, int crt, boolean[][] isVisited) {
        if (crt == word.length()) {
            return true;
        }
        if (l < 0 || w < 0 || l >= board.length || w >= board[0].length || isVisited[l][w]) {
            return false;
        }
        if (board[l][w] != word.charAt(crt)) {
            return false;
        } else {
            isVisited[l][w] = true;
            boolean result = helper(board, word, l + 1, w, crt + 1, isVisited) ||
                    helper(board, word, l - 1, w, crt + 1, isVisited) ||
                    helper(board, word, l, w - 1, crt + 1, isVisited) ||
                    helper(board, word, l, w + 1, crt + 1, isVisited);
            isVisited[l][w] = false;
            return result;
        }
    }
}
```
