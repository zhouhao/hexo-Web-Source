title: 'LeetCode: Palindrome Partitioning'
date: 2015-06-24 00:03:22
tags:
 - LeetCode
---
<hr/>    

```java

/**
 * Created by hzhou on 2015/5/13.
 * <p/>
 * Given a string s, partition s such that every substring of the partition is a palindrome.
 * <p/>
 * Return all possible palindrome partitioning of s.
 * <p/>
 * For example, given s = "aab",
 * Return
 * <p/>
 * <p/>
 * [
 * ["aa","b"],
 * ["a","a","b"]
 * ]
 */
public class PalindromePartitioning {
    public List<List<String>> partition(String s) {
        List<List<String>> result = new ArrayList<List<String>>();
        if (s == null || s.isEmpty()) {
            return result;
        }
        helper(s, new ArrayList<String>(), result, 0);
        return result;
    }
    private void helper(String s, List<String> crt, List<List<String>> result, int start) {
        if (start >= s.length()) {
            result.add(new ArrayList<String>(crt));
        }
        for (int i = start + 1; i <= s.length(); i++) {
            String sub = s.substring(start, i);
            if (isPalindrome(sub)) {
                List<String> tmp = new ArrayList<String>(crt);
                tmp.add(sub);
                helper(s, tmp, result, i);
            }
        }
    }
    private boolean isPalindrome(String s) {
        if (s == null || s.length() <= 1) {
            return true;
        }
        for (int i = 0; i < s.length() / 2; i++) {
            if (s.charAt(i) != s.charAt(s.length() - 1 - i)) {
                return false;
            }
        }
        return true;
    }
    @Test
    public void test() {
        List<List<String>> result = partition("aab");
    }
}
```
