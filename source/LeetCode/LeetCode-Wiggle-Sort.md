title: 'LeetCode: Wiggle Sort'
date: 2016-06-25 20:03:22
---

Given an unsorted array `nums`, reorder it in-place such that `nums[0] <= nums[1] >= nums[2] <= nums[3]...`.

For example, given `nums = [3, 5, 2, 1, 6, 4]`, one possible answer is `[1, 6, 2, 5, 3, 4]`.

这个效率在Leetcode垫底了 T_T

```java
public class Solution {
     public void wiggleSort(int[] nums) {

        if (nums == null || nums.length < 2) {
            return;
        }

        for (int i = 0; i < nums.length; i += 2) {
            int min = getMin(i, nums);
            if (min != i) {
                swap(min, i, nums);
            }

            int max = getMax(i + 1, nums);
            if (max != i + 1) {
                swap(max, i + 1, nums);
            }
        }
    }

    private int getMax(int start, int[] nums) {
        if (start >= nums.length - 1) {
            return start;
        }
        int max = start;
        for (int i = start + 1; i < nums.length; i++) {
            if (nums[max] < nums[i]) {
                max = i;
            }
        }
        return max;
    }

    private int getMin(int start, int[] nums) {
        if (start >= nums.length - 1) {
            return start;
        }
        int min = start;
        for (int i = start + 1; i < nums.length; i++) {
            if (nums[min] > nums[i]) {
                min = i;
            }
        }
        return min;
    }

    private void swap(int a, int b, int[] nums) {
        int tmp = nums[a];
        nums[a] = nums[b];
        nums[b] = tmp;
    }
}
```