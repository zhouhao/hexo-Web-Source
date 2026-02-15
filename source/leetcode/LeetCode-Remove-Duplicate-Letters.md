title: 'LeetCode: Remove Duplicate Letters'
date: 2016-06-25 20:03:22
---

Given a string which contains only lowercase letters, remove duplicate letters so that every letter appear once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.

### Example:
Given `"bcabc"`
Return `"abc"`

Given `"cbacdcbc"`
Return `"acdb"`

```java
public class Solution {
    public String removeDuplicateLetters(String s) {
        if (s == null || s.length() < 2) {
            return s;
        }

        char[] chars = s.toCharArray();
        Map<Character, Integer> dict = new HashMap<>();
        for (char c : chars) {
            dict.put(c, dict.containsKey(c) ? dict.get(c) + 1 : 1);
        }
        Stack<Character> stack = new Stack<>();

        for (char c : chars) {
            dict.put(c, dict.get(c) - 1);
            if (stack.contains(c)) {
                continue;
            }

            while (!stack.isEmpty() && stack.peek() > c && dict.get(stack.peek()) > 0) {
                stack.pop();
            }

            stack.push(c);
        }

        StringBuilder sb = new StringBuilder();
        stack.forEach(sb::append);
        return sb.toString();
    }
}
```