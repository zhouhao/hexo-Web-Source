title: 'LeetCode: Minimum Depth of Binary Tree'
date: 2015-06-24 00:03:22
---
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

```java
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

  // Solution 2
  public int minDepthSolution2(TreeNode root) {
        if(root == null) {
            return 0;
        }

        int nextLevelCount = 1;
        int counter = 0;
        // init value for depth is 1
        int depth = 1;
        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);

        while(!queue.isEmpty()) {
            TreeNode node = queue.poll();
            nextLevelCount--;

            if(node.left == null && node.right == null) {
                return depth;
            }

            if(node.left != null) {
                queue.add(node.left);
                counter++;
            }

            if(node.right != null) {
                queue.add(node.right);
                counter++;
            }

            if(nextLevelCount == 0) {
                nextLevelCount = counter;
                counter = 0;
                depth++;
            }
        }

        return 0;
    }
}
```
