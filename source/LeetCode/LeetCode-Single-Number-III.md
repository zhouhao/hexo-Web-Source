title: 'LeetCode: Single Number III'
date: 2016-06-25 20:03:22
---

Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.

For example:

Given nums = [1, 2, 1, 3, 2, 5], return [3, 5].

### Note:
1. The order of the result is not important. So in the above example, [5, 3] is also correct.
2. Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?

我承认这题我不会做，看了答案也不会的那种

```java
public class Solution {
    public int[] singleNumber(int[] nums) {
        if (nums == null || nums.length < 2) {
            return new int[2];
        }
        int x = 0;
        for (int i : nums) {
            x ^= i;
        }

        int divide = 1;
        if (x % 2 == 0) {
            for (int i = 1; i < 32; i++) {
                divide *= 2;
                if ((x & divide) > 0) {
                    break;
                }
            }
        }
        int a = 0;
        int b = 0;
        for (int i : nums) {
            if ((i & divide) == 0) {
                a ^= i;
            } else {
                b ^= i;
            }
        }
        return new int[]{a, b};
    }
}
```