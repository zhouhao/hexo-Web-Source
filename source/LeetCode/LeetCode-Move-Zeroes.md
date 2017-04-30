title: 'LeetCode: Move Zeroes'
date: 2016-06-25 20:03:22
---


Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

For example, given `nums = [0, 1, 0, 3, 12]`, after calling your function, nums should be `[1, 3, 12, 0, 0]`.

### Note:
1. You must do this in-place without making a copy of the array.
2. Minimize the total number of operations.

```java
public class Solution {
    public void moveZeroes(int[] nums) {
        if (nums == null || nums.length < 2) {
            return;
        }

        int firstZero = getFirstZeroIndex(-1, nums);
        int firstNonZero = getFirstNonZeroIndex(-1, nums);
        while (firstNonZero != nums.length) {
            if (firstNonZero > firstZero) {
                nums[firstZero] = nums[firstNonZero];
                nums[firstNonZero] = 0;
                firstZero = getFirstZeroIndex(firstZero, nums);
            }
            firstNonZero = getFirstNonZeroIndex(firstZero, nums);
        }
    }

    private int getFirstZeroIndex(int start, int[] nums) {
        for (int i = start + 1; i < nums.length; i++) {
            if (nums[i] == 0) {
                return i;
            }
        }
        return nums.length;
    }

    private int getFirstNonZeroIndex(int start, int[] nums) {
        for (int i = start + 1; i < nums.length; i++) {
            if (nums[i] != 0) {
                return i;
            }
        }
        return nums.length;
    }
}
```