title: 'LeetCode: Remove Duplicates from Sorted List II'
date: 2015-06-24 00:03:22
tags:
 - LeetCode
---
<hr/>    

```java

/**
 * Created by hzhou on 2015/5/27.
 * Email: codeashobby@gmail.com
 * <p>
 * Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.
 * <p>
 * For example,
 * Given 1->2->3->3->4->4->5, return 1->2->5.
 * Given 1->1->1->2->3, return 2->3.
 */
public class RemoveDuplicatesFromSortedListII {
    public ListNode deleteDuplicates(ListNode head) {
        if (head == null || head.next == null) {
            return head;
        }
        ListNode preHead = new ListNode(head.val - 1);
        preHead.next = head;
        ListNode pre, cursor;
        pre = preHead;
        cursor = head;
        while (cursor != null) {
            int count = 1;
            int crtVal = cursor.val;
            while (cursor.next != null && cursor.next.val == crtVal) {
                count++;
                cursor = cursor.next;
            }
            if (count == 1) {
                pre.next = cursor;
                pre = pre.next;
            } else if (cursor.next == null) {
                pre.next = null;
            }
            cursor = cursor.next;
        }
        return preHead.next;
    }
    @Test
    public void test() {
        /*
        ListNode head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        head.next.next.next = new ListNode(3);
        head.next.next.next.next = new ListNode(4);
        head.next.next.next.next.next = new ListNode(4);
        head.next.next.next.next.next.next = new ListNode(5);
        */
        ListNode head = new ListNode(1);
        head.next = new ListNode(1);
        ListNode result = deleteDuplicates(head);
    }
}
```
