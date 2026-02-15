title: 'LeetCode: Reverse Integer'
date: 2015-06-24 00:03:22
---

Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string. If there are less than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.
### Example:
```
Input: s = "abcdefg", k = 2
Output: "bacdfeg"
```

### Restrictions:
1. The string consists of lower English letters only.
2. Length of the given string and k will in the range [1, 10000]

关键点在于把s按k得长度分成子串，然后把index位偶数的子串反转一下就行。

```java
public class ReverseStringII {

    public String reverseStr(String s, int k) {
        if (s == null || s.isEmpty() || k <= 0) {
            return s;
        }

        String[] arr = s.split("(?<=\\G.{" + k + "})");
        StringBuilder sb = new StringBuilder();

        for (int i = 0; i < arr.length; i++) {
            if (i % 2 == 1) {
                sb.append(arr[i]);
            } else {
                sb.append(new StringBuilder(arr[i]).reverse().toString());
            }
        }
        return sb.toString();
    }
 }
 ```
