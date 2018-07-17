title: 'Decode String'
date: 2018-07-16 20:03:22
---

### [394\. Decode String](https://leetcode.com/problems/decode-string/description/)

Difficulty: **Medium**



Given an encoded string, return it's decoded string.

The encoding rule is: `k[encoded_string]`, where the _encoded_string_ inside the square brackets is being repeated exactly _k_ times. Note that _k_ is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, _k_. For example, there won't be input like `3a` or `2[4]`.

**Examples:**

```
s = "3[a]2[bc]", return "aaabcbc".
s = "3[a2[c]]", return "accaccacc".
s = "2[abc]3[cd]ef", return "abcabccdcdcdef".
```


#### Solution

这一题肯定用递归来解，问题就在于子问题的划分。
每次递归的时候只需要算在当前逻辑中处理最外层的左右括号对就行。
```
输入： 3[a2[c]]2[abc]3[cd]ef
第一次递归就是分成4个子问题：     再划分             再划分
      3[a2[c]]                a 和 2[c]          c
      2[abc]                  abc               结束
      3[cd]                   cd                结束
      ef                      结束
```

Language: **Java**

```java
class Solution {
    public String decodeString(String s) {
         int factor = 0;
        Stack<Integer> stack = new Stack<>();
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (c != '[' && c != ']' && !stack.isEmpty()) {
                continue;
            }
​
            if (Character.isAlphabetic(c)) {
                sb.append(c);
                continue;
            }
​
            if (c >= '0' && c <= '9') {
                factor = factor * 10 + (c - '0');
                continue;
            }
​
            if (c == '[') {
                stack.push(i);
            } else if (c == ']') {
                if (stack.size() == 1) {
                    sb.append(repeat(decodeString(s.substring(stack.peek() + 1, i)), factor));
                    factor = 0;
                }
                stack.pop();
            }
        }
        return sb.toString();
    }
​
    private String repeat(String s, int times) {
        if (times <= 0) {
            return "";
        }
        StringBuilder sb = new StringBuilder();
        while (times > 0) {
            sb.append(s);
            times--;
        }
        return sb.toString();
    }
}
```