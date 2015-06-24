title: 'LeetCode: Single Number II'
date: 2015-06-24 00:03:22
tags:
 - LeetCode
---
<hr/>    

```java

/**
 * Created by hzhou on 5/12/15. codeashobby@gmail.com
 * <p/>
 * http://www.programcreek.com/2014/03/leetcode-single-number-ii-java/
 * <p/>
 * http://www.acmerblog.com/leetcode-single-number-ii-5394.html
 */
public class SingleNumberII {
	public int singleNumber(int[] nums) {
		int ones = 0, twos = 0, threes = 0;
		for (int num : nums) {
			twos |= ones & num;
			ones ^= num;
			threes = ones & twos;
			ones &= ~threes;
			twos &= ~threes;
		}
		return ones;
	}
}
```
