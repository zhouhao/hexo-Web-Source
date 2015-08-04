title: 'LeetCode: Find Peak Element'
date: 2015-06-24 00:03:22
---

```java

/**
 * Description: A peak element is an element that is greater than its neighbors.
 * <p/>
 * Given an input array where num[i] â‰? num[i+1], find a peak element and return its index.
 * <p/>
 * The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.
 * <p/>
 * You may imagine that num[-1] = num[n] = -âˆ?.
 * <p/>
 * For example, in array [1, 2, 3, 1], 3 is a peak element and your function should return the index number 2.
 *
 * @author hzhou
 */
public class FindPeakElement {
    public int findPeakElement(int[] nums) {
        if (nums == null || nums.length == 0) {
            return -1;
        }
        if (nums.length == 1 || nums[0] > nums[1]) {
            return 0;
        }
        int length = nums.length;
        if (nums[length - 1] > nums[length - 2]) {
            return length - 1;
        }
        for (int i = 1; i < length - 1; i++) {
            if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
                return i;
            }
        }
        return -1;
    }
}
```
