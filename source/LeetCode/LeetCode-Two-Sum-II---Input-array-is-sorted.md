title: 'LeetCode: Two Sum II - Input array is sorted'
date: 2015-06-25 20:03:22
tags:
 - LeetCode
---
<hr/>    

```java

/**
 * Created by hzhou on 4/27/15. codeashobby@gmail.com
 */
public class TwoSumSortedArray {
	public int[] twoSum(int[] numbers, int target) {
		assert numbers.length > 0;
		int[] result = new int[2];
		for (int i = 0; i < numbers.length - 1; i++) {
			int left = target - numbers[i];
			int index = helper(i + 1, numbers.length - 1, left, numbers);
			if (index != -1) {
				result[0] = i + 1;
				result[1] = index + 1;
			}
		}
		return result;
	}
	public int helper(int start, int end, int target, int[] nums) {
		while (start <= end) {
			int middle = (start + end) / 2;
			if (nums[middle] == target) {
				return middle;
			}
			if (nums[middle] > target) {
				end = middle - 1;
			} else {
				start = middle + 1;
			}
		}
		return -1;
	}
}
```
