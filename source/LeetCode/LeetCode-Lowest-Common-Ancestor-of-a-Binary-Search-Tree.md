title: 'LeetCode: Lowest Common Ancestor of a Binary Search Tree'
date: 2015-08-10 09:42:56
---
Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the definition of LCA on Wikipedia: "The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself)."

```
        _______6______
       /              \
    ___2__          ___8__
   /      \        /      \
   0      _4       7       9
         /  \
         3   5
```

For example, the lowest common ancestor (LCA) of nodes `2` and `8` is `6`. Another example is LCA of nodes `2` and `4` is `2`, since a node can be a descendant of itself according to the LCA definition.

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