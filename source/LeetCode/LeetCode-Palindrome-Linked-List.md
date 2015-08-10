title: 'LeetCode: Palindrome Linked List'
date: 2015-08-10 09:43:07
---
Given a singly linked list, determine if it is a palindrome.

```java
public class Solution {
    public boolean isPalindrome(ListNode head) {
        if (head == null || head.next == null) {
            return true;
        }

        ListNode fast = head.next;
        ListNode slow = head;

        while (fast != null && fast.next != null) {
            fast = fast.next.next;
            slow = slow.next;
        }

        ListNode half = reverse(slow.next);
        fast = head;
        while (half != null && fast != null) {
            if (half.val != fast.val) {
                return false;
            }
            half = half.next;
            fast = fast.next;
        }

        return true;
    }

    private ListNode reverse(ListNode head) {
        if (head == null || head.next == null) {
            return head;
        }
        ListNode cursor = head;
        ListNode next = cursor.next;
        ListNode tmp;
        cursor.next = null;
        while (next != null) {
            //cursor.next = null;
            tmp = next.next;
            next.next = cursor;
            cursor = next;
            if (tmp != null) {
                next = tmp;
            } else {
                break;
            }
        }
        return next;
    }

}
```