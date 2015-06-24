title: 'LeetCode: Search in Rotated Sorted Array II'
date: 2015-06-24 00:03:22
tags:
 - LeetCode
---
<hr/>    

```java

import static org.junit.Assert.assertSame;
import static org.junit.Assert.assertTrue;
/**
 * Description:
 *
 * @author hzhou
 */
public class SearchInRotatedSortedArrayII {
    public boolean search(int[] nums, int target) {
        if (nums == null || nums.length == 0) {
            return false;
        }
        int pivot = getPivot(nums);
        return binarySearch(0, pivot - 1, nums, target) || binarySearch(pivot, nums.length - 1, nums, target);
    }
    private int getPivot(int[] nums) {
        int start = 0;
        int end = nums.length - 1;
        while (start <= end) {
            int middle = (start + end) / 2;
            if (middle > 0 && nums[middle] < nums[middle - 1]) {
                return middle;
            }
            if (nums[start] == nums[middle]) {
                start++;
            } else if (nums[start] > nums[middle]) {
                end = middle;
            } else {
                start = middle;
            }
        }
        return 0;
    }
    private boolean binarySearch(int start, int end, int[] nums, int target) {
        while (start <= end) {
            int middle = (start + end) / 2;
            if (nums[middle] == target) {
                return true;
            }
            if (nums[middle] < target) {
                start = middle + 1;
            } else {
                end = middle - 1;
            }
        }
        return false;
    }
    @Test
    public void test() {
        int[] nums = new int[]{1, 1, 1, 1, 1, 1, 0};
        assertSame(6, getPivot(nums));
        nums = new int[]{1, 1, 1, 1, 1, 1, 1};
        assertSame(0, getPivot(nums));
        nums = new int[]{1, 2, 3, 1, 1, 1, 1};
        assertSame(3, getPivot(nums));
        assertTrue(search(nums, 3));
        assertTrue(!search(nums, 4));
        nums = new int[]{1};
        assertTrue(!search(nums, 4));
        assertTrue(search(nums, 1));
    }
}
```
