title: 'LeetCode: Maximum Depth of Binary Tree'
date: 2015-06-24 00:03:22
tags:
 - LeetCode
---
<hr/>    

```java

/**
 * Created by hzhou on 4/27/15. codeashobby@gmail.com
 */
public class MaximumDepthOfBinaryTree {
	public int maxDepth(TreeNode root) {
		return helper(root);
	}
	private int helper(TreeNode root) {
		if (root == null) {
			return 0;
		} else {
			return Math.max(helper(root.left), helper(root.right)) + 1;
		}
	}
}
```
