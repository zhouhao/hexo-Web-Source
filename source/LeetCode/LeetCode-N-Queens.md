title: 'LeetCode: N-Queens'
date: 2015-06-25 20:03:22
---

```java

/**
 * Description:
 *
 * @author hzhou
 */
public class NQueens {
    public List<String[]> solveNQueens(int n) {
        List<String[]> result = new ArrayList<String[]>();
        if (n < 1) {
            return result;
        }
        helper(result, new ArrayList<String>(), 0, n);
        return result;
    }
    private void helper(List<String[]> result, List<String> crt, int row, int n) {
        if (row == n) {
            result.add(crt.toArray(new String[crt.size()]));
            return;
        }
        for (int i = 0; i < n; i++) {
            if (isValid(crt, row, i, n)) {
                String s = lineGenerator(i, n);
                crt.add(s);
                helper(result, crt, row + 1, n);
                crt.remove(crt.size() - 1);
            }
        }
    }
    private boolean isValid(List<String> crt, int x, int y, int n) {
        for (int i = 0; i < x; i++) {
            int offSet = x - i;
            if (crt.get(i).charAt(y) == 'Q') {
                return false;
            }
            if (y - offSet >= 0 && crt.get(i).charAt(y - offSet) == 'Q') {
                return false;
            }
            if (y + offSet < n && crt.get(i).charAt(y + offSet) == 'Q') {
                return false;
            }
        }
        return true;
    }
    private String lineGenerator(int x, int n) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < n; i++) {
            if (i == x) {
                sb.append('Q');
            } else {
                sb.append('.');
            }
        }
        return sb.toString();
    }
}
```
