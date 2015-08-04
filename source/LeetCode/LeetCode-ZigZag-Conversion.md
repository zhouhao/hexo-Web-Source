title: 'LeetCode: ZigZag Conversion'
date: 2015-06-24 00:03:22
---

```java

/**
 * Description
 *
 * @author hzhou
 */
public class ZigZagConversion {
    public String convert(String s, int numRows) {
        if (numRows <= 0) {
            return null;
        }
        if (s == null || s.isEmpty() || s.length() <= numRows || numRows == 1) {
            return s;
        }
        int size = 2 * numRows - 2;
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < numRows; i++) {
            for (int j = i; j < s.length(); j += size) {
                sb.append(s.charAt(j));
                if (i != 0 && i != numRows - 1) {
                    int index = j + size - 2 * i;
                    if (index < s.length()) {
                        sb.append(s.charAt(index));
                    }
                }
            }
        }
        return sb.toString();
    }
}
```
