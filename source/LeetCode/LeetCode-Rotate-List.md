title: 'LeetCode: Rotate List'
date: 2015-06-24 00:03:22
---
 
```java

/**
 * Created by hzhou on 5/6/15. codeashobby@gmail.com
 */
public class RotateList {
    public ListNode rotateRight(ListNode head, int k) {
        if (head == null || k == 0) {
            return head;
        }
        ListNode cursor = head;
        int l = 0;
        while (cursor != null) {
            l++;
            cursor = cursor.next;
        }
        k = k % l;
        if (k == 0) {
            return head;
        }
        int offSet = l - k;
        cursor = head;
        while (offSet > 1) {
            cursor = cursor.next;
            offSet--;
        }
        ListNode newHead = cursor.next;
        cursor.next = null;
        cursor = newHead;
        while (cursor.next != null) {
            cursor = cursor.next;
        }
        cursor.next = head;
        return newHead;
    }
}
```
