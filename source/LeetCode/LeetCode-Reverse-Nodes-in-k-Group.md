title: 'LeetCode: Reverse Nodes in k-Group'
date: 2015-06-25 20:03:22
---

```java

/**
 * Created by hzhou on 2015/5/21.
 * Email: codeashobby@gmail.com
 */
public class ReverseNodesInKGroup {
    public ListNode reverseKGroup(ListNode head, int k) {
        if (head == null || head.next == null) {
            return head;
        }
        int length = 0;
        ListNode pre = head;
        while (pre != null) {
            length++;
            pre = pre.next;
        }
        if (k > length) {
            return head;
        }
        int count = length / k;
        if (k == 1 || count < 1) {
            return head;
        }
        ListNode preHead = new ListNode(0);
        preHead.next = head;
        pre = preHead;
        ListNode cursor = head;
        List<ListNode> list = new ArrayList<ListNode>(k);
        while (count > 0) {
            list.clear();
            for (int i = 0; i < k; i++) {
                list.add(cursor);
                cursor = cursor.next;
                if (i > 0) {
                    list.get(i).next = list.get(i - 1);
                }
            }
            list.get(0).next = cursor;
            pre.next = list.get(k - 1);
            pre = list.get(0);
            count--;
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
        ListNode result = reverseKGroup(l, 5);
    }
}
```
