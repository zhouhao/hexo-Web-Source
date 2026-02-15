title: 'LeetCode: Beautiful Arrangement'
date: 2017-08-30 20:03:22
---

Suppose you have **N** integers from 1 to N. We define a beautiful arrangement as an array that is constructed by these N numbers successfully if one of the following is true for the ith position (1 <= i <= N) in this array:

1. The number at the i-th position is divisible by i.
2. i is divisible by the number at the i-th position.

Now given N, how many beautiful arrangements can you construct?

### Example 1:
```
Input: 2
Output: 2
Explanation:

The first beautiful arrangement is [1, 2]:

Number at the 1st position (i=1) is 1, and 1 is divisible by i (i=1).

Number at the 2nd position (i=2) is 2, and 2 is divisible by i (i=2).

The second beautiful arrangement is [2, 1]:

Number at the 1st position (i=1) is 2, and 2 is divisible by i (i=1).

Number at the 2nd position (i=2) is 1, and i (i=2) is divisible by 1.
```
##### Note:
1. **N** is a positive integer and will not exceed 15.

```java
class Solution {
    public int countArrangement(int N) {
        if (N < 1) return 0;

        int[] result = {0};
        int[] visited = new int[N + 1];

        help(N, 1, visited, result);
        return result[0];
    }

    private void help(int N, int start, int[] visited, int[] result) {
        if (start > N) {
            result[0]++;
            return;
        }

        for (int i = 1; i <= N; i++) {
            if (visited[i] == 0 && (start % i == 0 || i % start == 0)) {
                visited[i] = 1;
                help(N, start + 1, visited, result);
                visited[i] = 0;
            }
        }
    }
}
```
