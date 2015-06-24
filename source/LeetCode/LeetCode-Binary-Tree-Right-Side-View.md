title: 'LeetCode: Binary Tree Right Side View'
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
public class BinaryTreeRightSideView {
	public List<Integer> rightSideView(TreeNode root) {
		List<Integer> result = new ArrayList<Integer>();
		Deque<TreeNode> queue = new LinkedList<TreeNode>();
		if (root == null) {
			return result;
		}
		queue.offer(root);
		int p = 1;
		int level = 0;
		while (!queue.isEmpty()) {
			TreeNode node = queue.poll();
			p--;
			if (node.left != null) {
				queue.offer(node.left);
				level++;
			}
			if (node.right != null) {
				queue.offer(node.right);
				level++;
			}
			if (p == 0) {
				result.add(node.val);
				p = level;
				level = 0;
			}
		}
		return result;
	}
}
```
