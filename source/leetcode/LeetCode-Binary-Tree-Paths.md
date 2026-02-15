title: 'LeetCode: Binary Tree Paths'
date: 2015-08-16 17:05:53
---
 Given a binary tree, return all root-to-leaf paths.

### For example
Given the following binary tree:
```
   1
 /   \
2     3
 \
  5
```

All root-to-leaf paths are: `["1->2->5", "1->3"]`

```java
public class Solution {
    public List<String> binaryTreePaths(TreeNode root) {

        List<String> result = new ArrayList<>();

        if (root == null) {
            return result;
        }

        helper(result, new ArrayList<>(), root);

        return result;
    }

    private void helper(List<String> result, List<Integer> crt, TreeNode root) {
        if (root == null) {
            return;
        } else {
            crt.add(root.val);
        }

        if (root.right == null && root.left == null) {
            result.add(getString(crt));
            return;
        }

        if (root.left != null) {
            helper(result, new ArrayList<>(crt), root.left);
        }

        if (root.right != null) {
            helper(result, new ArrayList<>(crt), root.right);
        }
    }

    private String getString(List<Integer> crt) {
        if (crt == null || crt.isEmpty()) {
            return null;
        }
        StringBuilder sb = new StringBuilder();
        sb.append(crt.get(0));
        for (int i = 1; i < crt.size(); i++) {
            sb.append("->").append(crt.get(i));
        }
        return sb.toString();
    }
}
```