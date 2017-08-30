title: 'LeetCode: Convert a Number to Hexadecimal'
date: 2017-08-30 20:03:22
---

Given an integer, write an algorithm to convert it to hexadecimal. For negative integer, two’s complement method is used.

#### Note:
1. All letters in hexadecimal (a-f) must be in lowercase.
2. The hexadecimal string must not contain extra leading 0s. If the number is zero, it is represented by a single zero character '0'; otherwise, the first character in the hexadecimal string will not be the zero character.
3. The given number is guaranteed to fit within the range of a 32-bit signed integer.
You must not use any method provided by the library which converts/formats the number to hex directly.
### Example 1:
```
Input:
26

Output:
"1a"
```
### Example 2:
```
Input:
-1

Output:
"ffffffff"
```

```java
public class Solution {
    public String toHex(int num) {
        String result = "";
        for (int i = 0; num != 0 && i < 8; i++) {
            int x = num & 0xf;
            if (x >= 10) {
                char a = (char) ('a' + x - 10);
                result = a + result;
            } else {
                result = x + result;
            }
            num = num >> 4;
        }
        return result.isEmpty() ? "0" : result;
    }
}
```
