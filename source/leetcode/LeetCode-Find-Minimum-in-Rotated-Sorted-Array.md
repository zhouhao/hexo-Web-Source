title: 'LeetCode: Find Minimum in Rotated Sorted Array'
date: 2015-06-24 00:03:22
---
 
```java

/**
 * Description
 *
 * @author hzhou
 */
public class FindMinimumInRotatedSortedArray {
    public int findMin(int[] nums) {
        if (nums == null || nums.length == 0) {
            return 0;
        }
        if (nums.length == 1 || nums[0] < nums[nums.length - 1]) {
            return nums[0];
        }
        return helper(0, nums.length - 1, nums);
    }
    private int helper(int start, int end, int[] nums) {
        int result = nums[start];
        while (start < end) {
            if (nums[start] < nums[end]) {
                result = nums[start];
                break;
            }
            int middle = (start + end) / 2;
            if (middle > 0 && nums[middle] < nums[middle - 1]) {
                result = nums[middle];
                break;
            }
            if (middle == start) {
                result = Math.min(nums[start], nums[end]);
                break;
            }
            if (nums[middle] > nums[start] && nums[middle] > nums[end]) {
                start = middle + 1;
            } else if (nums[middle] < nums[start] && nums[middle] < nums[end]) {
                end = middle - 1;
            }
        }
        return (start == end) ? nums[start] : result;
    }
    @Test
    public void test() {
        int[] nums = new int[]{2, 3, 4, 5, 1};
        System.out.println(findMin(nums));
    }
}
```
