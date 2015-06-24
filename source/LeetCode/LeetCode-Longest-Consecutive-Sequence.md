title: 'LeetCode: Longest Consecutive Sequence'
date: 2015-06-24 00:03:22
tags:
 - LeetCode
---
<hr/>    

```java

import static org.junit.Assert.assertSame;
/**
 * Description: Given an unsorted array of integers, find the length of the longest consecutive elements sequence.
 * <p/>
 * For example, Given [100, 4, 200, 1, 3, 2], The longest consecutive elements sequence is [1, 2, 3, 4]. Return its
 * length: 4.
 * <p/>
 * Your algorithm should run in O(n) complexity.
 *
 * @author hzhou
 */
public class LongestConsecutiveSequence {
	public int longestConsecutive(int[] nums) {
		if (nums == null || nums.length == 0) {
			return 0;
		}
		if (nums.length == 1) {
			return 1;
		}
		Set<Integer> set = new HashSet<Integer>();
		for (int i : nums) {
			set.add(i);
		}
		int result = 0;
		for (int i : nums) {
			int l = i - 1;
			int r = i + 1;
			int count = 1;
			while (set.contains(l)) {
				count++;
				set.remove(l);
				l--;
			}
			while (set.contains(r)) {
				count++;
				//set.remove(r);
				r++;
			}
			result = Math.max(result, count);
		}
		return result;
	}
	@Test
	public void test() {
		int[] nums = new int[]{2147483646, -2147483647, 0, 2, 2147483644, -2147483645, 2147483645};
		assertSame(3, longestConsecutive(nums));
	}
}
```
