title: 'LeetCode: Convert BST to Greater Tree'
date: 2017-08-30 20:03:22
---

Given a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus sum of all keys greater than the original key in BST.

### Example:
```
Input: The root of a Binary Search Tree like this:
              5
            /   \
           2     13

Output: The root of a Greater Tree like this:
             18
            /   \
          20     13
```

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
public class Solution {
    public TreeNode convertBST(TreeNode root) {
        int[] sum = new int[]{0};
        helper(root, sum);
        return root;
    }

    private void helper(TreeNode node, int[] sum) {
        if (node == null) {
            return;
        }

        helper(node.right, sum);
        node.val += sum[0];
        sum[0] = node.val;
        helper(node.left, sum);
    }
}
```
