title: 'LeetCode: Word Pattern'
date: 2016-06-25 20:03:22
---

Given a `pattern` and a string `str`, find if `str` follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

### Examples:
1. pattern = `"abba"`, str = `"dog cat cat dog"` should return true.
2. pattern = `"abba"`, str = `"dog cat cat fish"` should return false.
3. pattern = `"aaaa"`, str = `"dog cat cat dog"` should return false.
4. pattern = `"abba"`, str = `"dog dog dog dog"` should return false.
### Notes:
You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.


```java
public class Solution {
    public boolean wordPattern(String pattern, String str) {
        if (pattern == null || str == null || pattern.isEmpty() || str.isEmpty()) {
            return false;
        }

        String[] array = str.split(" ");
        if (pattern.length() != array.length) {
            return false;
        }

        Map<Character, String> m1 = new HashMap<>();
        Map<String, Character> m2 = new HashMap<>();

        for (int i = 0; i < pattern.length(); i++) {
            char c = pattern.charAt(i);
            String s = array[i];
            if (!m1.containsKey(c) && !m2.containsKey(s)) {
                m1.put(c, s);
                m2.put(s, c);
            } else {
                 if(m1.get(c) == null||!m1.get(c).equals(s) || m2.get(s) == null ||m2.get(s) != c){
                     return false;
                 }
            }
        }
        return true;
    }
}
```

