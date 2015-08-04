title: 'LeetCode: 3Sum Closest'
date: 2015-06-25 20:03:22
---

```java
public class ThreeSumClosest {
    public int threeSumClosest(int[] nums, int target) {
        if (nums == null || nums.length < 3) {
            return 0;
        }
        Arrays.sort(nums);
        int l = nums.length;
        int min = nums[0] + nums[1] + nums[2];
        for (int i = 0; i < l - 2; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) {
                continue;
            }
            for (int j = i + 1; j < l - 1; j++) {
                if (j > i + 1 && nums[j] == nums[j - 1]) {
                    continue;
                }
                for (int k = j + 1; k < l; k++) {
                    int sum = nums[i] + nums[j] + nums[k];
                    if (Math.abs(min - target) > Math.abs(sum - target)) {
                        min = sum;
                    }
                }
            }
        }
        return min;
    }
}
```
