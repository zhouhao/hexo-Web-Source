title: 'LeetCode: Roman to Integer'
date: 2015-06-25 20:03:22
---
 
```java

/**
 * Created by hzhou on 5/1/15. codeashobby@gmail.com
 */
public class Roman2Integer {
    public int romanToInt(String s) {
        if (s == null || s.isEmpty()) {
            return 0;
        }
        int result = 0;
        for (int i = 0; i < s.length(); i++) {
            if (i > 0 && c2i(s.charAt(i)) > c2i(s.charAt(i - 1))) {
                result += (c2i(s.charAt(i)) - 2 * c2i(s.charAt(i - 1)));
            } else {
                result += c2i(s.charAt(i));
            }
        }
        return result;
    }
    // can be replaced by a hashMap
    private int c2i(char c) {
        switch (c) {
            case 'I':
                return 1;
            case 'V':
                return 5;
            case 'X':
                return 10;
            case 'L':
                return 50;
            case 'C':
                return 100;
            case 'D':
                return 500;
            case 'M':
                return 1000;
            default:
                return 0;
        }
    }
}
```
