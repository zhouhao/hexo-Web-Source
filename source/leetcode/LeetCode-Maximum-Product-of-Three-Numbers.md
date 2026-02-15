title: 'LeetCode: Maximum Product of Three Numbers'
date: 2017-08-30 20:03:22
---

Given an integer array, find three numbers whose product is maximum and output the maximum product.

### Example 1:
```
Input: [1,2,3]
Output: 6
Example 2:
Input: [1,2,3,4]
Output: 24
```
#### Note:
1. The length of the given array will be in range [3,104] and all elements are in the range [-1000, 1000].
2. Multiplication of any three numbers in the input won't exceed the range of 32-bit signed integer.

```java
public class Solution {
    public int maximumProduct(int[] nums) {
        if (nums == null || nums.length < 3) return -1;
        int a = findMax(0, nums);
        int b = findMax(1, nums);
        int c = findMax(2, nums);
        int x = findMin(nums.length - 1, nums);
        int y = findMin(nums.length - 2, nums);

        return Math.max(a * b * c, a * x * y);
    }

    private int findMax(int start, int[] nums) {
        int x = Integer.MIN_VALUE;
        int index = start;
        for (int i = start; i < nums.length; i++) {
            if (nums[i] > x) {
                x = nums[i];
                index = i;
            }
        }
        if (index != start) {
            int t = nums[start];
            nums[start] = nums[index];
            nums[index] = t;
        }
        return nums[start];
    }

    private int findMin(int end, int[] nums) {
        int x = Integer.MAX_VALUE;
        int index = end;
        for (int i = end; i >= 0; i--) {
            if (nums[i] < x) {
                x = nums[i];
                index = i;
            }
        }
        if (index != end) {
            int t = nums[end];
            nums[end] = nums[index];
            nums[index] = t;
        }
        return nums[end];
    }
}
```
