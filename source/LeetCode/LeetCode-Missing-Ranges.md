title: 'LeetCode: Missing Ranges'
date: 2015-06-24 00:03:22
tags:
 - LeetCode
---
<hr/>    

```java

/**
 * Description: Given a sorted integer array where the range of elements are [lower, upper] inclusive, return its
 * missing ranges.
 * <p/>
 * For example, given [0, 1, 3, 50, 75], lower = 0 and upper = 99, return ["2", "4->49", "51->74", "76->99"].
 * <p/>
 * http://www.danielbit.com/blog/puzzle/leetcode/leetcode-missing-ranges
 *
 * @author hzhou
 */
public class MissingRanges {
	public List<String> findMissingRanges(int[] nums, int lower, int upper) {
		List<String> result = new ArrayList<String>();
		int start = lower - 1;
		for (int i = 0; i <= nums.length; i++) {
			int end = (i == nums.length) ? upper + 1 : nums[i];
			if (start + 2 <= end) {
				result.add(getItem(start + 1, end - 1));
			}
			start = end;
		}
		return result;
	}
	private String getItem(int start, int end) {
		return (start == end) ? String.valueOf(start) : start + "->" + end;
	}
	@Test
	public void test() {
		int[] nums = new int[]{0, 1, 3, 50, 75};
		List<String> result = findMissingRanges(nums, 0, 99);
		for (String s : result) {
			System.out.println(s);
		}
	}
}
```
