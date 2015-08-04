title: 'LeetCode: Intersection of Two Linked Lists'
date: 2015-06-24 00:03:22
---

```java

/**
 * Created by hzhou on 4/22/15. codeashobby@gmail.com
 */
public class IntersectionOfTwoLinkedLists {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        if (headA == null || headB == null) {
            return null;
        }
        ListNode cursor = headA;
        int la = 0;
        int lb = 0;
        while (cursor != null) {
            la++;
            cursor = cursor.next;
        }
        cursor = headB;
        while (cursor != null) {
            lb++;
            cursor = cursor.next;
        }
        ListNode ca = headA;
        ListNode cb = headB;
        if (la > lb) {
            int tmp = la - lb;
            while (tmp-- > 0) {
                ca = ca.next;
            }
        } else {
            int tmp = lb - la;
            while (tmp-- > 0) {
                cb = cb.next;
            }
        }
        while (ca != null) {
            if (ca == cb) {
                return ca;
            } else {
                ca = ca.next;
                cb = cb.next;
            }
        }
        return null;
    }
}
```
