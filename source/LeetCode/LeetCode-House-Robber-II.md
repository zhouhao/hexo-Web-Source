title: 'LeetCode: House Robber II'
date: 2015-06-23 21:37:53
tags:
---

```java
public class HouseRobberII {
    public int rob(int[] nums) {
        if (nums == null || nums.length == 0) {
            return 0;
        }

        if (nums.length == 1) {
            return nums[0];
        }

        int[] map = new int[nums.length];
        map[0] = 0;
        map[1] = nums[0];
        for (int i = 2; i < nums.length; i++) {
            map[i] = Math.max(map[i - 1], map[i - 2] + nums[i - 1]);
        }

        int[] map2 = new int[nums.length];
        map2[0] = 0;
        map2[1] = nums[1];
        for (int i = 2; i < nums.length; i++) {
            map2[i] = Math.max(map2[i - 1], map2[i - 2] + nums[i]);
        }

        return Math.max(map[nums.length - 1], map2[nums.length - 1]);
    }
}
```