title: 'LeetCode: Partition List'
date: 2015-06-24 00:03:22
tags:
 - LeetCode
---
<hr/>    

```java

/**
 * Description: Given a linked list and a value x, partition it such that all nodes less than x come before nodes
 * greater than or equal to x.
 * <p/>
 * You should preserve the original relative order of the nodes in each of the two partitions.
 * <p/>
 * For example, Given 1->4->3->2->5->2 and x = 3, return 1->2->2->4->3->5.
 *
 * @author hzhou
 */
public class PartitionList {
	public ListNode partition(ListNode head, int x) {
		if (head == null || head.next == null) {
			return head;
		}
		ListNode preHead = new ListNode(0);
		preHead.next = head;
		ListNode pre, cursor;
		pre = preHead;
		cursor = head;
		while (cursor != null && cursor.val < x) {
			pre = cursor;
			cursor = cursor.next;
		}
		// pre is the end of left side
		ListNode crt = pre;
		while (cursor != null) {
			while (cursor != null && cursor.val >= x) {
				crt = cursor;
				cursor = cursor.next;
			}
			if (cursor != null) {
				crt.next = cursor.next;
				cursor.next = pre.next;
				pre.next = cursor;
				pre = pre.next;
				cursor = crt.next;
			}
		}
		return preHead.next;
	}
	@Test
	public void test() {
		//1->4->3->2->5->2 and x = 3, return 1->2->2->4->3->5.
		ListNode head = new ListNode(1);
		head.next = new ListNode(4);
		head.next.next = new ListNode(3);
		head.next.next.next = new ListNode(2);
		head.next.next.next.next = new ListNode(5);
		head.next.next.next.next.next = new ListNode(2);
		ListNode result = partition(head, 3);
	}
}
```
