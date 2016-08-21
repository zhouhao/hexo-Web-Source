title: 'LeetCode: Linked List Cycle'
date: 2015-06-24 00:03:22
---
 
```java

/**
 * Created by hzhou on 4/22/15. codeashobby@gmail.com
 */
public class LinkedListCycle {
    public boolean hasCycle(ListNode head) {
        if (head == null || head.next == null) {
            return false;
        }
        ListNode fast = head;
        ListNode slow = head;
        while (fast != null && fast.next != null) {
            fast = fast.next.next;
            slow = slow.next;
            if (fast != null && fast == slow) {
                return true;
            }
        }
        return false;
    }
}
```
