title: 'LeetCode: Valid Parentheses'
date: 2015-06-24 00:03:22
---

```java

/**
 * Description
 *
 * @author hzhou
 */
public class ValidParentheses {
    public boolean isValid(String s) {
        if (s == null || s.isEmpty()) {
            return true;
        }
        s = s.trim();
        if (s.length() % 2 == 1) {
            return false;
        }
        Stack<Character> stack = new Stack<Character>();
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (isPre(c)) {
                stack.push(c);
            } else {
                if (stack.isEmpty()) {
                    return false;
                }
                char t = stack.pop();
                if (c != findPair(t)) {
                    return false;
                }
            }
        }
        return stack.isEmpty();
    }
    private char findPair(char c) {
        switch (c) {
            case '(':
                return ')';
            case '[':
                return ']';
            case '{':
                return '}';
            default:
                return 0;
        }
    }
    private boolean isPre(char c) {
        return c == '(' || c == '{' || c == '[';
    }
}
```
