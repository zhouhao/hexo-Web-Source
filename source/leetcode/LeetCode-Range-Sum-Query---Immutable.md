title: 'LeetCode: Range Sum Query - Immutable'
date: 2016-06-25 20:03:22
---

Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

### Example:
Given nums = `[-2, 0, 3, -5, 2, -1]`
```
sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3
```
### Note:
1. You may assume that the array does not change.
2. There are many calls to sumRange function.

```java
public class NumArray {
    private int[] sum;
    public NumArray(int[] nums) {
        
    if (nums != null && nums.length > 0) {
            sum = new int[nums.length];
            int x = 0;
            for (int i = 0; i < nums.length; i++) {
                x += nums[i];
                sum[i] = x;
            }
        }
    }

    public int sumRange(int i, int j) {
        if (sum == null || i > j || j >= sum.length) {
            return 0;
        }

        return sum[j] - (i > 0 ? sum[i - 1] : 0);
    }
}


// Your NumArray object will be instantiated and called as such:
// NumArray numArray = new NumArray(nums);
// numArray.sumRange(0, 1);
// numArray.sumRange(1, 2);
```