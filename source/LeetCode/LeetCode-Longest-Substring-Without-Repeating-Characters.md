title: 'LeetCode: Longest Substring Without Repeating Characters'
date: 2015-06-24 00:03:22
---

Given a string, find the length of the longest substring without repeating characters.

### Examples:

Given `"abcabcbb"`, the answer is `"abc"`, which the length is 3.

Given `"bbbbb"`, the answer is `"b"`, with the length of 1.

Given `"pwwkew"`, the answer is `"wke"`, with the length of 3. Note that the answer must be a **substring**, `"pwke"` is a subsequence and not a substring.

```java
public class LongestSubstringWithoutRepeatingCharacters {
    public int lengthOfLongestSubstring(String s) {
        if (s == null || s.isEmpty()) return 0;
        Map<Character, Integer> map = new HashMap<>();
        int result = 1;
        int pre = -1;
        map.put(s.charAt(0), 0);
        for (int i = 1; i < s.length(); i++) {
            char c = s.charAt(i);
            int lastIndex = map.getOrDefault(c, -1);
            if (lastIndex > pre) {
                pre = lastIndex;
            }
            map.put(c, i);
            result = Math.max(result, i - pre);
        }
        return result;
    }
}
```
