title: 'LeetCode: Path Sum'
date: 2015-06-24 00:03:22
tags:
 - LeetCode
---
<hr/>    

```java

/**
 * Created by hzhou on 4/22/15. codeashobby@gmail.com
 */
public class PathSum {
	public boolean hasPathSum(TreeNode root, int sum) {
		if (root == null) {
			return false;
		}
		return helper(root, sum);
	}
	private boolean helper(TreeNode root, int sum) {
		if (root != null && root.left == null && root.right == null) {
			return sum == root.val;
		}
		boolean left = false;
		boolean right = false;
		assert root != null;
		if (root.left != null) {
			left = helper(root.left, sum - root.val);
		}
		if (root.right != null) {
			right = helper(root.right, sum - root.val);
		}
		return left || right;
	}
}
```
