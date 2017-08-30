title: 'LeetCode: 3Sum Smaller'
date: 2016-06-25 20:03:22
---

Given an array of n integers nums and a target, find the number of index triplets `i, j, k` with `0 <= i < j < k < n` that satisfy the condition `nums[i] + nums[j] + nums[k] < target`.

For example, given *nums* = `[-2, 0, 1, 3]`, and *target* = 2.

Return 2. Because there are two triplets which sums are less than 2:
```
[-2, 0, 1]
[-2, 0, 3]
```

**Follow up:**
Could you solve it in `O(n2)` runtime?

通过了leetcode，但是性能很差

```java
public class Solution {
    public int threeSumSmaller(int[] nums, int target) {
        Arrays.sort(nums);
        int l = nums.length;
        int result= 0;
        for(int i = 0; i < l-2;i++) {
            for(int j = i+1; j < l-1;j++) {
                for(int k = j+1; k < l;k++) {
                    int sum = nums[i] + nums[j] + nums[k];
                    if(sum < target) {
                        result++;
                    } else {
                        break;
                    }
                }
            }
        }
        return result;
    }
}

```
