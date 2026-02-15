title: 'LeetCode: Find the Duplicate Number'
date: 2016-06-25 20:03:22
---

Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

### Note:
1. You must not modify the array (assume the array is read only).
2. You must use only constant, O(1) extra space.
3. Your runtime complexity should be less than O(n<sup>2</sup>).
4. There is only one duplicate number in the array, but it could be repeated more than once.

```java
public class Solution {
    public int findDuplicate(int[] nums) {
        if (nums == null || nums.length < 2) {
            return 0;
        }

        int r = nums.length - 1;
        int l = 1;
        while (l <= r) {
            int mid = (l + r) / 2;
            int a = 0;
            for (int i : nums) {
                if (i <= mid) {
                    a++;
                }
            }
            if (a > mid) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        return l;
    }
}
```