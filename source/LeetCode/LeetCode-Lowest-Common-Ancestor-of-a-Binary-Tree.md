title: 'LeetCode: Lowest Common Ancestor of a Binary Tree'
date: 2015-08-10 09:42:43
---
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: "The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself)."

```
        _______3______
       /              \
    ___5__          ___1__
   /      \        /      \
   6      _2       0       8
         /  \
         7   4
```

For example, the lowest common ancestor (LCA) of nodes `5` and `1` is `3`. Another example is LCA of nodes `5` and `4` is `5`, since a node can be a descendant of itself according to the LCA definition.

```java
public class Solution {
       public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        return helper(root, p, q).node;
    }

    private Item helper(TreeNode root, TreeNode p, TreeNode q) {
        if (root == null) {
            return new Item(0, null);
        }

        Item left = helper(root.left, p, q);
        if (left.count == 2) {
            return left;
        }

        Item right = helper(root.right, p, q);
        if (right.count == 2) {
            return right;
        }

        int total = left.count + right.count;

        if (root == p || root == q) {
            total++;
        }

        return new Item(total, root);
    }

    class Item {
        int count;
        TreeNode node;

        public Item(int count, TreeNode node) {
            this.count = count;
            this.node = node;
        }
    }
}
```