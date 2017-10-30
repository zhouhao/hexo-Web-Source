title: 'LeetCode: Wildcard Matching'
date: 2015-06-24 00:03:22
---
 `'?'` Matches any single character.
`'*'` Matches any sequence of characters (including the empty sequence).

The matching should cover the entire input string (not partial).

The function prototype should be:
`bool isMatch(const char *s, const char *p)`

### Some examples:
```java
isMatch("aa","a") -> false
isMatch("aa","aa") -> true
isMatch("aaa","aa") -> false
isMatch("aa", "*") -> true
isMatch("aa", "a*") -> true
isMatch("ab", "?*") -> true
isMatch("aab", "c*a*b") -> false
```

```java
public class WildcardMatching {
    public boolean isMatch(String s, String p) {
        int sCrt = 0, pCrt = 0, sStar = -1, pStar = -1;
        while (sCrt < s.length()) {
            if (pCrt < p.length() && (s.charAt(sCrt) == p.charAt(pCrt) || p.charAt(pCrt) == '?')) {
                sCrt++;
                pCrt++;
            } else if (pCrt < p.length() && p.charAt(pCrt) == '*') {
                pStar = pCrt;
                pCrt++;
                sStar = sCrt;
            } else if (pStar > -1) {
                pCrt = pStar + 1;
                sStar++;
                sCrt = sStar;
            } else {
                return false;
            }
        }
        while (pCrt < p.length() && p.charAt(pCrt) == '*') {
            pCrt++;
        }
        return pCrt == p.length();
    }
}
```
