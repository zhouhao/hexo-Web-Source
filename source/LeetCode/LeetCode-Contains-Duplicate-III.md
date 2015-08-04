title: 'LeetCode: Contains Duplicate III'
date: 2015-06-23 21:03:57
---
Given an array of integers, find out whether there are two distinct indices `i` and `j` in the array such that the difference between `nums[i]` and `nums[j]` is at most `t` and the difference between `i` and `j` is at most `k`.

```java
public class ContainsDuplicateIII {

    public boolean containsNearbyAlmostDuplicate(int[] nums, int k, int t) {
        if (k < 1 || t < 0) {
            return false;
        }
        // it is important to know TreeSet here:
        TreeSet<Integer> set = new TreeSet<Integer>();
        for (int i = 0; i < nums.length; i++) {
            int n = nums[i];
            if (set.floor(n) != null && n <= t + set.floor(n) ||
                    set.ceiling(n) != null && set.ceiling(n) <= t + n) {
                return true;
            }
            set.add(n);
            if (i >= k) {
                set.remove(nums[i - k]);
            }
        }
        return false;
    }
}
```