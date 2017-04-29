title: 'LeetCode: Palindrome Permutation'
date: 2016-06-25 20:03:22
---

Given a string, determine if a permutation of the string could form a palindrome.

For example,
`"code" -> False, "aab" -> True, "carerac" -> True`.

```java
public class Solution {
    public boolean canPermutePalindrome(String s) {
        if (s == null && s.length() < 2) {
            return true;
        }

        Map<Character, Integer> map = new HashMap<>();
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            int val = 1;
            if (map.containsKey(c)) {
                val += map.get(c);
            }
            map.put(c, val);
        }

        int count = 0;
        for (Map.Entry<Character, Integer> entry : map.entrySet()) {
            if (entry.getValue() % 2 != 0) {
                count++;
            }
        }

        return count < 2;
    }
}
```
