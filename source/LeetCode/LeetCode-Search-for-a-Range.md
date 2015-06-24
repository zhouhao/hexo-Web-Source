title: 'LeetCode: Search for a Range'
date: 2015-06-24 00:03:22
tags:
 - LeetCode
---
<hr/>    

```java

/**
 * Created by hzhou on 2015/5/28.
 * Email: codeashobby@gmail.com
 * <p>
 * Given a sorted array of integers, find the starting and ending position of a given target value.
 * <p>
 * Your algorithm's runtime complexity must be in the order of O(log n).
 * <p>
 * If the target is not found in the array, return [-1, -1].
 * <p>
 * For example,
 * Given [5, 7, 7, 8, 8, 10] and target value 8,
 * return [3, 4].
 */
public class SearchForARange {
    public int[] searchRange(int[] nums, int target) {
        int[] result = new int[]{-1, -1};
        if (nums == null || nums.length == 0 || target < nums[0] || target > nums[nums.length - 1]) {
            return result;
        }
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == target) {
                result[0] = i;
                int crt = nums[i];
                while (nums[i] == crt) {
                    i++;
                }
                result[1] = i - 1;
                break;
            }
        }
        return result;
    }
}
```
