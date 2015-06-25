title: 'LeetCode: Implement strStr()'
date: 2015-06-25 20:03:22
tags:
 - LeetCode
---
<hr/>    

```java

/**
 * Created by hzhou on 5/1/15. codeashobby@gmail.com
 */
public class StrStr {
	public int strStr(String haystack, String needle) {
		if ((haystack == null && needle != null) || needle.length() > haystack.length()) {
			return -1;
		}
		if (haystack == needle || haystack.equals(needle) || needle == null || needle.isEmpty()) {
			return 0;
		}
		for (int i = 0; i < haystack.length(); i++) {
			char c = haystack.charAt(i);
			if (haystack.length() - i + 1 < needle.length()) {
				return -1;
			}
			if (c == needle.charAt(0)) {
				int j = 0;
				int k = i;
				for (; j < needle.length() && k < haystack.length(); j++, k++) {
					if (needle.charAt(j) != haystack.charAt(k)) {
						break;
					}
				}
				if (j == needle.length()) {
					return (k - j);
				}
			}
		}
		return -1;
	}
}
```
