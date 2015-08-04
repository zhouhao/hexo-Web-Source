title: 'LeetCode: Longest Substring with At Most Two Distinct Characters'
date: 2015-06-24 00:03:22
---

```java

/**
 * Created by hzhou on 2015/6/4.
 * Email: i@hzhou.me
 * <p>
 * Given a string, find the length of the longest substring T that contains at most 2 distinct characters.
 * <p>
 * For example, Given s = "eceba",
 * <p>
 * T is "ece" which its length is 3.
 */
public class LongestSubstringWithAtMostTwoDistinctCharacters {
    public int lengthOfLongestSubstringTwoDistinct(String s) {
        if (s == null || s.length() < 3) {
            return s == null ? 0 : s.length();
        }
        Map<Character, Integer> map = new HashMap<Character, Integer>();
        int start = 0;
        int max = 0;
        int i = 0;
        for (; i < s.length(); i++) {
            char c = s.charAt(i);
            if (map.size() == 2 && !map.containsKey(c)) {
                max = Math.max(max, i - start);
                int leftMost = s.length();
                for (Map.Entry<Character, Integer> entry : map.entrySet()) {
                    if (entry.getValue() < leftMost) {
                        leftMost = entry.getValue();
                    }
                }
                start = leftMost + 1;
                map.remove(s.charAt(leftMost));
            }
            map.put(c, i);
        }
        return Math.max(max, i - start);
    }
    @Test
    public void test() {
        String s ="aab";
        int i = lengthOfLongestSubstringTwoDistinct(s);
    }
}
```
