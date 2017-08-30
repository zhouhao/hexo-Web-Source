title: 'LeetCode: Diameter of Binary Tree'
date: 2017-08-30 20:03:22
---

Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

### Example:
```
Given a binary tree
          1
         / \
        2   3
       / \     
      4   5    
Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].
```
Note: The length of path between two nodes is represented by the number of edges between them.

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
public class Solution {
    public int diameterOfBinaryTree(TreeNode root) {
        if (root == null) return 0;

        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);
        int result = 0;
        while (!queue.isEmpty()) {
            TreeNode node = queue.poll();
            result = Math.max(result, getMaxDepth(node.left) + getMaxDepth(node.right));
            if (node.left != null) queue.add(node.left);
            if (node.right != null) queue.add(node.right);
        }
        return result;
    }

    private int getMaxDepth(TreeNode node) {
        if (node == null) {
            return 0;
        }
        return Math.max(getMaxDepth(node.left), getMaxDepth(node.right)) + 1;
    }
}
```
