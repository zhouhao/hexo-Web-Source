title: 'LeetCode: Binary Tree Longest Consecutive Sequence'
date: 2018-06-25 20:03:22
---

### [298\. Binary Tree Longest Consecutive Sequence](https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/description/)

Difficulty: **Medium**



Given a binary tree, find the length of the longest consecutive sequence path.

The path refers to any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The longest consecutive path need to be from parent to child (cannot be the reverse).

**Example 1:**

```
Input:

   1
    \
     3
    / \
   2   4
        \
         5

Output: 3

Explanation: Longest consecutive sequence path is 3-4-5, so return 3.
```

**Example 2:**

```
Input:

   2
    \
     3
    / 
   2    
  / 
 1

Output: 2 

Explanation:** Longest consecutive sequence path is 2-3, not 3-2-1, so return 2
```


#### Solution

Language: **Java**

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    private int result = 1;
​
    public int longestConsecutive(TreeNode root) {
        if (root == null) {
            return 0;
        }
        handle(root, 1);
        return result;
    }
​
    private void handle(TreeNode parent, int count) {
        if (parent == null) {
            return;
        }
​
        result = Math.max(count, result);
        if (parent.left != null) {
            handle(parent.left, parent.val == parent.left.val - 1 ? count + 1 : 1);
        }
​
        if (parent.right != null) {
            handle(parent.right, parent.val == parent.right.val - 1 ? count + 1 : 1);
        }
    }
}
```