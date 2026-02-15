title: 'LeetCode: Subarray Sum Equals K'
date: 2017-08-30 20:03:22
---

Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

### Example 1:
```
Input:nums = [1,1,1], k = 2
Output: 2
```
#### Note:
1. The length of the array is in range [1, 20,000].
2. The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].

```java
class Solution {
    public int subarraySum(int[] nums, int k) {
        int[] sum = new int[nums.length + 1];
        sum[0] = 0;
        for (int i = 0; i < nums.length; i++) {
            sum[i + 1] = sum[i] + nums[i];
        }

        int result = 0;
        for (int i = 0; i < sum.length - 1; i++) {
            for (int j = i + 1; j < sum.length; j++) {
                if (sum[j] - sum[i] == k) {
                    result++;
                }
            }
        }
        return result;
    }
}
```
