title: 'LeetCode: Symmetric Tree'
date: 2015-06-24 00:03:22
---
 
```java

/**
 * Description:
 *
 * @author hzhou
 */
public class SymmetricTree {
    public boolean isSymmetric(TreeNode root) {
        if (root == null || (root.left == null && root.right == null)) {
            return true;
        }
        return helper(root.left, root.right);
    }
    private boolean helper(TreeNode o1, TreeNode o2) {
        if (o1 == null && o2 == null) {
            return true;
        }
        if ((o1 == null) || ((o2 == null))) {
            return false;
        }
        if (o1.val != o2.val) {
            return false;
        } else {
            return helper(o1.left, o2.right) && helper(o1.right, o2.left);
        }
    }
}
```
