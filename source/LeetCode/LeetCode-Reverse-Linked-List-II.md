title: 'LeetCode: Reverse Linked List II'
date: 2015-06-24 00:03:22
tags:
 - LeetCode
---
<hr/>    

```java

/**
 * Created by hzhou on 2015/5/26.
 * Email: codeashobby@gmail.com
 * <p>
 * Given 1->2->3->4->5->NULL, m = 2 and n = 4,
 * <p>
 * return 1->4->3->2->5->NULL.
 */
public class ReverseLinkedListII {
    public ListNode reverseBetween(ListNode head, int m, int n) {
        if (head == null || head.next == null) {
            return head;
        }
        int length = 0;
        ListNode cursor = head;
        while (cursor != null) {
            length++;
            cursor = cursor.next;
        }
        if (m >= length) {
            return head;
        }
        ListNode preHead = new ListNode(0);
        preHead.next = head;
        ListNode pre = preHead;
        int count = n - m + 1;
        while (m > 1) {
            pre = pre.next;
            m--;
        }
        cursor = pre.next;
        List<ListNode> list = new ArrayList<ListNode>();
        while (count > 0 && cursor != null) {
            list.add(cursor);
            count--;
            cursor = cursor.next;
        }
        for (int i = list.size() - 1; i >= 0; i--) {
            pre.next = list.get(i);
            pre = pre.next;
        }
        pre.next = cursor;
        return preHead.next;
    }
    @Test
    public void test() {
        ListNode head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        head.next.next.next = new ListNode(4);
        head.next.next.next.next = new ListNode(5);
        ListNode result = reverseBetween(head, 1, 4);
    }
}
```
