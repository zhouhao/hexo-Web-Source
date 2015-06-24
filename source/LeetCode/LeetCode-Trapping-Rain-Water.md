title: 'LeetCode: Trapping Rain Water'
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
public class TrappingRainWater {
	public int trap(int[] height) {
		if (height == null || height.length < 3) {
			return 0;
		}
		int[] maxl = new int[height.length];
		int[] maxr = new int[height.length];
		int maxlv = height[0];
		int maxrv = height[height.length - 1];
		for (int i = 1; i < height.length - 1; i++) {
			maxl[i] = maxlv;
			maxlv = Math.max(maxlv, height[i]);
			int t = height.length - i - 1;
			maxr[t] = maxrv;
			maxrv = Math.max(maxrv, height[t]);
		}
		int result = 0;
		for (int i = 1; i < height.length - 1; i++) {
			int crt = Math.min(maxl[i], maxr[i]) - height[i];
			result += Math.max(0, crt);
		}
		return result;
	}
}
```
