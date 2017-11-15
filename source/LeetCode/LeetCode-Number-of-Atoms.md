title: 'LeetCode: Number of Atoms'
date: 2017-06-25 20:03:22
---
Given a chemical `formula` (given as a string), return the count of each atom.

An atomic element always starts with an uppercase character, then zero or more lowercase letters, representing the name.

1 or more digits representing the count of that element may follow if the count is greater than 1. If the count is 1, no digits will follow. For example, H2O and H2O2 are possible, but H1O2 is impossible.

Two formulas concatenated together produce another formula. For example, H2O2He3Mg4 is also a formula.

A formula placed in parentheses, and a count (optionally added) is also a formula. For example, (H2O2) and (H2O2)3 are formulas.

Given a formula, output the count of all elements as a string in the following form: the first name (in sorted order), followed by its count (if that count is more than 1), followed by the second name (in sorted order), followed by its count (if that count is more than 1), and so on.

### Example 1:
```
Input:
formula = "H2O"
Output: "H2O"
Explanation:
The count of elements are {'H': 2, 'O': 1}.
```

### Example 2:
```
Input:
formula = "Mg(OH)2"
Output: "H2MgO2"
Explanation:
The count of elements are {'H': 2, 'Mg': 1, 'O': 2}.
```

### Example 3:
```
Input:
formula = "K4(ON(SO3)2)2"
Output: "K4N2O14S4"
Explanation:
The count of elements are {'K': 4, 'N': 2, 'O': 14, 'S': 4}.
```

### Note:
1. All atom names consist of lowercase letters, except for the first character which is uppercase.
2. The length of `formula` will be in the range `[1, 1000]`.
3. `formula` will only consist of letters, digits, and round parentheses, and is a valid formula as defined in the problem.

![示意图](https://cl.ly/0e1O0a0i1E0v/download/leetcode726.png)
如图所示，我们可以先找出最右最里的括号，先把它normalize，然后再合并成新的字符串，接着再重复上述的步骤。

```
1. 初始状态：((N42)24(XB40)33(H5)16)14
2. 寻找最右侧的左括号，然后找对距离它最近的右括号(这样他们就是对应的一左一右) `(H5)` -(normalize)-> ((N42)24(XB40)33H80)14
3. 重复2的步骤：((N42)24B1320X33H80)14 -> (N1008B1320X33H80)14 -> B18480H1120N14112X462
```

```java
class Solution {
    public String countOfAtoms(String formula) {
        if (formula == null || formula.isEmpty()) return "";
        return helper(formula, 1);
    }

    private String helper(String s, int factor) {
        if (s == null || s.isEmpty()) return "";
        if (s.contains("(")) {
            int a = s.lastIndexOf("("); // find the
            int b = s.indexOf(")", a);
            int i = b + 1;
            int f = 0;
            for (; i < s.length(); i++) {
                char c = s.charAt(i);
                if (c < '0' || c > '9') break;
                f = 10 * f + (c - '0');
            }
            f = Math.max(f, 1);
            return helper(s.substring(0, a) + helper(s.substring(a + 1, b), factor * f) + s.substring(i), factor);

        } else {
            // H2O4
            Map<String, Integer> map = new TreeMap<>();
            String str = s.substring(0, 1);
            int f = 0;
            for (int i = 1; i < s.length(); i++) {
                char c = s.charAt(i);
                if (c >= 'a' && c <= 'z') {
                    str += c;
                } else if (c >= '0' && c <= '9') {
                    f = 10 * f + (c - '0');
                } else {
                    f = Math.max(f, 1);
                    int n = map.getOrDefault(str, 0);
                    map.put(str, n + f * factor);
                    f = 0;
                    str = "" + c;
                }
            }
            if (!str.isEmpty()) {
                f = Math.max(f, 1);
                int n = map.getOrDefault(str, 0);
                map.put(str, n + f * factor);
            }
            StringBuilder sb = new StringBuilder();
            for (Map.Entry<String, Integer> e : map.entrySet()) {
                sb.append(e.getKey());
                if (e.getValue() > 1) sb.append(e.getValue());
            }
            return sb.toString();
        }
    }
}
```
