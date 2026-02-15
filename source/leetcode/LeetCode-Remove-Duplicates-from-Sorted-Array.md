title: 'LeetCode: Remove Duplicates from Sorted Array'
date: 2015-06-24 00:03:22
---
 Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.
Do not allocate extra space for another array, you must do this in place with constant memory.

### For example,
Given input array `nums = [1,1,2]`,

Your function should return length = `2`, with the first two elements of nums being `1` and `2` respectively. It doesn't matter what you leave beyond the new length.

```java
public int removeDuplicates(int[] nums) {
  if (nums == null || nums.length == 0) {
    return 0;
  }
  int index = 1;
  int pre = nums[0];

  for (int i : nums) {
    if (i != pre) {
      nums[index++] = i;
      pre = i;
    }
  }
  return index;
}
```
