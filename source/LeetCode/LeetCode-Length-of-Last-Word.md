title: 'LeetCode: Length of Last Word'
date: 2015-06-24 00:03:22
tags:
 - LeetCode
---
<hr/>    

```java

/**
 * Created by hzhou on 4/22/15. codeashobby@gmail.com
 */
public class LengthOfLastWord {
	public int lengthOfLastWord(String s) {
		if (s == null || s.trim().isEmpty()) {
			return 0;
		}
		s = s.trim();
		String[] splits = s.split(" ");
		for (int i = splits.length - 1; i >= 0; i--) {
			if (!splits[i].equals(" ")) {
				return splits[i].length();
			}
		}
		return 0;
	}
}
```
