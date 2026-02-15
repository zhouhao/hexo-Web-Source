title: 'LeetCode: Fraction to Recurring Decimal'
date: 2015-06-24 00:03:22
---
 
```java

/**
 * Created by hzhou on 5/10/15. codeashobby@gmail.com
 * <p/>
 * Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.
 * <p/>
 * If the fractional part is repeating, enclose the repeating part in parentheses.
 * <p/>
 * For example,
 * <p/>
 * Given numerator = 1, denominator = 2, return "0.5".
 * <p/>
 * Given numerator = 2, denominator = 1, return "2".
 * <p/>
 * Given numerator = 2, denominator = 3, return "0.(6)".
 */
public class FractionToRecurringDecimal {
    //TODO
    public String fractionToDecimal(int numerator, int denominator) {
        if (denominator == 0) {
            return "";
        }
        if (numerator == 0) {
            return "0";
        }
        StringBuilder sb = new StringBuilder();
        if ((numerator < 0) ^ (denominator < 0)) {
            sb.append("-");
        }
        // first assign, then get Math.abs()
        long n = numerator;
        long d = denominator;
        n = Math.abs(n);
        d = Math.abs(d);
        sb.append(n / d);
        long remain = n % d;
        remain *= 10;
        if (remain == 0) return sb.toString();
        sb.append(".");
        Map<Long, Integer> map = new HashMap<Long, Integer>();
        while (remain != 0) {
            if (map.containsKey(remain)) {
                int start = map.get(remain);
                sb.insert(start, "(");
                sb.append(")");
                break;
            }
            map.put(remain, sb.length());
            sb.append(remain / d);
            remain = (remain % d) * 10;
        }
        return sb.toString();
    }
    @Test
    public void test() {
        String result = fractionToDecimal(-1, -2147483648);
        System.out.println(result);
    }
}
```
