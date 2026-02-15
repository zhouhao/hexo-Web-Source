title: 'LeetCode: Minimum Absolute Difference in BST'
date: 2017-08-30 20:03:22
---

Given a binary search tree with non-negative values, find the minimum absolute difference between values of any two nodes.

### Example:
```
Input:

   1
    \
     3
    /
   2

Output:
1

Explanation:
The minimum absolute difference is 1, which is the difference between 2 and 1 (or between 2 and 3).
```
**Note**: There are at least two nodes in this BST.

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
    public int getMinimumDifference(TreeNode root) {
         List<Integer> list = new ArrayList<>();
        helper(root, list);
        int result = Integer.MAX_VALUE;
        for (int i = 1; i < list.size(); i++) {
            result = Math.min(result, list.get(i) - list.get(i - 1));
        }
        return result;
    }

    private void helper(TreeNode node, List<Integer> list) {
        if (node == null) {
            return;
        }
        helper(node.left, list);
        list.add(node.val);
        helper(node.right, list);
    }


}
```
