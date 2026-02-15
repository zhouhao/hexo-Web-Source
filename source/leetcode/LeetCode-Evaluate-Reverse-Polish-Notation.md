title: 'LeetCode: Evaluate Reverse Polish Notation'
date: 2015-06-24 00:03:22
---
 
```java

import static org.junit.Assert.assertSame;
/**
 * Description: Evaluate the value of an arithmetic expression in Reverse Polish Notation.
 * <p/>
 * Valid operators are +, -, *, /. Each operand may be an integer or another expression.
 * <p/>
 * Some examples:
 * <pre>
 * ["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
 * ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6
 * </pre>
 *
 * @author hzhou
 */
public class EvaluateReversePolishNotation {
    public int evalRPN(String[] tokens) {
        if (tokens == null || tokens.length == 0) {
            return 0;
        }
        Stack<Integer> stack = new Stack<Integer>();
        for (String s : tokens) {
            if (isOperator(s)) {
                if (stack.size() < 2) {
                    return 0;
                }
                int b = stack.pop();
                int a = stack.pop();
                int result = getResult(a, b, s);
                stack.push(result);
            } else {
                int c = Integer.valueOf(s);
                stack.push(c);
            }
        }
        return stack.size() != 1 ? 0 : stack.pop();
    }
    private boolean isOperator(String s) {
        if (s == null || s.length() > 1) {
            return false;
        }
        char c = s.charAt(0);
        return c == '+' ||
                c == '-' ||
                c == '*' ||
                c == '/';
    }
    private int getResult(int a, int b, String c) {
        char op = c.charAt(0);
        switch (op) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return a / b;
            default:
                return 0;
        }
    }
    @Test
    public void test() {
        String[] tokens = new String[]{"2", "1", "+", "3", "*"};
        assertSame(9, evalRPN(tokens));
    }
}
```
