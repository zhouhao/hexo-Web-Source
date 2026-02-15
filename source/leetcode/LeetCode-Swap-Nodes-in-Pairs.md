title: 'LeetCode: Swap Nodes in Pairs'
date: 2015-06-24 00:03:22
---
 
```java

/**
 * Created by hzhou on 2015/5/21.
 * Email: codeashobby@gmail.com
 * <p>
 * Given 1->2->3->4, you should return the list as 2->1->4->3.
 */
public class SwapNodesInPairs {
    public ListNode swapPairs(ListNode head) {
        if (head == null || head.next == null) {
            return head;
        }
        ListNode preHead = new ListNode(0);
        preHead.next = head;
        ListNode pre = preHead;
        ListNode x, y;
        x = head;
        y = head.next;
        while (x != null && y != null) {
            x.next = y.next;
            pre.next = y;
            y.next = x;
            pre = x;
            x = x.next;
            y = x != null ? x.next : null;
        }
        return preHead.next;
    }
    @Test
    public void test() {
        ListNode l = new ListNode(1);
        l.next = new ListNode(2);
        l.next.next = new ListNode(3);
        l.next.next.next = new ListNode(4);
        l.next.next.next.next = new ListNode(5);
        ListNode result = swapPairs(l);
    }
}
```
