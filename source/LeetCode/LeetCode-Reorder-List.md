title: 'LeetCode: Reorder List'
date: 2015-06-24 00:03:22
---
 
```java

/**
 * Description Given a singly linked list L: L0��L1������Ln-1��Ln, reorder it to: L0��Ln��L1��Ln-1��L2��Ln-2����
 * <p/>
 * You must do this in-place without altering the nodes' values.
 * <p/>
 * For example, Given {1,2,3,4}, reorder it to {1,4,2,3}.
 *
 * @author hzhou
 */
public class ReorderList {
    public void reorderList(ListNode head) {
        if (head == null || head.next == null || head.next.next == null) {
            return;
        }
        List<ListNode> list = new ArrayList<ListNode>();
        list.add(head);
        ListNode cursor = head.next;
        int count = 1;
        while (cursor != null) {
            list.add(cursor);
            cursor = cursor.next;
            count++;
        }
        for (int i = 0; i < count / 2; i++) {
            list.get(i).next = list.get(count - i - 1);
            list.get(count - i - 1).next = list.get(i + 1);
        }
        list.get(count / 2).next = null;
    }
}
```
