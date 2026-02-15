title: 'LeetCode: Is Subsequence'
date: 2017-08-30 20:03:22
---

Given a string s and a string t, check if s is subsequence of t.

You may assume that there is only lower case English letters in both s and t. t is potentially a very long (length ~= 500,000) string, and s is a short string (<=100).

A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ace" is a subsequence of "abcde" while "aec" is not).

### Example 1:
s = "abc", t = "ahbgdc"

Return true.

### Example 2:
s = "axc", t = "ahbgdc"

Return false.


```java
public class Solution {
    public boolean isSubsequence(String s, String t) {
        int i, j;
        i = j = 0;
        while (i < t.length() && j < s.length()) {
            if (s.charAt(j) == t.charAt(i)) {
                j++;
            }
            i++;
        }
        return j == s.length();
    }
}
```
