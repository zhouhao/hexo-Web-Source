title: 'LeetCode: Different Ways to Add Parentheses'
date: 2015-08-09 22:08:36
---
Given a string of numbers and operators, return all possible results from computing all the different possible ways to group numbers and operators. The valid operators are `+`, `-` and `*`.

### Example 1
Input: `"2-1-1"`.
```
((2-1)-1) = 0
(2-(1-1)) = 2
```
Output: `[0, 2]`


### Example 2
Input: `"2*3-4*5"`
```
(2*(3-(4*5))) = -34
((2*3)-(4*5)) = -14
((2*(3-4))*5) = -10
(2*((3-4)*5)) = -10
(((2*3)-4)*5) = 10
```
Output: `[-34, -14, -10, -10, 10]`

```java
public class Solution {
    public List<Integer> diffWaysToCompute(String input) {
        List<Integer> result = new ArrayList<>();

        if (input == null || input.length() == 0) {
            return result;
        }

        for (int i = 0; i < input.length(); i++) {
            char c = input.charAt(i);
            if (!isOperator(c)) {
                continue;
            }

            List<Integer> p1 = diffWaysToCompute(input.substring(0, i));
            List<Integer> p2 = diffWaysToCompute(input.substring(i + 1, input.length()));

            for (int a : p1) {
                for (int b : p2) {
                    result.add(calc(a, b, c));
                }
            }
        }
        // if input is a single number
        if (result.isEmpty()) {
            result.add(Integer.parseInt(input));
        }

        return result;
    }

    private boolean isOperator(char c) {
        return c == '+' || c == '-' || c == '*';
    }

    private int calc(int a, int b, char c) {
        switch (c) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b; 
            //default should never be reached
            default:
                return Integer.MAX_VALUE;
        }
    }
}
```