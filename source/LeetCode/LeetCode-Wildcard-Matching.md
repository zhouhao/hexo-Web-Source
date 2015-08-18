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
        if (p == null || p.isEmpty()) {
            return s == null || s.isEmpty();
        }
        if (s == null || s.isEmpty()) {
            int star = trimStartStar(p, 0);
            return star == p.length();
        }
        int startS = 0;
        int startP = 0;
        int preS, preP;
        preS = preP = 0;
        boolean hasStart = false;
        while (startS < s.length()) {
            if (startP == p.length()) {
                if (hasStart) {
                    startP = preP;
                    ++preS;
                    startS = preS;
                } else {
                    return false;
                }
            }
            char cs = s.charAt(startS);
            char cp = p.charAt(startP);
            if (cs != cp) {
                if (cp == '?') {
                    startP++;
                    startS++;
                } else if (cp == '*') {
                    hasStart = true;
                    startP = trimStartStar(p, startP);
                    if (startP == p.length()) {
                        return true;
                    }
                    preS = startS;
                    preP = startP;
                } else if (hasStart) {
                    preS++;
                    startS = preS;
                    startP = preP;
                } else {
                    return false;
                }
            } else {
                startP++;
                startS++;
            }
        }
        return startS == s.length() && trimStartStar(p, startP) == p.length();
    }
    private int trimStartStar(String s, int start) {
        while (start < s.length() && s.charAt(start) == '*') {
            start++;
        }
        return start;
    }
}
```
