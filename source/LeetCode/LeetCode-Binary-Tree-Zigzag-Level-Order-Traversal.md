title: 'LeetCode: Binary Tree Zigzag Level Order Traversal'
date: 2015-06-24 00:03:22
---

```java
public class BinaryTreeZigzagLevelOrderTraversal {
    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
        List<List<Integer>> result = new ArrayList<List<Integer>>();
        if (root == null) {
            return result;
        }
        Queue<TreeNode> queue = new LinkedList<TreeNode>();
        queue.add(root);
        int crt, next;
        crt = 1;
        next = 0;
        List<Integer> list = new ArrayList<Integer>();
        while (!queue.isEmpty()) {
            TreeNode node = queue.poll();
            list.add(node.val);
            crt--;
            if (node.left != null) {
                queue.add(node.left);
                next++;
            }
            if (node.right != null) {
                queue.add(node.right);
                next++;
            }
            if (crt == 0) {
                crt = next;
                next = 0;
                result.add(new ArrayList<Integer>(list));
                list.clear();
            }
        }
        for (int i = 1; i < result.size(); i = i + 2) {
            Collections.reverse(result.get(i));
        }
        return result;
    }
}
```
