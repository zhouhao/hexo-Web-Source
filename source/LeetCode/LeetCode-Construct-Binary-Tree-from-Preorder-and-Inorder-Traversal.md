title: 'LeetCode: Construct Binary Tree from Preorder and Inorder Traversal'
date: 2015-06-24 00:03:22
---

```java

/**
 * Description:
 *
 * @author hzhou
 */
public class ConstructBinaryTreeFromPreorderAndInorderTraversal {
    public TreeNode buildTree(int[] preorder, int[] inorder) {
        if (preorder == null || preorder.length == 0 || inorder == null || inorder.length == 0) {
            return null;
        }
        return helper(inorder, 0, inorder.length - 1, preorder, 0, preorder.length - 1);
    }
    private TreeNode helper(int[] inorder, int s1, int e1, int[] preorder, int s2, int e2) {
        if (s1 > e1 || s2 > e2) {
            return null;
        }
        TreeNode root = new TreeNode(preorder[s2]);
        int k = 0;
        for (int i = 0; i < inorder.length; i++) {
            if (inorder[i] == root.val) {
                k = i;
                break;
            }
        }
        root.left = helper(inorder, s1, k - 1, preorder, s2 + 1, s2 + k - s1);
        root.right = helper(inorder, k + 1, e1, preorder, s2 + k - s1 + 1, e2);
        return root;
    }
}
```
