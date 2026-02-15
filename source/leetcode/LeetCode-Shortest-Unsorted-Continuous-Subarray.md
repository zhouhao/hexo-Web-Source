title: 'LeetCode: Shortest Unsorted Continuous Subarray'
date: 2017-08-30 20:03:22
---

Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.

You need to find the shortest such subarray and output its length.

### Example 1:
```
Input: [2, 6, 4, 8, 10, 9, 15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
```

#### Note:
1. Then length of the input array is in range [1, 10,000].
2. The input array may contain duplicates, so ascending order here means <=.

```java
public class Solution {
    public int findUnsortedSubarray(int[] nums) {
        if (nums == null || nums.length < 2) {
            return 0;
        }

        int[] ordered = new int[nums.length];
        System.arraycopy(nums, 0, ordered, 0, nums.length);
        Arrays.sort(ordered);

        int start = 0;
        int end = nums.length - 1;
        for (int i = 0; i < nums.length; i++) {
            start = i;
            if (nums[i] != ordered[i]) {
                break;
            }
        }
        if (start == nums.length-1) {
            return 0;
        }
        for (int i = nums.length - 1; i > 0; i--) {
            end = i;
            if (nums[i] != ordered[i]) {
                break;
            }
        }

        return end - start + 1;
    }
}
```
