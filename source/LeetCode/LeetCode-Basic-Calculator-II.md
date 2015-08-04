title: 'LeetCode: Basic Calculator II'
date: 2015-06-23 00:23:29
---
Implement a basic calculator to evaluate a simple expression string.

The expression string contains only non-negative integers, +, -, *, / operators and empty spaces . The integer division should truncate toward zero.

You may assume that the given expression is always valid.

Some examples:
```
"3+2*2" = 7
" 3/2 " = 1
" 3+5 / 2 " = 5
```
**Note**: Do not use the eval built-in library function.
<!-- more -->

https://leetcode.com/problems/basic-calculator-ii/


```java
import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.assertEquals;

/**
 * Created by hzhou on 2015/6/22.
 * Email: i@hzhou.me
 */
public class BasicCalculatorII {
    public int calculate(String s) {
        if (s == null || s.trim().length() == 0) {
            return 0;
        }

        s = s.replaceAll(" ", "");

        List<Integer> list = new ArrayList<Integer>();

        for (int i = 0; i < s.length(); ) {
            char c = s.charAt(i);
            int op = isOperator(c);
            int end = i + 1;
            if (op == 2) {
                // for * and /, just calculate the result and store it in the list
                int a = list.get(list.size() - 1);
                list.remove(list.size() - 1);
                end = readNumber(s, i + 1);
                list.add(getResult(a, Integer.valueOf(s.substring(i + 1, end)), c));
            } else if (op == 1 && c == '-') {
                // if minus a number, just store thr negative format number in the list
                end = readNumber(s, i + 1);
                list.add(Integer.valueOf(s.substring(i, end)));
            }

            if (isNumber(c)) {
                end = readNumber(s, i);
                list.add(Integer.valueOf(s.substring(i, end)));
            }

            i = end;
        }

        // sum up all integers
        int result = 0;
        for (int a : list) {
            result += a;
        }

        return result;
    }

    /**
     * Read number, and find the last index for current number
     *
     * @param s     given string
     * @param start start index to search number
     * @return last index of current number
     */
    private int readNumber(String s, int start) {
        while (start < s.length()) {
            if (!isNumber(s.charAt(start))) {
                break;
            }
            start++;
        }
        return start;
    }

    /**
     * check a char is number or not
     *
     * @param c char to check
     * @return true for number otherwise false
     */
    private boolean isNumber(char c) {
        return c >= '0' && c <= '9';
    }

    /**
     * Check whether it is a operator
     *
     * @param c char
     * @return 2 for (*, /), 1 for (+,-), otherwise 0
     */
    private int isOperator(char c) {
        if (c == '*' || c == '/') {
            return 2;
        } else if (c == '+' || c == '-') {
            return 1;
        } else {
            return 0;
        }
    }

    /**
     * Calculate the result
     *
     * @param x first parameter
     * @param y second parameter
     * @param c operator
     * @return result
     */
    private int getResult(int x, int y, char c) {
        switch (c) {
            case '+':
                return x + y;
            case '-':
                return x - y;
            case '*':
                return x * y;
            case '/':
                return x / y;
            default:
                return 0;
        }
    }

    @Test
    public void test() {
        String s = "3+2*2";
        assertEquals(7, calculate(s));

        s = "3+5 / 2 ";
        assertEquals(5, calculate(s));

        s = "0" + Integer.MIN_VALUE;
        assertEquals(Integer.MIN_VALUE, calculate(s));
    }
}
```
