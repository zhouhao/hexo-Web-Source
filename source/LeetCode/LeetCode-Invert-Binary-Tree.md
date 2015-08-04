title: "Leetcode: Invert Binary Tree"
date: 2015-05-04 23:24:42
---
Invert a binary tree.
```
     4
   /   \
  2     7
 / \   / \
1   3 6   9
```

to

```
     4
   /   \
  7     2
 / \   / \
9   6 3   1
```
<!-- more -->

The basic idea is to use LinkedHashMap, as it has property - `capacity`.

```java
/**
 * Created by hzhou on 2015/6/13.
 * Email: i@hzhou.me
 */
public class InvertBinaryTree {
    public TreeNode invertTree(TreeNode root) {
        if (root == null) {
            return null;
        }

        Queue<TreeNode> queue = new LinkedList<TreeNode>();
        queue.add(root);

        while (!queue.isEmpty()) {
            TreeNode node = queue.poll();
            TreeNode left = node.left;
            TreeNode right = node.right;
            // exchange left with right
            node.left = right;
            node.right = left;
            if (left != null) {
                queue.add(left);
            }
            if (right != null) {
                queue.add(right);
            }
        }

        return root;
    }
}

```