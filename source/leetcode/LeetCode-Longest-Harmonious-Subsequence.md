title: 'LeetCode: Longest Harmonious Subsequence'
date: 2017-08-30 20:03:22
---

We define a harmonious array is an array where the difference between its maximum value and its minimum value is exactly 1.

Now, given an integer array, you need to find the length of its longest harmonious subsequence among all its possible subsequences.

### Example 1:
```
Input: [1,3,2,2,5,2,3,7]
Output: 5
Explanation: The longest harmonious subsequence is [3,2,2,2,3].
```
**Note**: The length of the input array will not exceed 20,000.


```java
public class Solution {
    public int findLHS(int[] nums) {
         Map<Integer, Integer> dict = new HashMap<>();
        for (int i : nums) {
            dict.put(i, dict.getOrDefault(i, 0) + 1);
        }

        int result =0;
        for (Map.Entry<Integer, Integer> entry : dict.entrySet()) {
            if (dict.containsKey(entry.getKey() + 1)) {
                result = Math.max(result, entry.getValue() + dict.get(entry.getKey() + 1));
            }
        }

        return result;
    }
}
```
