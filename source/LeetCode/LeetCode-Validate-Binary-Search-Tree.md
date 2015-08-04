title: 'LeetCode: Validate Binary Search Tree'
date: 2015-06-24 00:03:22
---

```java

import static org.junit.Assert.assertTrue;
/**
 * Description: Given a binary tree, determine if it is a valid binary search tree (BST).
 * <p/>
 * Assume a BST is defined as follows:
 * <p/>
 * The left subtree of a node contains only nodes with keys less than the node's key. The right subtree of a node
 * contains only nodes with keys greater than the node's key. Both the left and right subtrees must also be binary
 * search trees.
 *
 * @author hzhou
 */
public class ValidateBinarySearchTree {
    public boolean isValidBST(TreeNode root) {
        if (root == null || (root.left == null && root.right == null)) {
            return true;
        }
        return helper(root, Long.MIN_VALUE, Long.MAX_VALUE);
    }
    private boolean helper(TreeNode root, long min, long max) {
        if (root == null) {
            return true;
        }
        if (root.val <= min || root.val >= max) {
            return false;
        }
        return helper(root.right, root.val, max) && helper(root.left, min, root.val);
    }
    @Test
    public void test() {
        TreeNode root = new TreeNode(-2147483648);
        root.right = new TreeNode(2147483647);
        assertTrue(isValidBST(root));
        root = new TreeNode(1);
        root.left = new TreeNode(1);
        assertTrue(!isValidBST(root));
        root = new TreeNode(0);
        root.left = new TreeNode(-1);
        assertTrue(isValidBST(root));
    }
}
```
