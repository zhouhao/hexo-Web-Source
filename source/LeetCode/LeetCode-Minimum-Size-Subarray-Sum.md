title: 'LeetCode: Minimum Size Subarray Sum'
date: 2015-06-23 21:38:45
tags:
---
Given an array of n positive integers and a positive integer s, find the minimal length of a subarray of which the `sum ≥ s`. If there isn't one, return 0 instead.    
For example, given the array `[2,3,1,2,4,3]` and `s = 7`,
the subarray `[4,3]` has the minimal length under the problem constraint.

```java
public class MinimumSizeSubarraySum {

    public int minSubArrayLen(int s, int[] nums) {
        if (nums == null || nums.length == 0) {
            return 0;
        }
        int length = nums.length;
        int start, end, crtSum, minLength;
        start = end = crtSum = 0;
        minLength = length + 1;

        while (end < length) {

            while (crtSum < s && end < length) {
                crtSum += nums[end++];
            }

            while (crtSum >= s && start < length) {
                if (end - start < minLength) {
                    minLength = end - start;
                }
                crtSum -= nums[start++];
            }
        }

        return minLength > length ? 0 : minLength;
    }
}
```