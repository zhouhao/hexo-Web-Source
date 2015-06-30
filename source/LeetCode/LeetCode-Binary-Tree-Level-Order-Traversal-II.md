title: 'LeetCode: Binary Tree Level Order Traversal II'
date: 2015-06-24 00:03:22
---
<hr/>

```java
 public class BinaryTreeLevelOrderTraversalII {
     public List<List<Integer>> levelOrderBottom(TreeNode root) {
         List<List<Integer>> result = new ArrayList<List<Integer>>();
         if (root == null) {
             return result;
         }
         Queue<TreeNode> queue = new LinkedList<TreeNode>();
         queue.offer(root);
         int c1 = 1;
         int c2 = 0;
         List<Integer> crt = new ArrayList<Integer>();
         while (!queue.isEmpty()) {
             TreeNode node = queue.poll();
             crt.add(node.val);
             c1--;
             if (node.left != null) {
                 queue.offer(node.left);
                 c2++;
             }
             if (node.right != null) {
                 queue.offer(node.right);
                 c2++;
             }
             if (c1 == 0) {
                 c1 = c2;
                 c2 = 0;
                 result.add(0, new ArrayList<Integer>(crt));
                 crt.clear();
             }
         }
         if (!crt.isEmpty()) {
             result.add(0, new ArrayList<Integer>(crt));
         }
         return result;
     }
 }
```
