title: 'LeetCode: Find All Anagrams in a String'
date: 2017-08-30 20:03:22
---

Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

The order of output does not matter.

### Example 1:
```
Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
```
### Example 2:
```
Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
```

```java
public class Solution {
    public List<Integer> findAnagrams(String s, String p) {
        List<Integer> result = new ArrayList<>();
        if (s == null || p.isEmpty() || s.length() < p.length()) return result;

        Map<Character, Integer> ds = new HashMap<>();
        Map<Character, Integer> dp = new HashMap<>();

        for (int i = 0; i < p.length(); i++) {
            ds.put(s.charAt(i), ds.getOrDefault(s.charAt(i), 0) + 1);
            dp.put(p.charAt(i), dp.getOrDefault(p.charAt(i), 0) + 1);
        }
        if (isEqual(ds, dp)) {
            result.add(0);
        }

        for (int i = p.length(); i < s.length(); i++) {
            char c = s.charAt(i);
            ds.put(c, ds.getOrDefault(c, 0) + 1);
            ds.put(s.charAt(i - p.length()), ds.getOrDefault(s.charAt(i - p.length()), 0) - 1);
            if (isEqual(ds, dp)) {
                result.add(i - p.length() + 1);
            }
        }
        return result;
    }

    private boolean isEqual(Map<Character, Integer> map, Map<Character, Integer> src) {
        for (Map.Entry<Character, Integer> entry : src.entrySet()) {
            if (!map.getOrDefault(entry.getKey(), 0).equals(entry.getValue())) {
                return false;
            }
        }
        return true;
    }
}
```
