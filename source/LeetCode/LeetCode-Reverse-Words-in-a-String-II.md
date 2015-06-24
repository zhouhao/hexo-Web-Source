title: 'LeetCode: Reverse Words in a String II'
date: 2015-06-24 00:03:22
tags:
 - LeetCode
---
<hr/>    

```java

/**
 * Description: Given an input string, reverse the string word by word. A word is defined as a sequence of non-space
 * characters.
 * <p/>
 * The input string does not contain leading or trailing spaces and the words are always separated by a single space.
 * <p/>
 * For example, Given s = "the sky is blue", return "blue is sky the".
 * <p/>
 * Could you do it in-place without allocating extra space?
 *
 * @author hzhou
 */
public class ReverseWordsInAStringII {
	public void reverseWords(char[] s) {
		if (s == null || s.length == 0) {
			return;
		}
		arrayReverse(s, 0, s.length - 1);
		for (int i = 0; i < s.length - 1; ) {
			int j = i + 1;
			while (j < s.length && s[j] != ' ') {
				j++;
			}
			arrayReverse(s, i, j - 1);
			i = j + 1;
		}
	}
	private void arrayReverse(char[] s, int start, int end) {
		if (s == null || s.length == 0 || start >= end) {
			return;
		}
		char tmp;
		for (int i = start; i <= (end + start) / 2; i++) {
			tmp = s[i];
			s[i] = s[end + start - i];
			s[end + start - i] = tmp;
		}
	}
	@Test
	public void test() {
		char[] s = new char[]{'a', 'f', ' ', 'g'};
		reverseWords(s);
	}
}
```
