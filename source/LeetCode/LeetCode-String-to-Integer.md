title: 'LeetCode: String to Integer (atoi)'
date: 2015-06-25 20:03:22
---

```java

/**
 * Description
 *
 * @author hzhou
 */
public class StringToInteger {
    public int myAtoi(String str) {
        if (str == null || str.trim().isEmpty()) {
            return 0;
        }
        str = str.trim();
        double result = 0;
        int offSet = 0;
        boolean positive = true;
        char c = str.charAt(0);
        if (c == '-') {
            positive = false;
            offSet++;
        }
        if (c == '+') {
            offSet++;
        }
        while (offSet < str.length() && isNumber(str.charAt(offSet))) {
            result = result * 10 + (str.charAt(offSet) - '0');
            offSet++;
        }
        result = positive ? result : -1 * result;
        if (result > Integer.MAX_VALUE) {
            return Integer.MAX_VALUE;
        }
        if (result < Integer.MIN_VALUE) {
            return Integer.MIN_VALUE;
        }
        return (int) result;
    }
    private boolean isNumber(char c) {
        return c >= '0' && c <= '9';
    }
    @Test
    public void test() {
        System.out.println(myAtoi("-212121"));
        System.out.println(myAtoi(String.valueOf(Integer.MAX_VALUE)));
        System.out.println(myAtoi(String.valueOf(Integer.MIN_VALUE)));
        System.out.println(myAtoi("-2147483649"));
        System.out.println(myAtoi("2147483649"));
    }
}
```
