title: 'LeetCode: Search in Rotated Sorted Array'
date: 2015-06-24 00:03:22
tags:
 - LeetCode
---
<hr/>    

```java

import static org.junit.Assert.assertSame;
/**
 * Created by hzhou on 2015/5/26.
 * Email: codeashobby@gmail.com
 * <p>
 * Suppose a sorted array is rotated at some pivot unknown to you beforehand.
 * <p>
 * (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
 * <p>
 * You are given a target value to search. If found in the array return its index, otherwise return -1.
 * <p>
 * You may assume no duplicate exists in the array.
 */
public class SearchInRotatedSortedArray {
    public int search(int[] nums, int target) {
        if (nums == null || nums.length == 0) {
            return -1;
        }
        int pivot = getPivot(nums);
        if (pivot == -1) {
            return binarySearch(0, nums.length - 1, nums, target);
        } else {
            int l = binarySearch(0, pivot - 1, nums, target);
            if (l != -1) {
                return l;
            } else {
                return binarySearch(pivot, nums.length - 1, nums, target);
            }
        }
    }
    private int getPivot(int[] nums) {
        int start = 0;
        int end = nums.length - 1;
        if (nums[start] < nums[end]) {
            return -1;
        }
        while (start < end) {
            if (start + 1 >= end) {
                return nums[start] < nums[end] ? start : end;
            }
            int middle = (start + end) / 2;
            if (nums[middle] < nums[middle - 1] && nums[middle] < nums[middle + 1]) {
                return middle;
            }
            if (nums[start] < nums[middle]) {
                start = middle;
            } else {
                end = middle;
            }
        }
        return 0;
    }
    private int binarySearch(int start, int end, int[] nums, int target) {
        while (start <= end) {
            int middle = (start + end) / 2;
            if (nums[middle] == target) {
                return middle;
            } else if (nums[middle] > target) {
                end = middle - 1;
            } else {
                start = middle + 1;
            }
        }
        return -1;
    }
    @Test
    public void test() {
        int[] nums = new int[]{4, 5, 6, 7, 9};
        assertSame(2, binarySearch(0, 5, nums, 6));
        assertSame(-1, binarySearch(0, 5, nums, 3));
        nums = new int[]{4};
        assertSame(0,getPivot(nums));
        nums = new int[]{4,1};
        assertSame(1,getPivot(nums));
        nums = new int[]{4,5};
        assertSame(-1,getPivot(nums));
    }
}
```
