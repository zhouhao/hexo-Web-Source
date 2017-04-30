title: 'LeetCode: Closest Binary Search Tree Value II'
date: 2016-06-25 20:03:22
---

Given a non-empty binary search tree and a target value, find k values in the BST that are closest to the target.

### Note:
1. Given target value is a floating point.
2. You may assume k is always valid, that is: k ≤ total nodes.
3. You are guaranteed to have only one unique set of k values in the BST that are closest to the target.
### Follow up:
Assume that the BST is balanced, could you solve it in less than O(n) runtime (where n = total nodes)?

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
    public List<Integer> closestKValues(TreeNode root, double target, int k) {
        Queue<Integer> result = new LinkedList<>();
        Stack<TreeNode> stack = new Stack<>();
        while (root != null) {
            stack.push(root);
            root = root.left;
        }

        while (!stack.isEmpty()) {
            TreeNode node = stack.pop();
            if (result.size() < k) {
                result.offer(node.val);
            } else {
                int first = result.peek();
                if (Math.abs(first - target) > Math.abs(node.val - target)) {
                    result.poll();
                    result.offer(node.val);
                } else {
                    break;
                }
            }

            if (node.right != null) {
                TreeNode right = node.right;
                while (right != null) {
                    stack.add(right);
                    right = right.left;
                }
            }
        }

        return result.stream().collect(Collectors.toList());
    }
}
```