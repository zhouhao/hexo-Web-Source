title: 'LeetCode: Wildcard Matching'
date: 2015-06-24 00:03:22
tags:
 - LeetCode
---
<hr/>    

```java

import static junit.framework.Assert.assertTrue;
/**
 * Description:
 * <pre>
 * '?' Matches any single character.
 * '*' Matches any sequence of characters (including the empty sequence).
 *
 * The matching should cover the entire input string (not partial).
 *
 * The function prototype should be:
 * bool isMatch(const char *s, const char *p)
 *
 * Some examples:
 * isMatch("aa","a") â†? false
 * isMatch("aa","aa") â†? true
 * isMatch("aaa","aa") â†? false
 * isMatch("aa", "*") â†? true
 * isMatch("aa", "a*") â†? true
 * isMatch("ab", "?*") â†? true
 * isMatch("aab", "c*a*b") â†? false
 * </pre>
 *
 * @author hzhou
 */
public class WildcardMatching {
	public boolean isMatch(String s, String p) {
		if (p == null || p.isEmpty()) {
			return s == null || s.isEmpty();
		}
		if (s == null || s.isEmpty()) {
			int star = trimStartStar(p, 0);
			return star == p.length();
		}
		int startS = 0;
		int startP = 0;
		int preS, preP;
		preS = preP = 0;
		boolean hasStart = false;
		while (startS < s.length()) {
			if (startP == p.length()) {
				if (hasStart) {
					startP = preP;
					++preS;
					startS = preS;
				} else {
					return false;
				}
			}
			char cs = s.charAt(startS);
			char cp = p.charAt(startP);
			if (cs != cp) {
				if (cp == '?') {
					startP++;
					startS++;
				} else if (cp == '*') {
					hasStart = true;
					startP = trimStartStar(p, startP);
					if (startP == p.length()) {
						return true;
					}
					preS = startS;
					preP = startP;
				} else if (hasStart) {
					preS++;
					startS = preS;
					startP = preP;
				} else {
					return false;
				}
			} else {
				startP++;
				startS++;
			}
		}
		return startS == s.length() && trimStartStar(p, startP) == p.length();
	}
	private int trimStartStar(String s, int start) {
		while (start < s.length() && s.charAt(start) == '*') {
			start++;
		}
		return start;
	}
	@Test
	public void test() {
		assertTrue(isMatch("ab", "?*"));
		assertTrue(isMatch("ab", "ab"));
		assertTrue(isMatch("ab", "*"));
		assertTrue(isMatch("ab", "*?"));
		assertTrue(!isMatch("aab", "c*a*b"));
	}
}
```
