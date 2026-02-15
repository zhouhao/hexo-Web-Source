title: 'LeetCode: Complex Number Multiplication'
date: 2017-08-30 20:03:22
---

Given two strings representing two complex numbers.

You need to return a string representing their multiplication. Note i2 = -1 according to the definition.

### Example 1:
```
Input: "1+1i", "1+1i"
Output: "0+2i"
Explanation: (1 + i) * (1 + i) = 1 + i2 + 2 * i = 2i, and you need convert it to the form of 0+2i.
```
### Example 2:
```
Input: "1+-1i", "1+-1i"
Output: "0+-2i"
Explanation: (1 - i) * (1 - i) = 1 + i2 - 2 * i = -2i, and you need convert it to the form of 0+-2i.
```

#### Note:
1. The input strings will not have extra blank.
2. The input strings will be given in the form of a+bi, where the integer a and b will both belong to the range of [-100, 100]. And the output should be also in this form.


```java
public class Solution {
    public String complexNumberMultiply(String a, String b) {
        return multiplication(parse(a), parse(b)).toString();
    }

    private ComplexNumber parse(String a) {
        if (a == null || a.isEmpty()) {
            return new ComplexNumber();
        }
        ComplexNumber result = new ComplexNumber();
        String[] split = a.split("\\+");
        if (split.length == 1) {
            if (split[0].contains("i")) {
                result.a = 0;
                result.b = Integer.valueOf(split[0].substring(0, split[0].length() - 1));
            } else {
                result.a = Integer.valueOf(split[0]);
                result.b = 0;
            }
        } else {
            result.a = Integer.valueOf(split[0]);
            result.b = Integer.valueOf(split[1].substring(0, split[1].length() - 1));
        }
        return result;
    }

    private ComplexNumber multiplication(ComplexNumber a, ComplexNumber b) {
        ComplexNumber result = new ComplexNumber();
        result.a = a.a * b.a - a.b * b.b;
        result.b = a.a * b.b + a.b * b.a;
        return result;
    }

    private static class ComplexNumber {
        int a = 0;
        int b = 0;

        ComplexNumber() {
        }

        @Override
        public String toString() {
            return a+"+"+b+"i";
        }
    }
}
```
