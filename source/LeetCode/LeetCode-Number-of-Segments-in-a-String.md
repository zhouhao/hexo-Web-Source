title: 'LeetCode: Number of Segments in a String'
date: 2017-08-30 20:03:22
---

Count the number of segments in a string, where a segment is defined to be a contiguous sequence of non-space characters.

Please note that the string does not contain any non-printable characters.

### Example:
```
Input: "Hello, my name is John"
Output: 5
```

```java
public class Solution {
    public int countSegments(String s) {
        if(s == null || s.trim().isEmpty()){
            return 0;
        }
        return s.trim().split("( )+").length;
    }
}
```
