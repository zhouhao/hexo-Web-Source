title: 'LeetCode: Merge k Sorted Lists'
date: 2015-06-24 00:03:22
---
 Merge `k` sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

```java
 public class MergeKSortedLists {
   public ListNode mergeKLists(ListNode[] lists) {
     if (lists == null || lists.length < 1) {
       return null;
     }
     Queue<ListNode> queue = new PriorityQueue<>(lists.length, (o1, o2) -> o1.val - o2.val);

     for (ListNode n : lists) {
       if (n != null) {
         queue.add(n);
       }
     }
     ListNode preHead = new ListNode(0);
     ListNode cursor = preHead;

     while (!queue.isEmpty()) {
       ListNode tmp = queue.poll();
       cursor.next = tmp;
       if (tmp.next != null) {
         queue.offer(tmp.next);
       }
       cursor = cursor.next;
     }

     return preHead.next;
   }
 }
```
