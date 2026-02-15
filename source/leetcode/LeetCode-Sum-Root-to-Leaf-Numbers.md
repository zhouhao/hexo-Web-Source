title: 'LeetCode: Sum Root to Leaf Numbers'
date: 2015-06-24 00:03:22
---
 
```java

/**
 * Description: Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.
 * <p/>
 * An example is the root-to-leaf path 1->2->3 which represents the number 123.
 * <p/>
 * Find the total sum of all root-to-leaf numbers.
 * <p/>
 * For example,
 * <pre>
 *   1
 *  / \
 * 2   3
 * </pre>
 * The root-to-leaf path 1->2 represents the number 12. The root-to-leaf path 1->3 represents the number 13.
 * <p/>
 * Return the sum = 12 + 13 = 25.
 *
 * @author hzhou
 */
public class SumRootToLeafNumbers {
    public int sumNumbers(TreeNode root) {
        if (root == null) {
            return 0;
        }
        if (root.left == null && root.right == null) {
            return root.val;
        }
        List<Integer> result = new ArrayList<Integer>();
        helper(0, result, root);
        int sum = 0;
        for (int i : result) {
            sum += i;
        }
        return sum;
    }
    private void helper(int crt, List<Integer> container, TreeNode root) {
        if (root == null) {
            return;
        }
        crt = crt * 10 + root.val;
        if (root.left == null && root.right == null) {
            container.add(crt);
            return;
        }
        if (root.left != null) {
            helper(crt, container, root.left);
        }
        if (root.right != null) {
            helper(crt, container, root.right);
        }
    }
}
```
