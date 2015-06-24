title: 'LeetCode: Palindrome Number'
date: 2015-06-24 00:03:22
tags:
 - LeetCode
---
<hr/>    

```java

import static junit.framework.TestCase.assertTrue;
/**
 * Description
 *
 * @author hzhou
 */
public class PalindromeNumber {
	public boolean isPalindrome(int x) {
		if (x == Integer.MIN_VALUE || x < 0) {
			return false;
		}
		//x = x>= 0 ? x:-x;
		if (x < 10) {
			return true;
		}
		int length = 0;
		int tmp = x;
		while (tmp >= 10) {
			length++;
			tmp /= 10;
		}
		for (int i = 0; i <= length / 2; i++) {
			int mod = (x / (int) (StrictMath.pow(10, i))) % 10;
			int t = (x / (int) (StrictMath.pow(10, length - i))) % 10;
			if (mod != t) {
				return false;
			}
		}
		return true;
	}
	@Test
	public void test() {
		assertTrue(!isPalindrome(10));
		assertTrue(isPalindrome(11));
		assertTrue(isPalindrome(101));
		assertTrue(isPalindrome(313));
		assertTrue(!isPalindrome(1000021));
		assertTrue(isPalindrome(1001));
	}
}
```
