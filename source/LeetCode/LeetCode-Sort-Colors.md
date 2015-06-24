title: 'LeetCode: Sort Colors'
date: 2015-06-24 00:03:22
tags:
 - LeetCode
---
<hr/>    

```java

/**
 * Description: Given an array with n objects colored red, white or blue, sort them so that objects of the same color
 * are adjacent, with the colors in the order red, white and blue.
 * <p/>
 * Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
 *
 * @author hzhou
 */
public class SortColors {
	public void sortColors(int[] nums) {
		if (nums == null || nums.length == 0) {
			return;
		}
		int c0, c1, c2;
		c0 = c1 = c2 = 0;
		for (int i : nums) {
			switch (i) {
				case 0:
					c0++;
					break;
				case 1:
					c1++;
					break;
				case 2:
					c2++;
					break;
			}
		}
		for (int i = 0; i < nums.length; i++) {
			if (i < c0) {
				nums[i] = 0;
			} else if (i < c0 + c1) {
				nums[i] = 1;
			} else {
				nums[i] = 2;
			}
		}
	}
	@Test
	public void test() {
		int[] nums = new int[]{0, 1};
	}
}
```
