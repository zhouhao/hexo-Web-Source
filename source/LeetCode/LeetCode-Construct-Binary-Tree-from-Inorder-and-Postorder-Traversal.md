title: 'LeetCode: Construct Binary Tree from Inorder and Postorder Traversal'
date: 2015-06-24 00:03:22
tags:
 - LeetCode
---
<hr/>    

```java

/**
 * Description: Given inorder and postorder traversal of a tree, construct the binary tree.
 *
 * @author hzhou
 */
public class ConstructBinaryTreeFromInorderAndPostorderTraversal {
	public TreeNode buildTree(int[] inorder, int[] postorder) {
		if (inorder == null || inorder.length == 0 || postorder == null || postorder.length == 0) {
			return null;
		}
		return helper(inorder,0,inorder.length-1, postorder,0,postorder.length-1);
	}
	private TreeNode helper(int[] inorder, int s1, int e1, int[] postorder, int s2, int e2) {
		if (s1 > e1 || s2 > e2) {
			return null;
		}
		TreeNode root = new TreeNode(postorder[e2]);
		int k = 0;
		for (int i = 0; i < inorder.length; i++) {
			if (inorder[i] == root.val) {
				k = i;
				break;
			}
		}
		root.left = helper(inorder, s1, k - 1, postorder, s2, s2 + k - s1 - 1);
		root.right = helper(inorder, k + 1, e1, postorder, s2 + k - s1, e2 - 1);
		return root;
	}
}
```
