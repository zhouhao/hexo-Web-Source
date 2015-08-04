title: 'LeetCode: Two Sum'
date: 2015-06-24 00:03:22
---
Given an array of integers, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

You may assume that each input would have exactly one solution.

Input: `numbers={2, 7, 11, 15}, target=9`

Output: `index1=1, index2=2`

```java
public class TwoSum {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<Integer, Integer>();
        int[] result = new int[2];
        for(int i = 0; i < nums.length;i++){
            int x = target - nums[i];
            if(map.containsKey(x)) {
                result[0] = map.get(x);
                result[1] = i+1;
                return result;
            }
            map.put(nums[i], i+1);
        }
        return result;
    }
}
```
