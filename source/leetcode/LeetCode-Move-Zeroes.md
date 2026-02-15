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
       if (nums == null || nums.length < 2) return;
       int z, nz;
       z = nz = 0;
       while (z < nums.length && nz < nums.length) {
           while (z < nums.length && nums[z] != 0) z++;
           while (nz < nums.length && nums[nz] == 0) nz++;
           if (z < nums.length && nz < nums.length && z < nz) {
               swap(z, nz, nums);
               z++;
           }
           nz++;
       }
   }

   private void swap(int a, int b, int[] nums) {
       int t = nums[a];
       nums[a] = nums[b];
       nums[b] = t;
   }

}
```