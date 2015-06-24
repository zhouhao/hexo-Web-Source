title: 'LeetCode: Basic Calculator - Reverse Polish Notation'
date: 2015-06-23 20:32:26
tags:
 - LeetCode
---

### Solution:
Convert ***s*** to Reverse Polish Notation(eg. `a+b-c` => `ab+c-`), which will be easier to calculate the result, however this will induce "***Memory Limit Exceeded***"!

```java
public class BasicCalculator {
    public int calculate(String s) {
        if (s == null || s.length() == 0) {
            return 0;
        }

        String str = convertReversePolishNotation(s);

        Stack<Integer> stack = new Stack<Integer>();
        for (int i = 0; i < str.length(); i++) {
            char c = str.charAt(i);
            if (c == ' ') {
                continue;
            }

            if (isOperator(c)) {
                int b = stack.pop();
                int a = stack.pop();
                int result = calc(a, b, c);
                stack.push(result);
            } else {
                int end = readNumber(str, i);
                int num = Integer.valueOf(str.substring(i, end));
                stack.push(num);
                i = end;
            }
        }

        return stack.pop();

    }

    private String convertReversePolishNotation(String s) {
        StringBuilder sb = new StringBuilder();
        Stack<Character> stack = new Stack<Character>();

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (isOperator(c)) {
                while (!stack.isEmpty() && stack.peek() != '(') {
                    sb.append(stack.pop());
                }
                stack.push(c);
            } else if (c == '(') {
                stack.push(c);
            } else if (c == ')') {
                while (!stack.isEmpty()) {
                    char sc = stack.pop();
                    if (sc == '(') {
                        break;
                    }
                    sb.append(sc);
                }
            } else {
                // should be number here
                int end = readNumber(s, i);
                sb.append(s.substring(i, end)).append(' ');
                i = end - 1;
            }
        }
        while (!stack.isEmpty()) {
            sb.append(stack.pop());
        }
        return sb.toString();
    }

    private int calc(int a, int b, char op) {
        if (op == '+') {
            return a + b;
        }
        if (op == '-') {
            return a - b;
        }
        return -1;
    }

    private boolean isNumber(char c) {
        return c >= '0' && c <= '9';
    }

    private boolean isOperator(char c) {
        return c == '+' || c == '-';
    }

    private int readNumber(String s, int start) {
        int end = start;
        while (end < s.length() && isNumber(s.charAt(end))) {
            end++;
        }
        return end;
    }

    @Test
    public void test() {
        String s = "(7)-(0)+(4)";
        int result = calculate(s);

        s=  "(1+(4+5+2)-3)+(6+8)";
        result = calculate(s);
    }
}
```