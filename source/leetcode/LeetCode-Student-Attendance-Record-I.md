title: 'LeetCode: Student Attendance Record I'
date: 2017-08-30 20:03:22
---

You are given a string representing an attendance record for a student. The record only contains the following three characters:

1. 'A' : Absent.
2. 'L' : Late.
3. 'P' : Present.

A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).

You need to return whether the student could be rewarded according to his attendance record.

### Example 1:
```
Input: "PPALLP"
Output: True
```
### Example 2:
```
Input: "PPALLL"
Output: False
```

```java
public class Solution {
    public boolean checkRecord(String s) {
        char[] chars = s.toCharArray();

        int a = 0;
        for (Character c : chars) {
            if (c == 'A') {
                a++;
                if (a > 1) {
                    return false;
                }
            }
        }

        if (chars.length < 3) return true;

        for (int i = 1; i < chars.length - 1; i++) {
            if (chars[i - 1] == 'L' && chars[i] == 'L' && chars[i + 1] == 'L') {
                return false;
            }
        }
        return true;
    }
}
```
