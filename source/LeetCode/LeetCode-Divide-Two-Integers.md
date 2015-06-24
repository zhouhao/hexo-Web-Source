title: 'LeetCode: Divide Two Integers'
date: 2015-06-24 00:03:22
tags:
 - LeetCode
---
<hr/>    

```java

/**
 * Description:
 *
 * @author hzhou
 */
public class DivideTwoIntegers {
	public int divide(int dividend, int divisor) {
		if (divisor == 0 || (dividend == Integer.MIN_VALUE && divisor == -1)) {
			return Integer.MAX_VALUE;
		}
		if (divisor == 1) {
			return dividend;
		}
		if (dividend == 0) {
			return 0;
		}
		long l = Math.abs((long) dividend);
		long r = Math.abs((long) divisor);
		int result = 0;
		while (l >= r) {
			int count = 0;
			while (l >= (r << count)) {
				count++;
			}
			result += 1 << (count - 1);
			l -= r << (count - 1);
		}
		if (l == Integer.MAX_VALUE + 1L && divisor == -1) {
			return Integer.MAX_VALUE;
		}
		return (dividend > 0 ^ divisor > 0) ? result * -1 : result;
	}
	@Test
	public void test() {
		System.out.println(divide(-2147483648, -1));
	}
}
```
