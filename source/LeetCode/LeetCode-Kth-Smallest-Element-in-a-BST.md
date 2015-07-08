title: 'LeetCode: Kth Smallest Element in a BST'
date: 2015-07-07 20:53:22
---
Given a binary search tree, write a function `kthSmallest` to find the kth smallest element in it.

### Note:
You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

```java
public class KthSmallestElementInABST {
    private int counter = 0;
    private int result = -1;
    public int kthSmallest(TreeNode root, int k) {
        counter = 0;
        helper(root,k);
        return result;
    }

    private void helper(TreeNode root, int k) {

        if(root.left != null) helper(root.left, k);
        counter++;
        if(k == counter) {
            this.result = root.val;
            return;
        }

        if(root.right != null) helper(root.right, k);

    }
}
```
