title: 'LeetCode: Longest Palindromic Substring'
date: 2015-06-24 00:03:22
---

```java

/**
 * Created by zhouhao on 5/20/2015.
 * <p>
 * Given a string S, find the longest palindromic substring in S. You may assume that the
 * maximum length of S is 1000, and there exists one unique longest palindromic substring.
 * <p>
 * Idea:
 * aba -> $a$b$a$
 */
public class LongestPalindromicSubstring {
    public String longestPalindrome(String s) {
        if (s == null || s.isEmpty()) {
            return s;
        }
        String result = s.substring(0, 1);
        int max = 1;
        for (int i = 0; i < s.length() * 2; i++) {
            int count = 1;
            while (i - count >= 0 && i + count < s.length() * 2 && getChar(i - count, s) == getChar(i + count, s)) {
                count++;
            }
            // important: remember to reduce count by 1
            count--;
            if (max < count) {
                max = count;
                result = s.substring((i - count) / 2, (i + count) / 2);
            }
        }
        return result;
    }
    private char getChar(int x, String s) {
        if (x % 2 != 0) {
            return s.charAt(x / 2);
        } else {
            return '$';
        }
    }
}
```
