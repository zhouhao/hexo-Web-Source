title: 'LeetCode: Scramble String'
date: 2015-06-24 00:03:22
---

```java

/**
 * Description: TODO: cannot understand
 * <p/>
 * http://www.lifeincode.net/programming/leetcode-scramble-string-java/
 *
 * @author hzhou
 */
public class ScrambleString {
    public boolean isScramble(String s1, String s2) {
        //Check lengths.
        if (s1.length() != s2.length()) {
            return false;
        }
        if (s1.equals(s2)) {
            return true;
        }
        int L = s1.length();
        boolean[][][] scramble = new boolean[L][L][L];
        for (int i = 0; i < L; i++) {
            for (int j = 0; j < L; j++) {
                if (s1.charAt(i) == s2.charAt(j)) {
                    scramble[0][i][j] = true;
                }
            }
        }
        for (int k = 2; k <= L; k++) {
            for (int i = L - k; i >= 0; i--) {
                for (int j = L - k; j >= 0; j--) {
                    boolean canScramble = false;
                    for (int m = 1; m < k; m++) {
                        canScramble = (scramble[m - 1][i][j] && scramble[k - m - 1][i + m][j + m]) || (
                                scramble[m - 1][i][j + k - m] && scramble[k - m - 1][i + m][j]);
                        if (canScramble) {
                            break;
                        }
                    }
                    scramble[k - 1][i][j] = canScramble;
                }
            }
        }
        return scramble[L - 1][0][0];
    }
}
```
