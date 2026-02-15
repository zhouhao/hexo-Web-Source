title: 'LeetCode: Missing Number'
date: 2016-06-25 20:03:22
---

Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

For example,
Given nums = `[0, 1, 3]` return `2`.

### Note:
Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?

```java
public class Solution {
    public int missingNumber(int[] nums) {
        int n = nums.length;
        int sum = Arrays.stream(nums).sum();
        return n * (n + 1) / 2 - sum;
    }
}
```