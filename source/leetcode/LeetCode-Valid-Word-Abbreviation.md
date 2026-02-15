title: 'LeetCode: Valid Word Abbreviation'
date: 2017-08-30 20:03:22
---

Given a non-empty string s and an abbreviation abbr, return whether the string matches with the given abbreviation.

A string such as "word" contains only the following valid abbreviations:
```
["word", "1ord", "w1rd", "wo1d", "wor1", "2rd", "w2d", "wo2", "1o1d", "1or1", "w1r1", "1o2", "2r1", "3d", "w3", "4"]
```
Notice that only the above abbreviations are valid abbreviations of the string "word". Any other string is not a valid abbreviation of "word".

#### Note:
Assume s contains only lowercase letters and abbr contains only lowercase letters and digits.

### Example 1:
```
Given s = "internationalization", abbr = "i12iz4n":

Return true.
```
### Example 2:
```
Given s = "apple", abbr = "a2e":

Return false.
```

```java
public class Solution {
    public boolean validWordAbbreviation(String word, String abbr) {
        Map<Integer, Character> map = new HashMap<>();
        int length = parse(abbr, map);
        if (word.length() != length) {
            return false;
        }

        for (Map.Entry<Integer, Character> entry : map.entrySet()) {
            if (!Objects.equals(word.charAt(entry.getKey()), entry.getValue())) {
                return false;
            }
        }
        return true;
    }

    private int parse(String abbr, Map<Integer, Character> map) {
        int length = 0;
        int x = 0;
        for (int i = 0; i < abbr.length(); i++) {
            char c = abbr.charAt(i);
            if (c >= 'a' && c <= 'z') {
                length += x + 1;
                map.put(length-1, c);
                x = 0;
            } else {
                if(x == 0 && c == '0') return -1;
                x = 10 * x + c - '0';
            }
        }
        if (x > 0) {
            length += x;
        }
        return length;
    }
}
```
