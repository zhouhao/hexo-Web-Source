title: 'LeetCode: Convert Sorted List to Binary Search Tree'
date: 2015-06-25 20:03:22
---
Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST

```java
    public TreeNode sortedListToBST(ListNode head) {
        if (head == null) return null;
        if (head.next == null) return new TreeNode(head.val);

        ListNode fast, slow, preSlow;
        fast = slow = preSlow = head;
        while (fast.next != null && fast.next.next != null) {
            preSlow = slow;
            slow = slow.next;
            fast = fast.next.next;
        }

        fast = slow.next;
        preSlow.next = null;
        TreeNode node = new TreeNode(slow.val);
        if (slow != head) node.left = sortedListToBST(head);
        node.right = sortedListToBST(fast);
        return node;
    }
```
