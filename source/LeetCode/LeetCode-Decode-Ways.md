title: 'LeetCode: Decode Ways'
date: 2015-06-24 00:03:22
tags:
 - LeetCode
---
<hr/>    

```java

import static org.junit.Assert.assertSame;
/**
 * Created by hzhou on 5/18/15. codeashobby@gmail.com
 * <p/>
 * A message containing letters from A-Z is being encoded to numbers using the following mapping:
 * <pre>
 * 'A' -> 1
 * 'B' -> 2
 * ...
 * 'Z' -> 26
 * </pre>
 * Given an encoded message containing digits, determine the total number of ways to decode it.
 * <p/>
 * For example, Given encoded message "12", it could be decoded as "AB" (1 2) or "L" (12).
 * <p/>
 * The number of ways decoding "12" is 2.
 * <p/>
 * http://www.cnblogs.com/springfor/p/3896162.html
 */
public class DecodeWays {
	public int numDecodings(String s) {
		if (s == null || s.isEmpty() || s.equals("0")) {
			return 0;
		}
		int[] map = new int[s.length() + 1];
		map[0] = 1;
		map[1] = isValid(s.substring(0, 1)) ? 1 : 0;
		for (int i = 2; i <= s.length(); i++) {
			if (isValid(s.substring(i - 1, i))) {
				map[i] += map[i - 1];
			}
			if (isValid(s.substring(i - 2, i))) {
				map[i] += map[i - 2];
			}
		}
		return map[s.length()];
	}
	private boolean isValid(String s) {
		if (s == null || s.isEmpty() || s.charAt(0) == '0') {
			return false;
		}
		int value = Integer.valueOf(s);
		return value > 0 && value < 27;
	}
	@Test
	public void test() {
		assertSame(2, numDecodings("12"));
	}
}
```
