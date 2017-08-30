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

        Map<Character, Integer> dict = new HashMap<>();
        for (int i = 0; i < p.length(); i++) {
            char c = p.charAt(i);
            dict.put(c, dict.getOrDefault(c, 0) + 1);
        }
        int count = p.length();
        int l = 0;

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (dict.getOrDefault(c, 0) > 0) {
                count--;
            }
            dict.put(c, dict.getOrDefault(c, 0) - 1);
            if (count == 0) {
                result.add(l);
            }

            if (i - l +1== p.length()) {
                char lc = s.charAt(l);
                if (dict.getOrDefault(lc, 0) >= 0) {
                    count++;
                }
                dict.put(lc, dict.getOrDefault(lc, 0) + 1);
                l++;
            }
        }
        return result;
    }
}
```
