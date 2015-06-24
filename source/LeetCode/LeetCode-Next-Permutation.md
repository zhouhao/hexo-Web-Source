title: 'LeetCode: Next Permutation'
date: 2015-06-24 00:03:22
tags:
 - LeetCode
---
<hr/>    

```java

/**
 * Description: Implement next permutation, which rearranges numbers into the lexicographically next greater permutation
 * of numbers.
 * <p/>
 * If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending
 * order).
 * <p/>
 * The replacement must be in-place, do not allocate extra memory.
 * <p/>
 * Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand
 * column.
 * <pre>
 * 1,2,3 â†? 1,3,2
 * 3,2,1 â†? 1,2,3
 * 1,1,5 â†? 1,5,1
 * </pre>
 *
 * @author hzhou
 */
public class NextPermutation {
	public void nextPermutation(int[] nums) {
		if (nums == null || nums.length < 2) {
			return;
		}
		int length = nums.length - 1;
		while (length > 0 && nums[length - 1] >= nums[length]) {
			length--;
		}
		if (length == 0) {
			Arrays.sort(nums);
			return;
		}
		if (length == nums.length - 1) {
			int tmp = nums[length];
			nums[length] = nums[length - 1];
			nums[length - 1] = tmp;
			return;
		}
		// find the larger one than nums[length-1]
		int target = length + 1;
		while (target < nums.length && nums[target] > nums[length - 1]) {
			target++;
		}
		target--;
		int tmp = nums[length - 1];
		nums[length - 1] = nums[target];
		nums[target] = tmp;
		Arrays.sort(nums, length, nums.length);
	}
	@Test
	public void test() {
		int[] nums = new int[]{5,1,1};
		nextPermutation(nums);
/*
		nums = new int[]{3, 2, 1};
		nextPermutation(nums);
		nums = new int[]{1, 1, 5};
		nextPermutation(nums);
*/
	}
}
```
