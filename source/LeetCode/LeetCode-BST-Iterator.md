title: 'LeetCode: BST Iterator'
date: 2015-06-24 00:03:22
tags:
 - LeetCode
---
<hr/>    

```java
public class BSTIterator {

	private Stack<TreeNode> stack;

	public BSTIterator(TreeNode root) {
		stack = new Stack<TreeNode>();
		while (root != null) {
			stack.push(root);
			root = root.left;
		}
	}

	/**
	 * @return whether we have a next smallest number
	 */
	public boolean hasNext() {
		return !stack.isEmpty();
	}

	/**
	 * @return the next smallest number
	 */
	public int next() {
		int result = Integer.MAX_VALUE;
		if (!stack.isEmpty()) {
			TreeNode node = stack.pop();
			result = node.val;
			if (node.right != null) {
				node = node.right;
				while (node != null) {
					stack.push(node);
					node = node.left;
				}
			}
		}

		return result;
	}
}
```
