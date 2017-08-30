title: 'LeetCode: Contiguous Array'
date: 2017-08-30 20:03:22
---

Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

### Example 1:
```
Input: [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
```
### Example 2:
```
Input: [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
```
**Note**: The length of the given binary array will not exceed 50,000.

```java
public class Solution {
    public int findMaxLength(int[] nums) {
        if (nums == null || nums.length < 2) return 0;

        int sum = 0;
        int result = 0;
        Map<Integer, Integer> dict = new HashMap<>();
        dict.put(0, -1);
        for (int i = 0; i < nums.length; i++) {
            sum += (nums[i] << 1) - 1;
            if (dict.containsKey(sum)) {
                result = Math.max(result, i - dict.get(sum));
            } else {
                dict.put(sum, i);
            }
        }
        return result;
    }
}
```
