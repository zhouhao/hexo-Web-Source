title: 'LeetCode: Longest Substring with At Least K Repeating Characters'
date: 2017-09-04 20:03:22
---

Find the length of the longest substring T of a given string (consists of lowercase letters only) such that every character in T appears no less than k times.

### Example 1:
```
Input:
s = "aaabb", k = 3

Output:
3

The longest substring is "aaa", as 'a' is repeated 3 times.
```
#### Example 2:
```
Input:
s = "ababbc", k = 2

Output:
5

The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.
```

### Solution
Split the input string with the characters whose count is smaller than k,
then try to find the results in each chunk

 ```java
class Solution {
    public int longestSubstring(String s, int k) {
       if (s == null || s.isEmpty() || k > s.length()) return 0;

        Map<Character, Integer> dict = new HashMap<>();

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            dict.put(c, dict.getOrDefault(c, 0) + 1);
        }

        Set<Character> set = new HashSet<>();
        for (Map.Entry<Character, Integer> entry : dict.entrySet()) {
            if (entry.getValue() < k) {
                set.add(entry.getKey());
            }
        }

        if (set.isEmpty()) return s.length();

        int result = 0;
        int pre = 0;
        for (int i = 0; i < s.length() ; i++) {
            char c = s.charAt(i);
            if (set.contains(c)) {
                result = Math.max(result, longestSubstring(s.substring(pre, i), k));
                pre = i + 1;
            }

        }
        result = Math.max(result, longestSubstring(s.substring(pre, s.length()), k));
        return result;
    }
}
```
