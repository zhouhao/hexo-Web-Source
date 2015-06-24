title: 'LeetCode: Merge k Sorted Lists'
date: 2015-06-24 00:03:22
tags:
 - LeetCode
---
<hr/>    

```java

/**
 * Created by hzhou on 5/6/15. codeashobby@gmail.com
 */
public class MergeKSortedLists {
	public ListNode mergeKLists(ListNode[] lists) {
		if (lists == null || lists.length < 1) {
			return null;
		}
		if (lists.length == 1) {
			return lists[0];
		}
		ListNode result = lists[0];
		for (int i = 1; i < lists.length; i++) {
			result = mergeTwoLists(result, lists[i]);
		}
		return result;
	}
	private ListNode mergeTwoLists(ListNode l1, ListNode l2) {
		if (l1 == null) {
			return l2;
		}
		if (l2 == null) {
			return l1;
		}
		ListNode pre = new ListNode(0);
		ListNode cursor = pre;
		while (l1 != null && l2 != null) {
			if (l1.val > l2.val) {
				cursor.next = l2;
				l2 = l2.next;
			} else {
				cursor.next = l1;
				l1 = l1.next;
			}
			cursor = cursor.next;
		}
		if (l1 == null) {
			cursor.next = l2;
		} else {
			cursor.next = l1;
		}
		return pre.next;
	}
}
```
