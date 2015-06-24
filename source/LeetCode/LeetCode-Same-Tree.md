title: 'LeetCode: Same Tree'
date: 2015-06-24 00:03:22
tags:
 - LeetCode
---
<hr/>    

```java

/**
 * Created by hzhou on 4/27/15. codeashobby@gmail.com
 */
public class SameTree {
	public boolean isSameTree(TreeNode p, TreeNode q) {
		return p == q || helper(p, q);
	}
	private boolean helper(TreeNode p, TreeNode q) {
		return (p == null && q == null) || !((p == null) || (q == null) || p.val != q.val) && helper(p.left, q.left) && helper(p.right, q.right);
	}
}
```
