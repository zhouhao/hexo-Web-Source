title: 'LeetCode: Convert Sorted Array to Binary Search Tree'
date: 2015-06-25 20:03:22
tags:
 - LeetCode
---
<hr/>    

```java

/**
 * Created by hzhou on 4/21/15. codeashobby@gmail.com
 */
public class SortedArrayToBST {
	public TreeNode sortedArrayToBST(int[] num) {
		if (num.length < 1) {
			return null;
		}
		if (num.length == 1) {
			return new TreeNode(num[0]);
		}
		return helper(0, num.length - 1, num);
	}
	private TreeNode helper(int start, int end, int[] num) {
		if (start <= end) {
			int middle = (start + end) / 2;
			TreeNode tree = new TreeNode(num[middle]);
			tree.left = helper(start, middle - 1, num);
			tree.right = helper(middle + 1, end, num);
			return tree;
		} else {
			return null;
		}
	}
	public static void main(String[] args) {
		SortedArrayToBST s = new SortedArrayToBST();
		int[] num = new int[0];//{1,2,3,4,5,6,7};
		TreeNode tree = s.sortedArrayToBST(num);
	}
}
```
