title: 'LeetCode: Keyboard Row'
date: 2017-08-30 20:03:22
---

Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.

https://leetcode.com/problems/keyboard-row/description/

### Example 1:
```
Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]
```
#### Note:
1. You may use one character in the keyboard more than once.
2. You may assume the input string will only contain letters of alphabet.

```java
public class Solution {
    public String[] findWords(String[] words) {
        List<String> result = new ArrayList<>();
        Map<Character, Integer> map = buildMap();
        for (String s : words) {
            if (s == null || s.isEmpty()) continue;
            char[] chars = s.toLowerCase().toCharArray();
            int x = map.get(chars[0]);
            for (char c : chars) {
                if (map.get(c) != x) {
                    x = -1;
                    break;
                }
            }
            if (x != -1) {
                result.add(s);
            }
        }

        String[] arr = new String[result.size()];
        return result.toArray(arr);
    }

    private Map<Character, Integer> buildMap() {
        char[] l1 = new char[]{'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'};
        char[] l2 = new char[]{'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'};
        char[] l3 = new char[]{'z', 'x', 'c', 'v', 'b', 'n', 'm'};

        Map<Character, Integer> result = new HashMap<>();
        for (char c : l1) {
            result.put(c, 1);
        }
        for (char c : l2) {
            result.put(c, 2);
        }
        for (char c : l3) {
            result.put(c, 3);
        }
        return result;
    }
}
```
