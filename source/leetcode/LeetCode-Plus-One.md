title: 'LeetCode: Plus One'
date: 2015-06-24 00:03:22
---
 
```java

/**
 * Created by hzhou on 4/22/15. codeashobby@gmail.com
 */
public class PlusOne {
    public int[] plusOne(int[] digits) {
        if (digits.length == 0) {
            return new int[]{1};
        }
        int inc = 1;
        for (int i = digits.length - 1; i >= 0; i--) {
            int sum = inc + digits[i];
            digits[i] = sum % 10;
            inc = sum / 10;
            if (inc == 0) {
                break;
            }
        }
        if (inc == 1) {
            int[] result = new int[digits.length + 1];
            result[0] = 1;
            System.arraycopy(digits, 0, result, 1, digits.length);
            return result;
        }
        return digits;
    }
}
```
