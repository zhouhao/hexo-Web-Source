title: 'LeetCode: Count and Say'
date: 2015-06-24 00:03:22
---

```java
public class CountAndSay {
    public String countAndSay(int n) {
        if (n <= 0) {
            return null;
        }
        return helper(n);
    }
    private String helper(int n) {
        if (n == 1) {
            return "1";
        } else {
            String s = helper(n - 1);
            StringBuilder sb = new StringBuilder();
            char[] chars = s.toCharArray();
            char crt = chars[0];
            int count = 1;
            for (int i = 1; i < chars.length; i++) {
                char c = chars[i];
                if (crt == c) {
                    count++;
                } else {
                    sb.append(count).append(crt);
                    count = 1;
                    crt = c;
                }
            }
            if (count != 0) {
                sb.append(count).append(crt);
            }
            return sb.toString();
        }
    }
}
```
