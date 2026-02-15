title: 'LeetCode: Binary Tree Postorder Traversal'
date: 2015-06-24 00:03:22

---
```java
public class BinaryTreePostorderTraversal {
    public List<Integer> postorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<Integer>();
        if (root == null) {
            return result;
        }
        helper(root, result);
        return result;
    }
    private void helper(TreeNode root, List<Integer> result) {
        if (root != null && root.left == null && root.right == null) {
            result.add(root.val);
        } else {
            if (root.left != null) {
                helper(root.left, result);
            }
            if (root.right != null) {
                helper(root.right, result);
            }
            result.add(root.val);
        }
    }
}
```
