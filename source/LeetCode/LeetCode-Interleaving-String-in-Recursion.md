title: "LeetCode: Interleaving String in Recursion"
date: 2014-08-27 19:58:42
---

```
Given s1, s2, s3, find whether s3 is formed by the interleaving of s1 and s2.

For example,
Given:
s1 = "aabcc",
s2 = "dbbca",

When s3 = "aadbbcbcac", return true.
When s3 = "aadbbbaccc", return false.
```
<!-- more -->

I write this answer in Recursion way, which I think is very easy to understand, but timeout in LeetCode.

```
/**
 * Created by hzhou on 2014/8/27.
 */
public class IsInterleave {
    public static boolean isInterleave(String s1, String s2, String s3) {
        // Termination case
        if(s1 == null || s1.length() == 0) return s2.equals(s3);
        if(s2 == null || s2.length() == 0) return s1.equals(s3);

        // if the beginning char in s3 is different from s1 & s2
        if(s2.charAt(0) != s3.charAt(0) && s1.charAt(0) != s3.charAt(0)) {
            return false;
        } else {
            if(s2.charAt(0) != s3.charAt(0)) {
                return isInterleave(s1.substring(1), s2, s3.substring(1));
            } else if(s1.charAt(0) != s3.charAt(0)) {
                return isInterleave(s1, s2.substring(1), s3.substring(1));
            } else {
                return isInterleave(s1, s2.substring(1), s3.substring(1)) || isInterleave(s1.substring(1), s2, s3.substring(1));
            }
        }
    }

    public static void main(String[] args) {
        System.out.println(isInterleave("ab", "bb", "baab"));
    }
}
```

### I will use Dynamic Programming(DP) to rewrite this!

```
public class Solution {
    public boolean isInterleave(String s1, String s2, String s3) {
        // check special case
        if(s1.length() + s2.length() != s3.length()) return false;

        int l1 = s1.length();
        int l2 = s2.length();
        int l3 = s3.length();
        // an array for DP
        boolean[][] map = new boolean[l2+1][l1+1];
        map[0][0] = true;

        // init first line
        for(int i = 0; i < l1; i++) {
            if(s1.charAt(i) == s3.charAt(i)){
                map[0][i+1] = true;
            } else {
                // just break
                break;
            }
        }

        // init first row
        for(int i = 0; i < l2; i++) {
            if(s2.charAt(i) == s3.charAt(i)){
                map[i+1][0] = true;
            } else {
                break;
            }
        }
        // start DP
        for(int i = 1; i <= l2; i++) {
            for(int j = 1; j <= l1; j++) {
                // take care of this long statement
                map[i][j] = (map[i][j-1] && (s1.charAt(j-1) == s3.charAt(j+i-1)))
                         || (map[i-1][j] && (s2.charAt(i-1) == s3.charAt(j+i-1)));
            }
        }

        return map[l2][l1];

    }
}
```
