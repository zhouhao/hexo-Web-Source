title: 'LeetCode: Implement strStr()'
date: 2015-06-25 20:03:22
---
 Implement `strStr()`.   

Returns the index of the first occurrence of `needle` in `haystack`, or -1 if `needle` is not part of `haystack`.

```java
/**
 * Created by hzhou on 5/1/15. codeashobby@gmail.com
 */
public class StrStr {
    public int strStr(String haystack, String needle) {
        if (needle == null || needle.length() == 0) {
            return 0;
        }
        if (haystack == null || haystack.length() == 0) {
            return -1;
        }
        for (int i = 0; i < haystack.length(); i++) {
            char c = haystack.charAt(i);
            if (haystack.length() - i + 1 < needle.length()) {
                return -1;
            }
            if (c == needle.charAt(0)) {
                int j = 0;
                int k = i;
                for (; j < needle.length() && k < haystack.length(); j++, k++) {
                    if (needle.charAt(j) != haystack.charAt(k)) {
                        break;
                    }
                }
                if (j == needle.length()) {
                    return (k - j);
                }
            }
        }
        return -1;
    }
}
```
