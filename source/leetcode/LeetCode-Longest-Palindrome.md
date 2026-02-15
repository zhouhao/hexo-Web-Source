title: 'LeetCode: Longest Palindrome'
date: 2017-08-30 20:03:22
---

Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

This is case sensitive, for example "Aa" is not considered a palindrome here.

**Note:** Assume the length of given string will not exceed 1,010.

### Example:
```
Input:
"abccccdd"

Output:
7

Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.
```

```java
public class Solution {
    public int longestPalindrome(String s) {
        Map<Character, Integer> map = new HashMap<>();
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            map.put(c, map.getOrDefault(c, 0) + 1);
        }
        int result = map.values().stream()
                .filter(x -> x % 2 == 0)
                .mapToInt(Integer::intValue)
                .sum();
        result += map.values().stream()
                .filter(x -> x % 2 != 0)
                .map(x -> x -1)
                .mapToInt(Integer::intValue)
                .sum();
        result += map.values().stream()
                .filter(x -> x % 2 != 0)
                .count() > 0 ? 1 : 0;
        return result;
    }
}
```
