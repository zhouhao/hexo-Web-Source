title: 'LeetCode: Unique Word Abbreviation'
date: 2016-06-25 20:03:22
---

An abbreviation of a word follows the form <first letter><number><last letter>. Below are some examples of word abbreviations:
```
a) it                      --> it    (no abbreviation)

     1
b) d|o|g                   --> d1g

              1    1  1
     1---5----0----5--8
c) i|nternationalizatio|n  --> i18n

              1
     1---5----0
d) l|ocalizatio|n          --> l10n
```
Assume you have a dictionary and given a word, find whether its abbreviation is unique in the dictionary. A word's abbreviation is unique if no other word from the dictionary has the same abbreviation.

### Example:
```
Given dictionary = [ "deer", "door", "cake", "card" ]

isUnique("dear") -> 
false

isUnique("cart") -> 
true

isUnique("cane") -> 
false

isUnique("make") -> 
true
```

```java
public class ValidWordAbbr {

    private Map<String, Integer> map = new HashMap<>();
    private Set<String> input;

    public ValidWordAbbr(String[] dictionary) {

        input = Arrays.stream(dictionary)
                .filter(d -> (d != null && !d.isEmpty()))
                .collect(Collectors.toSet());

        for (String s : input) {
            if (s == null) {
                continue;
            }
            int val = 1;
            String abbr = toAbbr(s);
            if (map.containsKey(abbr)) {
                val += map.get(abbr);
            }
            map.put(abbr, val);
        }

    }

    public boolean isUnique(String word) {
        if (word == null) {
            return false;
        }
        String abbr = toAbbr(word);
        return !map.containsKey(abbr) || (map.get(abbr) == 1 && input.contains(word));
    }

    private String toAbbr(String s) {
        if (s == null || s.length() < 3) {
            return s;
        } else {
            return "" + s.charAt(0) + (s.length() - 2) + s.charAt(s.length() - 1);
        }

    }
}


// Your ValidWordAbbr object will be instantiated and called as such:
// ValidWordAbbr vwa = new ValidWordAbbr(dictionary);
// vwa.isUnique("Word");
// vwa.isUnique("anotherWord");
```