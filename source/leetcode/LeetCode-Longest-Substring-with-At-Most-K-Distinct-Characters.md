title: 'LeetCode: Longest Substring with At Most K Distinct Characters'
date: 2016-06-25 20:03:22
---

Given a string, find the length of the longest substring T that contains at most k distinct characters.

For example, Given s = `"eceba"` and k = 2,

T is "ece" which its length is 3.

```java
public class Solution {
    public int lengthOfLongestSubstringKDistinct(String s, int k) {
        if (s == null || s.isEmpty() || k < 1) return 0;
        if (s.length() <= k) return s.length();

        int result = k;
        int pre = 0;
        Map<Character, Integer> map = new HashMap<>();
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            map.put(c, map.getOrDefault(c, 0) + 1);

            while (map.size() > k) {
                char p = s.charAt(pre++);
                int count = map.get(p) - 1;
                if (count == 0) {
                    map.remove(p);
                } else {
                    map.put(p, count);
                }
            }
            result = Math.max(result, i - pre + 1);
        }
        return result;
    }
}
```