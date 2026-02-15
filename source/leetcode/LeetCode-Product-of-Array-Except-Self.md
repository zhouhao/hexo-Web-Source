title: 'LeetCode: Product of Array Except Self'
date: 2015-08-10 09:42:19
---
 Given an array of n integers where `n > 1`, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Solve it without division and in O(n).

### For example, 
given `[1,2,3,4]`, return `[24,12,8,6]`.

```java
public class Solution {
    public int[] productExceptSelf(int[] nums) {
        int len = nums.length;
        int[] result = new int[len];

        result[len - 1] = 1;

        for (int i = len - 2; i >= 0; i--) {
            result[i] = result[i + 1] * nums[i + 1];
        }

        int offSet = 1;
        for (int i = 0; i < len; i++) {
            result[i] *= offSet;
            offSet *= nums[i];
        }
        return result;
    }
}
```