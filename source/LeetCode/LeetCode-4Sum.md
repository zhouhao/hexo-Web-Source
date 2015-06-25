title: 'LeetCode: 4Sum'
date: 2015-06-25 20:03:22
tags:
 - LeetCode
---
<hr/>    

```java

/**
 * Description
 *
 * @author hzhou
 */
public class FourSum {
	public List<List<Integer>> fourSum(int[] nums, int target) {
		List<List<Integer>> result = new ArrayList<List<Integer>>();
		if (nums == null || nums.length < 4) {
			return result;
		}
		Arrays.sort(nums);
		int l = nums.length;
		for (int i = 0; i < l - 3; i++) {
			if (i > 0 && nums[i] == nums[i - 1]) {
				continue;
			}
			for (int j = i + 1; j < l - 2; j++) {
				if (j > i + 1 && nums[j] == nums[j - 1]) {
					continue;
				}
				for (int k = j + 1; k < l - 1; k++) {
					if (k > j + 1 && nums[k] == nums[k - 1]) {
						continue;
					}
					int left = target - nums[i] - nums[j] - nums[k];
					if (helper(k + 1, l - 1, nums, left)) {
						List<Integer> r = new ArrayList<Integer>();
						r.add(nums[i]);
						r.add(nums[j]);
						r.add(nums[k]);
						r.add(left);
						result.add(r);
					}
				}
			}
		}
		return result;
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
	@Test
	public void test() {
		int[] nums = new int[]{0, 0, 0, 0};
		fourSum(nums, 0);
	}
}
```
