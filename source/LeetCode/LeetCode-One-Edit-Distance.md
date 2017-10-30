title: 'LeetCode: One Edit Distance'
date: 2015-06-24 00:03:22
---
Given two strings S and T, determine if they are both one edit distance apart.
 
```java
public class OneEditDistance {
    public boolean isOneEditDistance(String s, String t) {
        if (Math.abs(s.length() - t.length()) > 1) return false;
        return s.length() > t.length() ? helper(s, t) : helper(t, s);
    }

    private boolean helper(String lng, String sot) {
        boolean alreadyOneDistance = false;
        int i = 0, j = 0;
        for (; i < lng.length() && j < sot.length(); i++, j++) {
            if (lng.charAt(i) != sot.charAt(j)) {
                if (alreadyOneDistance) return false;
                alreadyOneDistance = true;

                if (lng.length() > sot.length()) {
                    j--;
                }
            }
        }
        return alreadyOneDistance || lng.length() > sot.length();
    }
}
```
