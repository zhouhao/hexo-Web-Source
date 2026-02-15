title: 'LeetCode: Relative Ranks'
date: 2017-08-30 20:03:22
---

Given scores of N athletes, find their relative ranks and the people with the top three highest scores, who will be awarded medals: "Gold Medal", "Silver Medal" and "Bronze Medal".

### Example 1:
```
Input: [5, 4, 3, 2, 1]
Output: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
Explanation: The first three athletes got the top three highest scores, so they got "Gold Medal", "Silver Medal" and "Bronze Medal".
For the left two athletes, you just need to output their relative ranks according to their scores.
```

#### Note:
1. N is a positive integer and won't exceed 10,000.
2. All the scores of athletes are guaranteed to be unique.

```java
public class Solution {
    public String[] findRelativeRanks(int[] nums) {
        int[] arr = Arrays.copyOf(nums, nums.length);
        Arrays.sort(arr);
        int rank = nums.length;
        Map<Integer, Integer> orderMap = new HashMap<>();
        for (int i : arr) {
            orderMap.put(i, rank--);
        }

        String[] result = new String[nums.length];
        for (int i = 0; i < nums.length; i++) {
            int n = nums[i];
            if (orderMap.get(n) == 1) {
                result[i] = "Gold Medal";
            } else if (orderMap.get(n) == 2) {
                result[i] = "Silver Medal";

            } else if (orderMap.get(n) == 3) {
                result[i] = "Bronze Medal";
            } else {
                result[i] = orderMap.get(n) + "";
            }

        }

        return result;
    }
}
```
