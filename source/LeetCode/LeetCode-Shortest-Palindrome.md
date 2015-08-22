title: 'LeetCode: Shortest Palindrome'
date: 2015-06-23 21:37:43
---
Given a string S, you are allowed to convert it to a palindrome by adding characters in front of it. Find and return the shortest palindrome you can find by performing this transformation.

### For example:

Given "`aacecaaa`", return "`aaacecaaa`".

Given "`abcd`", return "`dcbabcd`".

```java
public class ShortestPalindrome {
    public String shortestPalindrome(String s) {
        if (s == null || s.length() < 2) {
            return s;
        }

        String r = new StringBuilder(s).reverse().toString();

        for (int i = 0; i < s.length(); i++) {
            if (s.startsWith(r.substring(i))) {
                return r.substring(0, i) + s;
            }
        }

        return s;
    }
}
```