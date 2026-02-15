title: 'LeetCode: Max Consecutive Ones'
date: 2016-06-25 20:03:22
---

Given a binary array, find the maximum number of consecutive 1s in this array.

### Example 1:
```
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.
```

### Note:
1. The input array will only contain 0 and 1.
2. The length of input array is a positive integer and will not exceed 10,000

```java
public class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        if (nums == null || nums.length == 0) {
            return 0;
        }

        int max = 0;
        int crt = 0;
        for (int i : nums) {
            if (i == 0) {
                max = Math.max(max, crt);
                crt = 0;
            } else {
                crt++;
            }
        }
        return Math.max(max, crt);
    }
}
```