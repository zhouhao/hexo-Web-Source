title: 'LeetCode: Interleaving String'
date: 2015-06-24 00:03:22
---

```java

/**
 * Description
 *
 * @author hzhou
 */
public class InterleavingString {
    public boolean isInterleave(String s1, String s2, String s3) {
        if (s1 == null || s1.isEmpty()) {
            return s2.equals(s3);
        }
        if (s2 == null || s2.isEmpty()) {
            return s1.equals(s3);
        }
        if (s3 == null || s3.isEmpty()) {
            return false;
        }
        int l1 = s1.length();
        int l2 = s2.length();
        int l3 = s3.length();
        if (l1 + l2 != l3) {
            return false;
        }
        boolean[][] map = new boolean[l1 + 1][l2 + 1];
        for (int i = 0; i < l2; i++) {
            if (s2.charAt(i) == s3.charAt(i)) {
                map[0][i + 1] = true;
            } else {
                break;
            }
        }
        for (int i = 0; i < l1; i++) {
            if (s1.charAt(i) == s3.charAt(i)) {
                map[i + 1][0] = true;
            } else {
                break;
            }
        }
        for (int i = 1; i <= l1; i++) {
            for (int j = 1; j <= l2; j++) {
                map[i][j] = (map[i - 1][j] && s1.charAt(i - 1) == s3.charAt(i + j - 1)) || (map[i][j - 1]
                        && s2.charAt(j - 1) == s3.charAt(i + j - 1));
            }
        }
        return map[l1][l2];
    }
}
```
