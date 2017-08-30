title: 'LeetCode: Find All Duplicates in an Array'
date: 2017-08-30 20:03:22
---

Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

### Example:
```
Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]
```

```java
public class Solution {
    public List<Integer> findDuplicates(int[] nums) {
         List<Integer> result = new ArrayList<>();
        if (nums == null || nums.length < 2) {
            return result;
        }
        for (int i : nums) {
            if (nums[Math.abs(i) - 1] > 0) {
                nums[Math.abs(i) - 1] = -nums[Math.abs(i) - 1];
            } else {
                result.add(Math.abs(i));
            }
        }
        return result;
    }
}
```
