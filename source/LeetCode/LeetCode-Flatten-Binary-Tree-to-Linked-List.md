title: 'LeetCode: Flatten Binary Tree to Linked List'
date: 2015-06-24 00:03:22
tags:
 - LeetCode
---
<hr/>    

```java

/**
 * Description
 *
 * @author hzhou
 */
public class FlattenBinaryTreeToLinkedList {
	public void flatten(TreeNode root) {
		if (root == null) {
			return;
		}
		Stack<TreeNode> stack = new Stack<TreeNode>();
		TreeNode cursor = new TreeNode(0);
		stack.push(root);
		while (!stack.isEmpty()) {
			cursor.right = stack.pop();
			cursor.left = null;
			cursor = cursor.right;
			if (cursor.right != null) {
				stack.push(cursor.right);
			}
			if (cursor.left != null) {
				cursor.right = cursor.left;
				if (cursor.left.right != null) {
					stack.push(cursor.left.right);
				}
				if (cursor.left.left != null) {
					stack.push(cursor.left.left);
				}
				cursor.left = null;
				cursor = cursor.right;
			}
		}
	}
	@Test
	public void test() {
		TreeNode root = new TreeNode(1);
		root.left = new TreeNode(2);
		/*root.right = new TreeNode(5);
		root.left.left = new TreeNode(3);
		root.left.right = new TreeNode(4);
		root.right.right = new TreeNode(6);
		*/
		flatten(root);
	}
}
```
