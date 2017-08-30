title: 'LeetCode: Binary Tree Tilt'
date: 2017-08-30 20:03:22
---

Given a binary tree, return the tilt of the whole tree.

The tilt of a tree node is defined as the absolute difference between the sum of all left subtree node values and the sum of all right subtree node values. Null node has tilt 0.

The tilt of the whole tree is defined as the sum of all nodes' tilt.

### Example:
```
Input:
         1
       /   \
      2     3
Output: 1
Explanation:
Tilt of node 2 : 0
Tilt of node 3 : 0
Tilt of node 1 : |2-3| = 1
Tilt of binary tree : 0 + 0 + 1 = 1
```

##### Note:
1. The sum of node values in any subtree won't exceed the range of 32-bit integer.
2. All the tilt values won't exceed the range of 32-bit integer.

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
    public int findTilt(TreeNode root) {
         int[] result = new int[]{0};
        helper(root, result);
        return result[0];
    }

    private int helper(TreeNode node, int[] result) {
        if (node == null) return 0;
        int left = helper(node.left, result);
        int right = helper(node.right, result);
        result[0] += Math.abs(left - right);
        return left + right + node.val;
    }
}
```
