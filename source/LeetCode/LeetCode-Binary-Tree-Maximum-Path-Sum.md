title: 'LeetCode: Binary Tree Maximum Path Sum'
date: 2015-06-24 00:03:22
---
```java
public class BinaryTreeMaximumPathSum {
    public int maxPathSum(TreeNode root) {
        if (root == null) {
            return 0;
        }
        int[] max = new int[1];
        max[0] = Integer.MIN_VALUE;
        helper(max, root);
        return max[0];
    }
    private int helper(int[] max, TreeNode root) {
        if (root == null) {
            return 0;
        }
        int left = helper(max, root.left);
        int right = helper(max, root.right);
        int crt = Math.max(root.val, Math.max(root.val + left, root.val + right));
        max[0] = Math.max(max[0], Math.max(crt, root.val + left + right));
        return crt;
    }
}
```
