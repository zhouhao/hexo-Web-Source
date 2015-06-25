title: 'LeetCode: Sqrt(x)'
date: 2015-06-25 20:03:22
tags:
 - LeetCode
---
<hr/>    

```java

/**
 * Description: implement int sqrt(int x).
 * <p/>
 * Compute and return the square root of x.
 *
 * @author hzhou
 */
public class Sqrtx {
	public int mySqrt(int x) {
		if (x == 0) {
			return 0;
		}
		double last = 0;
		double res = 1;
		while (res != last) {
			last = res;
			res = (res + x / res) / 2;
		}
		return (int) res;
	}
}
```
