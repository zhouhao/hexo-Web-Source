title: 'LeetCode: Intersection of Two Arrays'
date: 2016-06-25 20:03:22
---

Given two arrays, write a function to compute their intersection.

### Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

### Note:
1. Each element in the result must be unique.
2. The result can be in any order.

```java
public class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        if (nums1 == null || nums1.length == 0 || nums2 == null || nums2.length == 0) {
            return new int[0];
        }
        Set<Integer> set1 = Arrays.stream(nums1).boxed().collect(Collectors.toSet());
        Set<Integer> result = new HashSet<>();

        for (int n : nums2) {
            if (set1.contains(n)) {
                result.add(n);
            }
        }
        int[] res = new int[result.size()];
        int i = 0;
        for (int x : result) {
            res[i++] = x;
        }
        return res;
    }
}
```