title: 'LeetCode: Contains Duplicate II'
date: 2015-06-23 21:04:03
---
 Given an array of integers and an integer `k`, find out whether there there are two distinct indices `i`and `j` in the array such that `nums[i]` = `nums[j]` and the difference between `i` and `j` is at most `k`.

```java
public class ContainsDuplicateII {

    public boolean containsNearbyDuplicate(int[] nums, int k) {
        if (nums == null || nums.length < 2 || k < 1) {
            return false;
        }

        Map<Integer, Integer> map = new HashMap<Integer, Integer>();
        for (int i = 0; i < nums.length; i++) {
            if (!map.containsKey(nums[i])) {
                map.put(nums[i], i);
            } else {
                if (map.get(nums[i]) < i - k) {
                    map.put(nums[i], i);
                } else {
                    return true;
                }
            }

        }
        return false;
    }
}
```
