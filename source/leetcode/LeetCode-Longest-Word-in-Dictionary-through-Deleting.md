title: 'LeetCode: Longest Word in Dictionary through Deleting'
date: 2017-08-30 20:03:22
---

Given a string and a string dictionary, find the longest string in the dictionary that can be formed by deleting some characters of the given string. If there are more than one possible results, return the longest word with the smallest lexicographical order. If there is no possible result, return the empty string.

### Example 1:
```
Input:
s = "abpcplea", d = ["ale","apple","monkey","plea"]

Output:
"apple"
```
### Example 2:
```
Input:
s = "abpcplea", d = ["a","b","c"]

Output:
"a"
```
#### Note:
1. All the strings in the input will only contain lower-case letters.
2. The size of the dictionary won't exceed 1,000.
3. The length of all the strings in the input won't exceed 1,000.

```java
class Solution {
    public String findLongestWord(String s, List<String> d) {
        d.sort((o1, o2) -> {
            if (o1.length() == o2.length()) {
                return o1.compareTo(o2);
            } else {
                return o2.length() - o1.length();
            }
        });

        for (String str : d) {
            int count = 0;
            for (int i = 0; i < s.length(); i++) {
                if (str.charAt(count) == s.charAt(i)) {
                    count++;
                }

                if (count == str.length()) return str;
            }
        }
        return "";
    }
}
```
