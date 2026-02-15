title: 'LeetCode: Reverse Linked List'
date: 2015-06-23 21:39:15
---
 ```java
public class ReverseLinkedList {

    public ListNode reverseList(ListNode head) {
        if (head == null || head.next == null) {
            return head;
        }
        ListNode preHeader = head;
        ListNode cursor = head.next;
        preHeader.next = null;

        ListNode tmp;
        while (cursor != null) {
            tmp = cursor.next;
            cursor.next = preHeader;
            preHeader = cursor;
            cursor = tmp;
        }

        return preHeader;
    }

}

```