title: 'LeetCode: Equal Tree Partition'
date: 2017-08-30 20:03:22
---

Given a binary tree with n nodes, your task is to check if it's possible to partition the tree to two trees which have the equal sum of values after removing exactly one edge on the original tree.

### Example 1:
```
Input:     
    5
   / \
  10 10
    /  \
   2   3

Output: True
Explanation:
    5
   /
  10

Sum: 15

   10
  /  \
 2    3

Sum: 15
```
### Example 2:
```
Input:     
    1
   / \
  2  10
    /  \
   2   20

Output: False
Explanation: You can't split the tree into two trees with equal sum after removing exactly one edge on the tree.
```

#### Note:
1. The range of tree node value is in the range of [-100000, 100000].
2. 1 <= n <= 10000

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
class Solution {
    public boolean checkEqualTree(TreeNode root) {
        int sum = sum(root);
        if (sum % 2 != 0 || (root.left == null && root.right == null)) return false;
        Queue<TreeNode> queue = new LinkedList<>();
        if (root.left != null) queue.add(root.left);
        if (root.right != null) queue.add(root.right);

        int target = sum / 2;
        while (!queue.isEmpty()) {
            TreeNode node = queue.poll();
            if (sum(node) == target) return true;

            if (node.left != null) queue.add(node.left);
            if (node.right != null) queue.add(node.right);
        }

        return false;
    }

    private int sum(TreeNode root) {
        if (root == null) return 0;

        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);

        int sum = 0;
        while (!queue.isEmpty()) {
            TreeNode node = queue.poll();
            sum += node.val;

            if (node.left != null) queue.add(node.left);
            if (node.right != null) queue.add(node.right);
        }

        return sum;
    }
}
```
