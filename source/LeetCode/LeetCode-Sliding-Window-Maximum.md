title: 'LeetCode: Sliding Window Maximum'
date: 2015-08-09 23:15:35
---
 Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

### For example,
Given nums = `[1,3,-1,-3,5,3,6,7]`, and k = `3`.
```
Window position                Max
---------------               -----
 [1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
 ```
Therefore, return the max sliding window as [3,3,5,5,6,7].

### Note: 
You may assume k is always valid, ie: 1 ≤ k ≤ input array's size for non-empty array.

```java
public class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        if (nums == null || nums.length == 0 || k < 1) {
            return new int[0];
        }
        PriorityQueue<Integer> queue = new PriorityQueue<>(k, (o1, o2) -> o2 - o1);
        int[] result = new int[nums.length + 1 - k];

        int index = 0;
        int start = 0;
        for (int i : nums) {

            if (queue.size() == k) {
                result[index++] = queue.peek();
                queue.remove(nums[start++]);
            }

            if (queue.size() < k) {
                queue.add(i);
            }
        }

        result[index] = queue.peek();
        return result;
    }
}
```