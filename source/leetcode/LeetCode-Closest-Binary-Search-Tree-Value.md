title: 'LeetCode: Closest Binary Search Tree Value'
date: 2016-06-25 20:03:22
---

Given a non-empty binary search tree and a target value, find the value in the BST that is closest to the target.

### Note:
1. Given target value is a floating point.
2. You are guaranteed to have only one unique value in the BST that is closest to the target.

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
    public int closestValue(TreeNode root, double target) {
        int closet = root.val;
        while (root != null) {
            int r = root.val;
            closet = Math.abs(closet - target) > Math.abs(r - target) ? r : closet;
            root = r > target ? root.left : root.right;
        }
        return closet;
    }
}
```