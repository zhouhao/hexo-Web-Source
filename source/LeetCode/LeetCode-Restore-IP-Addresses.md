title: 'LeetCode: Restore IP Addresses'
date: 2015-06-24 00:03:22
tags:
 - LeetCode
---
<hr/>    

```java

/**
 * Created by hzhou on 2015/5/26.
 * Email: codeashobby@gmail.com
 * <p>
 * Given a string containing only digits, restore it by returning all possible valid IP address combinations.
 * <p>
 * For example:
 * Given "25525511135",
 * <p>
 * return ["255.255.11.135", "255.255.111.35"]. (Order does not matter)
 */
public class RestoreIPAddresses {
    public List<String> restoreIpAddresses(String s) {
        List<String> result = new ArrayList<String>();
        if (s == null || s.length() < 4) {
            return result;
        }
        helper(0, 0, s, result, "");
        return result;
    }
    private void helper(int count, int start, String s, List<String> result, String crt) {
        if (count == 3) {
            String sub = s.substring(start, s.length());
            if (isValid(sub)) {
                result.add(crt + sub);
            }
            return;
        }
        for (int i = start + 1; i < s.length() && i < start + 4; i++) {
            String sub = s.substring(start, i);
            if (isValid(sub)) {
                helper(count + 1, i, s, result, crt + sub + ".");
            }
        }
    }
    private boolean isValid(String s) {
        if (s == null || s.isEmpty() || (s.startsWith("0") && s.length() > 1)) {
            return false;
        }
        int result = 0;
        for (char c : s.toCharArray()) {
            result = 10 * result + c - '0';
        }
        return result >= 0 && result < 256;
    }
    @Test
    public void test() {
        String s = "25525511135";
        List<String> result = restoreIpAddresses(s);
    }
}
```
