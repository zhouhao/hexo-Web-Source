title: 'LeetCode: Largest Rectangle in Histogram'
date: 2015-06-23 21:22:35
tags:
 - LeetCode
---
<hr/>   
Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.    

![](https://dn-myblog.qbox.me/img/leetcode/histogram.png)    
Above is a histogram where width of each bar is 1, given height = `[2,1,5,6,2,3]`.   

![](https://dn-myblog.qbox.me/img/leetcode/histogram_area.png)    
The largest rectangle is shown in the shaded area, which has area = 10 unit.   

For example,    
Given height = `[2,1,5,6,2,3]`,   
return `10`.

```java
public class LargestRectangleInHistogram {

	public int largestRectangleArea(int[] height) {
		if (height == null || height.length == 0) {
			return 0;
		}
		Stack<Integer> stack = new Stack<Integer>();
		int[] arr = Arrays.copyOf(height, height.length + 1);

		int crt = 0;
		int max = 0;
		while (crt < arr.length) {
			if (stack.isEmpty() || arr[crt] >= arr[stack.peek()]) {
				stack.push(crt++);
			} else {
				int i = stack.pop();
				max = Math.max(max, arr[i] * (stack.isEmpty() ? crt : crt - stack.peek() - 1));
			}
		}

		return max;
	}
}
```