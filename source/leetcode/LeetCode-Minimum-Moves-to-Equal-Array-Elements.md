title: 'LeetCode: Minimum Moves to Equal Array Elements'
date: 2017-08-30 20:03:22
---

Given a non-empty integer array of size n, find the minimum number of moves required to make all array elements equal, where a move is incrementing n - 1 elements by 1.

###Example:
```
Input:
[1,2,3]

Output:
3

Explanation:
Only three moves are needed (remember each move increments two elements):

[1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
```

```java
public class Solution {
    public int minMoves(int[] nums) {
        int min = Integer.MAX_VALUE;
        for (int i : nums) {
            min = Math.min(i, min);
        }

        int result = 0;
        for (int i : nums) {
            result += i - min;
        }

        return result;
    }
}
```
