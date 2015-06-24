title: 'LeetCode: Minimum Depth of Binary Tree'
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
public class MinimumDepthOfBinaryTree {
	public int minDepth(TreeNode root) {
		if (root == null) {
			return 0;
		}
		return helper(root, 1);
	}
	private int helper(TreeNode node, int length) {
		if (node == null) {
			return length - 1;
		}
		if (node.left == null && node.right == null) {
			return length;
		} else {
			int l = Integer.MAX_VALUE;
			int r = Integer.MAX_VALUE;
			if (node.left != null) {
				l = helper(node.left, length + 1);
			}
			if (node.right != null) {
				r = helper(node.right, length + 1);
			}
			return Math.min(l, r);
		}
	}
}
```
