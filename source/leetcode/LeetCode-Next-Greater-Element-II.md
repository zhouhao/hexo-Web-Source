title: 'LeetCode: Next Greater Element II'
date: 2017-08-30 20:03:22
---

Given a circular array (the next element of the last element is the first element of the array), print the Next Greater Number for every element. The Next Greater Number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, output -1 for this number.

### Example 1:
```
Input: [1,2,1]
Output: [2,-1,2]
Explanation: The first 1's next greater number is 2;
The number 2 can't find next greater number;
The second 1's next greater number needs to search circularly, which is also 2.
```
**Note**: The length of given array won't exceed 10000.

```java
public class Solution {
    public int[] nextGreaterElements(int[] nums) {
        if (nums == null || nums.length == 0) return new int[0];
        int max = 0;
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] >= nums[max]) {
                max = i;
            }
        }

        int x = max + nums.length;
        int[] result = new int[nums.length];
        result[max] = -1;
        List<Integer> queue = new ArrayList<>();
        queue.add(nums[max]);
        for (int i = x - 1; i > max; i--) {
            int pre = queue.get(queue.size() - 1);
            int index = i % nums.length;
            if (nums[index] == nums[max]) result[index] = -1;
            for (int n = queue.size() - 1; n >= 0; n--) {
               if (queue.get(n) > nums[index]) {
                    result[index] = queue.get(n);
                    break;
                }
            }
            if (nums[index] > nums[(i-1)%nums.length]) queue.add(nums[index]);

        }
        return result;
    }
}
```
