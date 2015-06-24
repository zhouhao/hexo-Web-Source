title: 'LeetCode: Binary Tree Upside Down'
date: 2015-06-24 00:03:22
tags:
 - LeetCode
---
<hr/>    

```java

/**
 * Created by hzhou on 4/28/15. codeashobby@gmail.com
 */
public class BinaryTreeUpsideDown {
	//TODO
	public TreeNode UpsideDownBinaryTree(TreeNode root) {
		TreeNode node = root, parent = null, right = null;
		while (node != null) {
			TreeNode left = node.left;
			node.left = right;
			right = node.right;
			node.right = parent;
			parent = node;
			node = left;
		}
		return parent;
	}
}
```
