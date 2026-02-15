title: 'LeetCode: Find Mode in Binary Search Tree'
date: 2017-08-30 20:03:22
---

Given a binary search tree (BST) with duplicates, find all the mode(s) (the most frequently occurred element) in the given BST.

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than or equal to the node's key.
The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
Both the left and right subtrees must also be binary search trees.
For example:
Given BST `[1,null,2,2]`,
```
   1
    \
     2
    /
   2
```   
return `[2]`.

**Note**: If a tree has more than one mode, you can return them in any order.


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
    public int[] findMode(TreeNode root) {
        if (root == null) return new int[0];

        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);
        Map<Integer, Integer> dict = new HashMap<>();
        while (!queue.isEmpty()) {
            TreeNode node = queue.poll();
            dict.put(node.val, dict.getOrDefault(node.val, 0) + 1);
            if (node.left != null) {
                queue.add(node.left);
            }
            if (node.right != null) {
                queue.add(node.right);
            }
        }

        int max = dict.values().stream().mapToInt(Integer::intValue).max().orElse(0);
        List<Integer> result = new ArrayList<>();
        for (Map.Entry<Integer, Integer> entry : dict.entrySet()) {
            if (entry.getValue() == max) {
                result.add(entry.getKey());
            }
        }
        return toArray(result);
    }

    private int[] toArray(List<Integer> result) {
        int[] r = new int[result.size()];
        for (int i = 0; i < result.size(); i++) {
            r[i] = result.get(i);
        }
        return r;
    }
}
```
