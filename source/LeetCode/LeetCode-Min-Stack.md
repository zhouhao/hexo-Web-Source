title: 'LeetCode: Min Stack'
date: 2015-06-24 00:03:22
tags:
 - LeetCode
---
<hr/>    

```java

/**
 * Created by hzhou on 4/24/15. codeashobby@gmail.com
 */
public class MinStack {
	private Stack<Integer> stack = new Stack<Integer>();
	private Stack<Integer> minStack = new Stack<Integer>();
	public void push(int x) {
		stack.push(x);
		if (minStack.isEmpty() || x <= minStack.peek()) {
			minStack.push(x);
		}
	}
	public void pop() {
		int val = stack.pop();
		if (val <= minStack.peek()) {
			minStack.pop();
		}
	}
	public int top() {
		return stack.peek();
	}
	public int getMin() {
		return minStack.peek();
	}
}
```
