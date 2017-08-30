title: 'LeetCode: Find Largest Value in Each Tree Row'
date: 2017-08-30 20:03:22
---

You need to find the largest value in each row of a binary tree.

### Example:
```
Input:

          1
         / \
        3   2
       / \   \  
      5   3   9

Output: [1, 3, 9]
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
    public List<Integer> largestValues(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        if (root == null) {
            return result;
        }
        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);
        queue.add(null);
        int max = Integer.MIN_VALUE;
        while (!queue.isEmpty()) {
            TreeNode node = queue.poll();
            if (node == null) {
                result.add(max);
                max = Integer.MIN_VALUE;
                if (!queue.isEmpty())queue.add(null);
            } else {
                max = Math.max(max, node.val);
                if (node.left != null) queue.add(node.left);
                if (node.right != null) queue.add(node.right);
            }
        }
        return result;
    }
}
```
