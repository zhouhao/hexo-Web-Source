title: 'LeetCode: Longest Substring with At Most K Distinct Characters'
date: 2016-06-25 20:03:22
---

Given a string, find the length of the longest substring T that contains at most k distinct characters.

For example, Given s = “eceba” and k = 2,

T is "ece" which its length is 3.

```java
public class Solution {
    public int lengthOfLongestSubstringKDistinct(String s, int k) {
        if (s == null || s.isEmpty() || k == 0 ) {
            return 0;
        }

        Map<Character, Integer> dict = new HashMap<>();
        int pre = 0;
        int crt = 1;

        int result = 1;
        dict.put(s.charAt(0), 1);
        while (crt < s.length()) {
           Character c = s.charAt(crt);
            crt++;

            dict.put(c, dict.containsKey(c) ? dict.get(c) + 1 : 1);

            Character start = s.charAt(pre);
            while (dict.size() > k) {
                int count = dict.get(start);
                if (count == 1) {
                    dict.remove(start);
                } else {
                    dict.put(start, count - 1);
                }
                pre++;
                start = s.charAt(pre);
            }

            result = Math.max(result, crt - pre);
        }

        return result;
    }
}
```