title: 'LeetCode: Populating Next Right Pointers in Each Node II'
date: 2015-06-24 00:03:22
tags:
 - LeetCode
---
<hr/>    

```java

import static org.junit.Assert.assertSame;
/**
 * Created by hzhou on 4/27/15. codeashobby@gmail.com
 * <p/>
 * https://chazyhabit.wordpress.com/2014/08/16/populating-next-right-pointers-in-each-node-ii-leetcode-83/
 */
public class PopulatingNextRightPointersInEachNodeII {
	public void connect(TreeLinkNode root) {
		if (root == null) {
			return;
		}
		TreeLinkNode head = null; // the head node of the next level
		TreeLinkNode prev = null; // the previous node of the current node in the same level
		TreeLinkNode curr = root;
		while (curr != null) {
			while (curr != null) {
				if (curr.left != null) {
					if (prev == null) {
						head = curr.left;
					} else {
						prev.next = curr.left;
					}
					prev = curr.left;
				}
				if (curr.right != null) {
					if (prev == null) {
						head = curr.right;
					} else {
						prev.next = curr.right;
					}
					prev = curr.right;
				}
				curr = curr.next;
			}
			// go to next level
			curr = head;
			head = null;
			prev = null;
		}
	}
	@Test
	public void test() {
		TreeLinkNode root = new TreeLinkNode(1);
		root.left = new TreeLinkNode(2);
		root.right = new TreeLinkNode(3);
		root.left.left = new TreeLinkNode(4);
		root.left.right = new TreeLinkNode(5);
		root.right.right = new TreeLinkNode(7);
		connect(root);
		assertSame(root.left.right.next, root.right.right);
	}
}
```
