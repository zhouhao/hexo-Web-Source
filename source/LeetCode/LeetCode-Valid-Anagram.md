title: 'LeetCode: Valid Anagram'
date: 2015-08-09 15:16:43
---
Given two strings s and t, write a function to determine if t is an anagram of s.

### For example,
`s = "anagram"`, `t = "nagaram"`, return `true`.   
`s = "rat"`, `t = "car"`, return `false`.

### Note:
You may assume the string contains only lowercase alphabets.

```java
public class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) {
            return false;
        }

        Map<Character, Integer> map = new HashMap<>();

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            int count = 1;
            if (map.containsKey(c)) {
                count += map.get(c);
            }
            map.put(c, count);
        }

        for (int i = 0; i < t.length(); i++) {
            char c = t.charAt(i);

            if (!map.containsKey(c)) {
                return false;
            }
            int count = map.get(c) - 1;
            if (count == 0) {
                map.remove(c);
            } else {
                map.put(c, count);
            }
        }
        return map.isEmpty();
    }
}
```