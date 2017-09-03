title: 'LeetCode: Russian Doll Envelopes'
date: 2017-09-03 20:03:22
---

You have a number of envelopes with widths and heights given as a pair of integers (w, h). One envelope can fit into another if and only if both the width and height of one envelope is greater than the width and height of the other envelope.

What is the maximum number of envelopes can you Russian doll? (put one inside other)

### Example:
Given envelopes = `[[5,4],[6,4],[6,7],[2,3]]`, the maximum number of envelopes you can Russian doll is `3` ([2,3] => [5,4] => [6,7]).


 ```java
public class RussianDollEnvelopes {

    public int maxEnvelopes(int[][] envelopes) {
        if (envelopes == null || envelopes.length == 0) {
            return 0;
        }

        Arrays.sort(envelopes, (o1, o2) -> {
            if (o1[0] == o2[0]) {
                return o1[1] - o2[1];
            } else {
                return o1[0] - o2[0];
            }
        });

        int[] dp = new int[envelopes.length];
        for (int i = 0; i < dp.length; i++) dp[i] = 1;
        int result = 1;
        for (int i = 1; i < envelopes.length; i++) {
            int[] crt = envelopes[i];
            for (int j = 0; j < i; j++) {
                int[] pre = envelopes[j];
                if (crt[0] > pre[0] && crt[1] > pre[1]) {
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                }
            }
            result = Math.max(result, dp[i]);
        }
        return result;
    }
}

```
