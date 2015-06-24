title: 'LeetCode: Single Number'
date: 2015-06-24 00:03:22
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
public class SingleNumber {
	public int singleNumber(int[] nums) {
		assert nums.length > 0;
		int result = nums[0];
		for (int i = 1; i < nums.length; i++) {
			result ^= nums[i];
		}
		return result;
	}
}
```
