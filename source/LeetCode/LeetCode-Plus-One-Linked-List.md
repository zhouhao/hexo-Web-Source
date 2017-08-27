title: 'LeetCode: Plus One Linked List'
date: 2017-08-27 20:03:22
---

Given a non-negative integer represented as **non-empty** a singly linked list of digits, plus one to the integer.

You may assume the integer do not contain any leading zero, except the number 0 itself.

The digits are stored such that the most significant digit is at the head of the list.

### Example:

```
Input:
1->2->3

Output:
1->2->4
```

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
public class Solution {
    public ListNode plusOne(ListNode head) {
        int x = helper(head);
        if (x == 1) {
            ListNode node = new ListNode(x);
            node.next = head;
            head = node;
        }
        return head;
    }

    private int helper(ListNode node) {
        if (node == null) return 0;
        if (node.next == null) {
            node.val += 1;
            int result = node.val / 10;
            node.val %= 10;
            return result;
        }

        int x = node.val + helper(node.next);
        node.val = x % 10;
        return x / 10;
    }
}
```