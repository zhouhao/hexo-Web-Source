title: 'LeetCode: Sort List'
date: 2015-06-24 00:03:22
---

```java

/**
 * Description
 *
 * @author hzhou
 */
public class SortList {
    public ListNode sortList(ListNode head) {
        if (head == null || head.next == null) {
            return head;
        }
        ListNode fast = head;
        ListNode slow = head;
        while (fast.next != null && fast.next.next != null) {
            fast = fast.next.next;
            slow = slow.next;
        }
        fast = slow;
        slow = slow.next;
        fast.next = null;
        fast = sortList(head);
        slow = sortList(slow);
        return merge(fast, slow);
    }
    private ListNode merge(ListNode a, ListNode b) {
        ListNode result;
        if (a == null) {
            return b;
        }
        if (b == null) {
            return a;
        }
        if (a.val >= b.val) {
            result = b;
            b = b.next;
        } else {
            result = a;
            a = a.next;
        }
        ListNode cursor = result;
        while (a != null && b != null) {
            if (a.val >= b.val) {
                cursor.next = b;
                b = b.next;
            } else {
                cursor.next = a;
                a = a.next;
            }
            cursor = cursor.next;
        }
        cursor.next = a == null ? b : a;
        return result;
    }
    @Test
    public void test() {
        ListNode head = new ListNode(1);
        head.next = new ListNode(2);
        sortList(head);
    }
}
```
