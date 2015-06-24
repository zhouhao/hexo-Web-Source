title: 'LeetCode: Two Sum'
date: 2015-06-24 00:03:22
tags:
 - LeetCode
---
<hr/>    

```java

/**
 * Created by hzhou on 4/23/15. codeashobby@gmail.com
 */
public class TwoSum {
	public int[] twoSum(int[] nums, int target) {
		assert nums.length > 0;
		Map<Integer, Integer> map = new HashMap<Integer, Integer>();
		int[] result = new int[2];
		for (int i = 0; i < nums.length; i++) {
			if (map.containsKey(nums[i]) && 2 * nums[i] == target) {
				result[0] = map.get(nums[i]) + 1;
				result[1] = i + 1;
				return result;
			} else {
				map.put(nums[i], i);
			}
		}
		for (int i = 0; i < nums.length; i++) {
			int left = target - nums[i];
			if (map.containsKey(left) && i != map.get(left)) {
				result[0] = i + 1;
				result[1] = map.get(left) + 1;
				break;
			}
		}
		return result;
	}
}
```
