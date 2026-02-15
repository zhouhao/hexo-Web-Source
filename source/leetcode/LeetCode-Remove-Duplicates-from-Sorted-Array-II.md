title: 'LeetCode: Remove Duplicates from Sorted Array II'
date: 2015-06-24 00:03:22
---

Follow up for "Remove Duplicates":
What if duplicates are allowed at most twice?

For example,
Given sorted array nums = `[1,1,1,2,2,3]`,

Your function should return length = `5`, with the first five elements of nums being `1`, `1`, `2`, `2` and `3`. It doesn't matter what you leave beyond the new length.

 ```java
    public int removeDuplicates(int[] nums) {
        if (nums == null || nums.length < 3) return nums == null ? 0 : nums.length;
        int pre = nums[0];
        int count = 1;
        int l = 1;
        for (int i = 1; i < nums.length; i++) {
            int c = nums[i];
            if (pre != c) {
                nums[l++] = c;
                pre = c;
                count = 1;
            } else if (count < 2) {
                count++;
                nums[l++] = pre;
            } else {
                count++;
            }
        }
        return l;
    }
}
```
