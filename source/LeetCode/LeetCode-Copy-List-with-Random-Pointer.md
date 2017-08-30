title: "LeetCode: Copy List with Random Pointer"
date: 2014-08-31 14:52:12
---
 A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.
Return a deep copy of the list.
<!-- more -->
Link: https://oj.leetcode.com/problems/copy-list-with-random-pointer/

Core: Use a hashMap to store the mapping from old list to new list

```java
/**
 * Definition for singly-linked list with a random pointer.
 * class RandomListNode {
 *     int label;
 *     RandomListNode next, random;
 *     RandomListNode(int x) { this.label = x; }
 * };
 */
public class Solution {
    public RandomListNode copyRandomList(RandomListNode head) {
        RandomListNode result = new RandomListNode(0);
        if(head == null) return null;

        // Use a hashmap to store the mapping
        Map<RandomListNode, RandomListNode> oldToNew = new HashMap<RandomListNode, RandomListNode>();

        RandomListNode cursor = head;
        // create new nodes for new list
        while(cursor != null) {
            RandomListNode tmp = new RandomListNode(cursor.label);
            oldToNew.put(cursor, tmp);
            cursor = cursor.next;
        }

        // build the new list below
        cursor = head;
        RandomListNode tmp = result;
        while(cursor != null) {
            RandomListNode t = oldToNew.get(cursor);
            tmp.next = t;
            t.next = oldToNew.get(cursor.next);
            t.random = oldToNew.get(cursor.random);
            cursor = cursor.next;
            tmp = tmp.next;
        }

        return result.next;
    }
}
```
