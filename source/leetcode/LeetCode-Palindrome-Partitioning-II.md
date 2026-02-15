title: 'LeetCode: Palindrome Partitioning II'
date: 2015-06-24 00:03:22
---
 
```java

/**
 * Created by hzhou on 2015/5/14.
 * <p/>
 * Given a string s, partition s such that every substring of the partition is a palindrome.
 * <p/>
 * Return the minimum cuts needed for a palindrome partitioning of s.
 * <p/>
 * For example, given s = "aab",
 * Return 1 since the palindrome partitioning ["aa","b"] could be produced using 1 cut.
 */
//TODO
public class PalindromePartitioningII {
    public int minCut(String s) {
        if (s == null || s.length() < 2) {
            return 0;
        }
        int l = s.length();
        boolean[][] map = new boolean[l][l];
        int[] cut = new int[l];
        for (int i = 0; i < l; i++) {
            cut[i] = i;
            for (int j = 0; j <= i; j++) {
                if (s.charAt(i) == s.charAt(j) && (i - j <= 1 || map[j + 1][i - 1])) {
                    map[j][i] = true;
                    if (j > 0) {
                        cut[i] = Math.min(cut[i], cut[j - 1] + 1);
                    } else {
                        cut[i] = 0;
                    }
                }
            }
        }
        return cut[l - 1];
    }
    @Test
    public void test() {
        System.out.println(minCut("efe"));
    }
}
```
