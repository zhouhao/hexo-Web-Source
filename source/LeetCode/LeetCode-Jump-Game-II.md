title: 'LeetCode: Jump Game II'
date: 2015-06-24 00:03:22
---

```java

/**
 * Description: Given an array of non-negative integers, you are initially positioned at the first index of the array.
 * <p/>
 * Each element in the array represents your maximum jump length at that position.
 * <p/>
 * Your goal is to reach the last index in the minimum number of jumps.
 * <p/>
 * For example: Given array A = [2,3,1,1,4]
 * <p/>
 * The minimum number of jumps to reach the last index is 2. (Jump 1 step from index 0 to 1, then 3 steps to the last
 * index.)
 * <p/>
 * http://www.lifeincode.net/programming/leetcode-jump-game-and-jump-game-ii-java/
 *
 * @author hzhou
 */
public class JumpGameII {
    public int jump(int[] nums) {
        if (nums == null || nums.length <= 1) {
            return 0;
        }
        int jump = 1;
        int step = nums[0];
        int maxReach = nums[0];
        for (int i = 1; i < nums.length-1; i++) {
            maxReach = Math.max(maxReach, i + nums[i]);
            step--;
            if (step == 0) {
                step = maxReach - i;
                jump++;
            }
        }
        return jump;
    }
    @Test
    public void test() {
        int[] nums = new int[]{1,3,2};
        int result = jump(nums);
    }
}
```
