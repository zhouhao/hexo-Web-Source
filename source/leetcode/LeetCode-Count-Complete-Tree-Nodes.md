title: 'LeetCode: Count Complete Tree Nodes'
date: 2015-06-23 21:03:22
---
 Given a complete binary tree, count the number of nodes.    
In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.
```java
public class CountCompleteTreeNodes {

    public int countNodes(TreeNode root) {
        if (root == null) {
            return 0;
        }
        int l, r;
        l = r = 0;
        TreeNode cursor = root;
        while (cursor != null) {
            l++;
            cursor = cursor.left;
        }
        cursor = root;
        while (cursor != null) {
            r++;
            cursor = cursor.right;
        }

        if (l == r) {
            return (int) Math.pow(2, l) - 1;
        } else {
            return countNodes(root.left) + countNodes(root.right) + 1;
        }
    }

}
```