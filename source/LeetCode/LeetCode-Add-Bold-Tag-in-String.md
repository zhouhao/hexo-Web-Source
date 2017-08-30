title: 'LeetCode: Add Bold Tag in String'
date: 2017-08-30 20:03:22
---

Given a string s and a list of strings dict, you need to add a closed pair of bold tag `<b>` and `</b>` to wrap the substrings in s that exist in dict. If two such substrings overlap, you need to wrap them together by only one pair of closed bold tag. Also, if two substrings wrapped by bold tags are consecutive, you need to combine them.

### Example 1:
```
Input:
s = "abcxyz123"
dict = ["abc","123"]
Output:
"<b>abc</b>xyz<b>123</b>"
```

### Example 2:
```
Input:
s = "aaabbcc"
dict = ["aaa","aab","bc"]
Output:
"<b>aaabbc</b>c"
```
##### Note:
1. The given dict won't contain duplicates, and its length won't exceed 100.
2. All the strings in input have length in range [1, 1000].

```java
class Solution {
    public String addBoldTag(String s, String[] dict) {
        boolean[] bools = new boolean[s.length()];
        int end = 0;

        for (int i = 0; i < s.length(); i++) {
            for (String d : dict) {
                int l = d.length();
                if (i + l <= s.length() && s.substring(i, i + l).equals(d)) {
                    end = Math.max(end, i + l);
                }
            }

            bools[i] = end > i;
        }

        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < bools.length; i++) {
            if (!bools[i]) {
                sb.append(s.charAt(i));
                continue;
            }

            int j = i;
            while (j < s.length() && bools[j]) {
                j++;
            }
            sb.append("<b>").append(s.substring(i, j)).append("</b>");
            i = j - 1;
        }
        return sb.toString();
    }
}
```
