title: 'LeetCode: Jump Game'
date: 2015-06-24 00:03:22
tags:
 - LeetCode
---
<hr/>    

```java

/**
 * Description: Given an array of non-negative integers, you are initially positioned at the first index of the array.
 * <p/>
 * Each element in the array represents your maximum jump length at that position.
 * <p/>
 * Determine if you are able to reach the last index.
 * <p/>
 * For example: A = [2,3,1,1,4], return true.
 * <p/>
 * A = [3,2,1,0,4], return false.
 *
 * @author hzhou
 */
public class JumpGame {
	public boolean canJump(int[] nums) {
		if (nums == null || nums.length < 2) {
			return true;
		}
		int max = nums[0];
		for (int i = 0; i < nums.length; i++) {
			if (max <= i && nums[i] == 0) {
				return false;
			}
			max = Math.max(max, i + nums[i]);
			if (max >= nums.length - 1) {
				return true;
			}
		}
		return true;
	}
}
```
