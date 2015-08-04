title: 'LeetCode: Distinct Subsequences'
date: 2015-06-24 00:03:22
---

```java

/**
 * Description Given a string S and a string T, count the number of distinct subsequences of T in S.
 * <p/>
 * A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of
 * the characters without disturbing the relative positions of the remaining characters. (ie, "ACE" is a subsequence of
 * "ABCDE" while "AEC" is not).
 * <p/>
 * Here is an example: S = "rabbbit", T = "rabbit"
 * <p/>
 * Return 3.
 *
 * @author hzhou
 */
public class DistinctSubsequences {
    public int numDistinct(String s, String t) {
        assert s != null && t != null;
        if (s.length() < t.length()) {
            return 0;
        }
        int[][] map = new int[s.length() + 1][t.length() + 1];
        for (int i = 0; i <= s.length(); i++) {
            map[i][0] = 1;
        }
        for (int i = 1; i <= s.length(); i++) {
            for (int j = 1; j <= t.length(); j++) {
                if (s.charAt(i - 1) == t.charAt(j - 1)) {
                    map[i][j] = map[i - 1][j] + map[i - 1][j - 1];
                } else {
                    map[i][j] = map[i - 1][j];
                }
            }
        }
        return map[s.length()][t.length()];
    }
}
```
