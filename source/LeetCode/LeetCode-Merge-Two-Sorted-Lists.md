title: 'LeetCode: Merge Two Sorted Lists'
date: 2015-06-24 00:03:22
---
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

```java
 public class MergeTwoSortedLists {
   public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
     // leetcode supports lambda
     Queue<ListNode> queue = new PriorityQueue<>(2, (o1, o2) -> o1.val - o2.val);

     if (l1 != null) queue.add(l1);
     if (l2 != null) queue.add(l2);

     ListNode pre, cursor;
     pre = new ListNode(0);
     cursor = pre;
     while (!queue.isEmpty()) {
       ListNode node = queue.poll();
       cursor.next = node;
       cursor = cursor.next;
       if (node.next != null) {
         queue.add(node.next);
       }
     }
     return pre.next;
   }
 }
```
