title: 'LeetCode: Bitwise AND of Numbers Range'
date: 2015-06-24 00:03:22
tags:
 - LeetCode
---
<hr/>    

```java

/**
 * Created by hzhou on 4/24/15. codeashobby@gmail.com
 */
public class BitwiseANDOfNumbersRange {
	public int rangeBitwiseAnd(int m, int n) {
		if (m > n || m < 0) {
			return -1;
		}
		int result = m;
		for (int i = m + 1; i <= n; i++) {
			result &= i;
		}
		return result;
	}
	public int rangeBitwiseAnd2(int m, int n) {
		if (m > n || m < 0) {
			return -1;
		}
		while (n > m) {
			n = n & (n - 1);
		}
		return n & m;
	}
}
```
