title: 'LeetCode: Maximum Product Subarray'
date: 2015-06-24 00:03:22
---
 
```java

/**
 * Description:
 *
 * @author hzhou
 */
public class MaximumProductSubarray {
    public int maxProduct(int[] nums) {
        if (nums == null || nums.length == 0) {
            return 0;
        }
        int localMax = nums[0];
        int localMin = nums[0];
        int globalMax = nums[0];
        for (int i = 1; i < nums.length; i++) {
            int tmp = localMax;
            localMax = Math.max(Math.max(localMax * nums[i], nums[i]), localMin * nums[i]);
            localMin = Math.min(Math.min(nums[i], localMin * nums[i]), tmp * nums[i]);
            globalMax = Math.max(globalMax, localMax);
        }
        return globalMax;
    }
}
```
