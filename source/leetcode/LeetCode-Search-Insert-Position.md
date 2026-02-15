title: 'LeetCode: Search Insert Position'
date: 2015-06-24 00:03:22
---
 
```java

/**
* Created by hzhou on 4/27/15. codeashobby@gmail.com
*/
public class SearchInsertPosition {
    public int searchInsert(int[] nums, int target) {
        if (nums.length == 0 || target <= nums[0]) {
            return 0;
        }
        if (target > nums[nums.length - 1]) {
            return nums.length;
        }
        for (int i = 1; i < nums.length; i++) {
            if (target == nums[i]) {
                return i;
            }
            if (target > nums[i - 1] && target < nums[i]) {
                return i;
            }
        }
        // this should never be reached
        return 1;
    }
}
```
