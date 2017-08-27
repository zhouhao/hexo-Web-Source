title: 'LeetCode: First Unique Character in a String'
date: 2017-08-27 20:03:22
---

Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

### Examples:
```
s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
```
**Note**: You may assume the string contain only lowercase letters.


```java
public class Solution {
    public int firstUniqChar(String s) {
        Set<Character> set = new HashSet<>();
        for(int i = 0; i < s.length(); i++){
            char c = s.charAt(i);
            if (i != s.lastIndexOf(c)){
                set.add(c);
            }
            if(i == s.lastIndexOf(c) && !set.contains(c)){
                return i;
            }
        }
        return -1;
    }
}
```