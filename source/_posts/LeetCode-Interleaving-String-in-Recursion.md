title: "LeetCode: Interleaving String in Recursion"
date: 2014-08-27 19:58:42
tags:
 - LeetCode
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