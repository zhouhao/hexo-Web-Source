title: 'LeetCode: Maximum Average Subarray I'
date: 2017-08-30 20:03:22
---

Given an array consisting of n integers, find the contiguous subarray of given length k that has the maximum average value. And you need to output the maximum average value.

### Example 1:
```
Input: [1,12,-5,-6,50,3], k = 4
Output: 12.75
Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75
```
#### Note:
1. 1 <= k <= n <= 30,000.
2. Elements of the given array will be in the range [-10,000, 10,000].

```java
public class Solution {
    public double findMaxAverage(int[] nums, int k) {
        if (nums == null || nums.length < k) {
            return 0;
        }

        int pre = 0;
        int sum = 0;
        for (int i = 0; i < k; i++) {
            pre += nums[i];
        }

        sum = pre;

        for (int i = k; i < nums.length; i++) {
            pre = pre - nums[i - k] + nums[i];
            sum = Math.max(sum, pre);
        }

        return 1.0 * sum / k;
    }
}
```
