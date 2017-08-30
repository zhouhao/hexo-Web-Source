title: 'LeetCode: Two Sum IV - Input is a BST'
date: 2017-08-30 20:03:22
---

Given a Binary Search Tree and a target number, return true if there exist two elements in the BST such that their sum is equal to the given target.

### Example 1:
```
Input:
    5
   / \
  3   6
 / \   \
2   4   7

Target = 9

Output: True
```

### Example 2:
```
Input:
    5
   / \
  3   6
 / \   \
2   4   7

Target = 28

Output: False
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
    public boolean findTarget(TreeNode root, int k) {
        Map<Integer, Integer> dict = new HashMap<>();

        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);

        while (!queue.isEmpty()) {
            TreeNode node = queue.poll();
            dict.put(node.val, dict.getOrDefault(node.val, 0) + 1);
            if (node.left != null) queue.add(node.left);
            if (node.right != null) queue.add(node.right);
        }

        for (Map.Entry<Integer, Integer> entry : dict.entrySet()) {
            int val = entry.getKey();
            int tar = k - val;
            if (val == tar && entry.getValue() > 1) return true;
            if (val != tar && dict.containsKey(tar)) return true;

        }
        return false;
    }
}
```
