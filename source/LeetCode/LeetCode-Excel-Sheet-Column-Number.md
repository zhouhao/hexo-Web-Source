title: 'LeetCode: Excel Sheet Column Number'
date: 2015-06-24 00:03:22
tags:
 - LeetCode
---
<hr/>    

```java

/**
 * Created by hzhou on 4/23/15. codeashobby@gmail.com
 */
public class ExcelSheetColumnNumber {
	public int titleToNumber(String s) {
		assert (s != null && !s.isEmpty());
		char[] chars = s.toCharArray();
		int result = 0;
		for (char aChar : chars) {
			result = result * 26 + getValue(aChar);
		}
		return result;
	}
	private int getValue(char c) {
		return c - 'A' + 1;
	}
}
```
