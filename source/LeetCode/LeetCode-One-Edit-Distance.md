title: 'LeetCode: One Edit Distance'
date: 2015-06-24 00:03:22
---
 
```java

/**
 * Description
 *
 * @author hzhou
 */
public class OneEditDistance {
    public boolean isOneEditDistance(String s, String t) {
        if (s == t || s.equals(t)) {
            return true;
        }
        int ls = s.length();
        int lt = t.length();
        return Math.abs(ls - lt) <= 1 && (ls > lt ? helper(s, t) : helper(t, s));
    }
    private boolean helper(String l, String s) {
        boolean dup = false;
        int i = 0;
        int j = 0;
        char[] cl = l.toCharArray();
        char[] cs = s.toCharArray();
        for (; j < s.length(); i++, j++) {
            if (cs[j] != cl[i]) {
                if (dup) {
                    return false;
                }
                dup = true;
                if (s.length() < l.length()) {
                    i--;
                }
            }
        }
        return dup || l.length() > s.length();
    }
}
```
