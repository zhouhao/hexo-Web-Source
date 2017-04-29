title: 'LeetCode: Additive Number'
date: 2016-06-25 20:03:22
---

Additive number is a string whose digits can form additive sequence.

A valid additive sequence should contain **at least** three numbers. Except for the first two numbers, each subsequent number in the sequence must be the sum of the preceding two.

For example:
`"112358"` is an additive number because the digits can form an additive sequence: `1, 1, 2, 3, 5, 8`.
```
1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8
```

`"199100199"` is also an additive number, the additive sequence is: `1, 99, 100, 199`.
```
1 + 99 = 100, 99 + 100 = 199
```
**Note**: Numbers in the additive sequence cannot have leading zeros, so sequence `1, 2, 03` or `1, 02, 3` is invalid.

Given a string containing only digits `'0'-'9'`, write a function to determine if it's an additive number.

**Follow up**:
How would you handle overflow for very large input integers?

```java
public class Solution {
    public boolean isAdditiveNumber(String num) {
        if (num == null || num.length() < 3) {
            return false;
        }

        for (int i = 1; i < num.length(); i++) {
            for (int j = i + 1; j < num.length(); j++) {
                String s1 = num.substring(0, i);
                String s2 = num.substring(i, j);
                if (s2.isEmpty() || (s2.length() > 1 && s2.charAt(0) == '0') || (s1.length() > 1 && s1.charAt(0) == '0')) {
                    continue;
                }

                long x = Long.valueOf(s1);
                long y = Long.valueOf(s2);

                long z = x + y;
                String pre = s1 + s2 + z;
                if (!num.startsWith(pre)) {
                    continue;
                }

                while (pre.length() < num.length()) {
                    x = y;
                    y = z;
                    z = x + y;
                    pre += z;
                }

                if (pre.equals(num)) {
                    return true;
                }
            }

        }
        return false;
    }
}
```