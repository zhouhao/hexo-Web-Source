title: 'LeetCode: Intersection of Two Arrays II'
date: 2016-06-25 20:03:22
---

Given two arrays, write a function to compute their intersection.

### Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].

### Note:
1. Each element in the result should appear as many times as it shows in both arrays.
2. The result can be in any order.

### Follow up:
1. What if the given array is already sorted? How would you optimize your algorithm?
2. What if nums1's size is small compared to nums2's size? Which algorithm is better?
3. What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

```java
public class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        if (nums1 == null || nums1.length == 0 || nums2 == null || nums2.length == 0) {
            return new int[0];
        }

        Map<Integer, Integer> map = new HashMap<>();
        List<Integer> result = new ArrayList<>();
        for (int i : nums1) {
            int count = 1;
            if (map.containsKey(i)) {
                count += map.get(i);
            }
            map.put(i, count);
        }
        for (int i : nums2) {
            if (map.containsKey(i) && map.get(i) > 0) {
                result.add(i);
                map.put(i, map.get(i) - 1);
            }
        }
        int[] r = new int[result.size()];
        for (int i = 0; i < result.size(); i++) {
            r[i] = result.get(i);
        }
        return r;
    }
}
```
