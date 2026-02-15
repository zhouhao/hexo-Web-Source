title: 'LeetCode: Recover Binary Search Tree'
date: 2015-06-24 00:03:22
---
 
```java

/**
 * Description: Two elements of a binary search tree (BST) are swapped by mistake.
 * <p/>
 * Recover the tree without changing its structure.
 * <p/>
 * Note: A solution using O(n) space is pretty straight forward. Could you devise a constant space solution?
 *
 * @author hzhou
 *         <p/>
 *         http://www.cnblogs.com/yuzhangcmu/p/4208319.html
 */
// TODO: important
public class RecoverBinarySearchTree {
    public void recoverTree(TreeNode root) {
        if (root == null) {
            return;
        }
        TreeNode node1, node2, pre, cursor;
        node1 = node2 = pre = null;
        cursor = root;
        Stack<TreeNode> stack = new Stack<TreeNode>();
        while (true) {
            while (cursor != null) {
                stack.push(cursor);
                cursor = cursor.left;
            }
            if (stack.isEmpty()) {
                break;
            }
            TreeNode node = stack.pop();
            if (pre != null && pre.val > node.val) {
                if (node1 == null) {
                    node1 = pre;
                }
                node2 = node;
            }
            pre = node;
            cursor = node.right;
        }
        int tmp = node1.val;
        node1.val = node2.val;
        node2.val = tmp;
    }
}
```
