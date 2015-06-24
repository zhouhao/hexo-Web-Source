title: 'LeetCode: Valid Palindrome'
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
public class ValidPalindrome {
	public boolean isPalindrome(String s) {
		if (s == null || s.trim().isEmpty()) {
			return true;
		}
		s = s.trim().toLowerCase();
		int i = 0;
		int j = s.length() - 1;
		while (i < j) {
			while (i < s.length() && !isValid(s.charAt(i))) {
				i++;
			}
			while (j >= 0 && !isValid(s.charAt(j))) {
				j--;
			}
			if (i < s.length() && j >= 0 && s.charAt(i) != s.charAt(j)) {
				return false;
			} else {
				i++;
				j--;
			}
		}
		return true;
	}
	private boolean isValid(char c) {
		boolean isNumber = c >= '0' && c <= '9';
		boolean isLetter = c >= 'a' && c <= 'z';
		return isNumber || isLetter;
	}
}
```
