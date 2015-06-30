title: 'LeetCode: 3Sum'
date: 2015-06-25 20:03:22
---
```java
public class ThreeSum {
    public List<List<Integer>> threeSum(int[] nums) {
        Set<List<Integer>> result = new HashSet<List<Integer>>();
        if (nums == null || nums.length < 3) {
            return new ArrayList<List<Integer>>();
        }
        Arrays.sort(nums);
        int length = nums.length;
        for (int i = 0; i < length - 2; i++) {
            for (int j = i + 1; j < length - 1; j++) {
                int s = 0 - nums[i] - nums[j];
                if (s < nums[j] || s > nums[length - 1]) {
                    continue;
                }
                if (helper(j + 1, length - 1, nums, s)) {
                    List<Integer> r = new ArrayList<Integer>();
                    r.add(nums[i]);
                    r.add(nums[j]);
                    r.add(s);
                    result.add(r);
                }
            }
        }
        return new ArrayList<List<Integer>>(result);
    }
    private boolean helper(int start, int end, int[] nums, int target) {
        while (start <= end) {
            int middle = (start + end) / 2;
            if (nums[middle] == target) {
                return true;
            }
            if (nums[middle] > target) {
                end = middle - 1;
            } else {
                start = middle + 1;
            }
        }
        return false;
    }
}
```
