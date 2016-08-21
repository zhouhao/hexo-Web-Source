title: 'LeetCode: Delete Node in a Linked List'
date: 2015-08-10 09:42:31
---
 Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.

Supposed the linked list is `1 -> 2 -> 3 -> 4` and you are given the third node with value `3`, the linked list should become `1 -> 2 -> 4` after calling your function.

```java
public class DeleteNodeInALinkedList {
    public void deleteNode(ListNode node) {
        assert node.next != null;

        while (node != null && node.next != null) {
            ListNode next = node.next;
            node.val = next.val;

            if (next.next == null) {
                node.next = null;
            }
            node = node.next;
        }
    }
}
```