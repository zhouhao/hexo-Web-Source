title: 'LeetCode: Majority Element'
date: 2015-06-24 00:03:22
---
 
```java

/**
 * Created by hzhou on 4/23/15. codeashobby@gmail.com
 */
public class MajorityElement {
    public int majorityElement(int[] nums) {
        assert nums.length > 0;
        Arrays.sort(nums);
        return nums[nums.length / 2];
    }
}
```
