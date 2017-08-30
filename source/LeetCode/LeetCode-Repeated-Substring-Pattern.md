title: 'LeetCode: Repeated Substring Pattern'
date: 2017-08-30 20:03:22
---

Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.

### Example 1:
```
Input: "abab"

Output: True

Explanation: It's the substring "ab" twice.
```


### Example 2:
```
Input: "aba"

Output: False
```
### Example 3:
```
Input: "abcabcabcabc"

Output: True

Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)
```


```java
public class Solution {
    public boolean repeatedSubstringPattern(String s) {
        if (s == null || s.length() < 2) {
            return false;
        }
        StringBuilder sb = new StringBuilder(s);
        for (int i = 0; i < s.length() / 2; i++) {
            char c = sb.charAt(0);
            sb.deleteCharAt(0).append(c);
            if (sb.toString().equals(s)) return true;
        }
        return false;
    }
}
```
