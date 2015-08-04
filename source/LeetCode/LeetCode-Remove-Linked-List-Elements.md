title: 'LeetCode: Remove Linked List Elements'
date: 2015-06-23 21:39:49
tags:
---
```java
public class RemoveLinkedListElements {

    public ListNode removeElements(ListNode head, int val) {
        ListNode preHeader = new ListNode(val - 1);
        preHeader.next = head;
        ListNode cursor = preHeader;

        while (cursor != null && cursor.next != null) {
            if (cursor.next.val == val) {
                cursor.next = cursor.next.next;
            } else {
                cursor = cursor.next;
            }
        }

        return preHeader.next;
    }
    
}

```