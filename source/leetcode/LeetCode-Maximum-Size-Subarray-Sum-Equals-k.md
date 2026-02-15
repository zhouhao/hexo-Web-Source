title: 'LeetCode: Maximum Size Subarray Sum Equals k'
date: 2016-06-25 20:03:22
---

Given an array nums and a target value k, find the maximum length of a subarray that sums to k. If there isn't one, return 0 instead.

### Note:
The sum of the entire nums array is guaranteed to fit within the 32-bit signed integer range.

### Example 1:
Given nums = `[1, -1, 5, -2, 3]`, k = 3,
return 4. (because the subarray `[1, -1, 5, -2]` sums to `3` and is the longest)

### Example 2:
Given nums = `[-2, -1, 2, 1]`, k = `1`,
return 2. (because the subarray `[-1, 2]` sums to `1` and is the longest)

```java
public class Solution {
    public int maxSubArrayLen(int[] nums, int k) {
        if (nums == null || nums.length == 0) {
            return 0;
        }

        int size = nums.length;
        Map<Integer, Integer> map = new HashMap<>();

        int sum = 0;
        int max = 0;
        for (int i = 0; i < size; i++) {
            int n = nums[i];
            sum += n;
            if (sum == k) {
                max = Math.max(max, i+1);
            }
            if (!map.containsKey(sum)) {
                map.put(sum, i);
            }

            int remain =sum-k;
            if (map.containsKey(remain)) {
                max = Math.max(max, i - map.get(remain));
            }
        }
        return max;
    }
}
```