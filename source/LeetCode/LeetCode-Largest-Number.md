title: 'LeetCode: Largest Number'
date: 2015-06-24 00:03:22
tags:
 - LeetCode
---
<hr/>    

```java

/**
 * Created by hzhou on 2015/5/13.
 * <p/>
 * Given a list of non negative integers, arrange them such that they form the largest number.
 * <p/>
 * For example, given [3, 30, 34, 5, 9], the largest formed number is 9534330.
 * <p/>
 * Note: The result may be very large, so you need to return a string instead of an integer.
 * <p/>
 * http://www.programcreek.com/2014/02/leetcode-largest-number-java/
 */
public class LargestNumber {
	public String largestNumber(int[] nums) {
		if (nums == null || nums.length == 0) {
			return "";
		}
		String[] strings = new String[nums.length];
		for (int i = 0; i < nums.length; i++) {
			strings[i] = String.valueOf(nums[i]);
		}
		Arrays.sort(strings, new Comparator<String>() {
			public int compare(String o1, String o2) {
				String s1 = o1 + o2;
				String s2 = o2 + o1;
				return -1 * s1.compareTo(s2);
			}
		});
		StringBuilder sb = new StringBuilder();
		for (String s : strings) {
			sb.append(s);
		}
		String result = sb.toString();
		int i = 0;
		while (i < result.length() && result.charAt(i) == '0') {
			i++;
		}
		return i == result.length() ? "0" : result.substring(i, result.length());
	}
}
```
