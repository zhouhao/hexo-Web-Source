title: 'LeetCode: Reverse String'
date: 2016-06-25 20:03:22
---

```java
public class Solution {
    public String reverseString(String s) {
         if (s == null || s.length() < 2) {
            return s;
        }

        return new StringBuilder(s).reverse().toString();
    }
}
```