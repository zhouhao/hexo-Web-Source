title: 'LeetCode: Generate Parentheses'
date: 2015-06-24 00:03:22
---

```java

/**
 * Created by hzhou on 2015/5/21.
 * Email: codeashobby@gmail.com
 */
public class GenerateParentheses {
    public List<String> generateParenthesis(int n) {
        List<String> result = new ArrayList<String>();
        if (n <= 0) {
            return result;
        }
        helper(n, n, new StringBuilder(), result);
        return result;
    }
    private void helper(int left, int right, StringBuilder sb, List<String> result) {
        if (left == 0 && right == 0) {
            result.add(sb.toString());
            return;
        }
        if (left > right) {
            return;
        }
        if (left > 0) {
            StringBuilder sbl = new StringBuilder(sb);
            sbl.append('(');
            helper(left - 1, right, sbl, result);
        }
        if (right >= left) {
            StringBuilder sbr = new StringBuilder(sb);
            sbr.append(')');
            helper(left, right - 1, sbr, result);
        }
    }
    @Test
    public void test() {
        List<String> result = generateParenthesis(3);
    }
}
```
