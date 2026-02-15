title: 'LeetCode: Maximum Subarray'
date: 2015-06-24 00:03:22
---

Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

For example, given the array `[-2,1,-3,4,-1,2,1,-5,4]`,
the contiguous subarray `[4,-1,2,1]` has the largest sum = `6`.


```java
public class MaximumSubarray {
    public int maxSubArray(int[] nums) {
        if (nums.length == 0) {
            return 0;
        }
        int tmp = nums[0];
        int result = nums[0];
        for (int i = 1; i < nums.length; i++) {
            tmp = Math.max(nums[i] + tmp, nums[i]);
            result = Math.max(result, tmp);
        }
        return result;
    }
}
```
