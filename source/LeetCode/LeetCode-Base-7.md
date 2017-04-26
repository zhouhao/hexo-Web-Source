title: 'LeetCode: Base 7'
date: 2015-06-25 20:03:22
---

Given an integer, return its base 7 string representation.

**Example 1:**
```
Input: 100
Output: "202"
```

**Example 2:**
```
Input: -7
Output: "-10"
```

*Note*: The input will be in range of [-1e7, 1e7].

其实理解了进制转换之后，这题确实不难。

 ```java
public class Base7 {

    public String convertToBase7(int num) {

        StringBuilder sb = new StringBuilder();
        boolean isNegative = false;
        if (num < 0) {
            isNegative = true;
            num = Math.abs(num);
        }

        int a = num;

        while (a >= 7) {
            int b = a % 7;
            a = a / 7;
            sb.insert(0, b);
        }
        sb.insert(0, a);
        if (isNegative) {
            sb.insert(0, "-");
        }
        return sb.toString();
    }
}

```
