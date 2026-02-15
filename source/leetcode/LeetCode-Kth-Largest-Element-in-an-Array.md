title: 'LeetCode: Kth Largest Element in an Array'
date: 2015-06-23 21:37:33
---
 Find the `kth` largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

### For example,
Given `[3,2,1,5,6,4]` and `k = 2`, return `5`.

```java
public class Solution {
    public int findKthLargest(int[] nums, int k) {
        Arrays.sort(nums);
        return nums[nums.length-k];
    }
}
```