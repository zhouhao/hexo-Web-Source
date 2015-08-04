title: 'LeetCode: Minimum Window Substring'
date: 2015-06-24 00:03:22
---

```java

/**
 * Description: For example,
 * <p/>
 * S = "ADOBECODEBANC"
 * <p/>
 * T = "ABC"
 * <p/>
 * Minimum window is "BANC".
 *
 * @author hzhou
 */
public class MinimumWindowSubstring {
    public String minWindow(String s, String t) {
        if (t == null || t.isEmpty()) {
            return "";
        }
        if (s == null || s.isEmpty()) {
            return null;
        }
        Map<Character, Integer> tMap = new HashMap<Character, Integer>();
        for (int i = 0; i < t.length(); i++) {
            char c = t.charAt(i);
            if (tMap.containsKey(c)) {
                tMap.put(c, tMap.get(c) + 1);
            } else {
                tMap.put(c, 1);
            }
        }
        Map<Character, Integer> countMap = new HashMap<Character, Integer>();
        int matchCount = 0;
        int start = 0;
        String min = "";
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (tMap.containsKey(c)) {
                if (countMap.containsKey(c)) {
                    if (countMap.get(c) < tMap.get(c)) {
                        matchCount++;
                    }
                    countMap.put(c, countMap.get(c) + 1);
                } else {
                    countMap.put(c, 1);
                    matchCount++;
                }
            }
            if (matchCount == t.length()) {
                char tmp = s.charAt(start);
                while (start < s.length() && (!countMap.containsKey(tmp) || countMap.get(tmp) > tMap.get(tmp))) {
                    if (countMap.containsKey(tmp)) {
                        countMap.put(tmp, countMap.get(tmp) - 1);
                    }
                    start++;
                    tmp = s.charAt(start);
                }
                if (min.isEmpty() || i + 1 - start < min.length()) {
                    min = s.substring(start, i + 1);
                }
            }
        }
        return min;
    }
    @Test
    public void test() {
        String s = "a";
        String t = "aa";
        String result = minWindow(s, t);
    }
}
```
