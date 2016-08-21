title: 'LeetCode: Maximum Subarray'
date: 2015-06-24 00:03:22
---
 
```java

/**
 * Created by hzhou on 4/27/15. codeashobby@gmail.com
 */
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
