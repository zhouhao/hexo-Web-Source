title: "Leetcode: LRU Cache"
date: 2015-05-04 23:24:42
---
 Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: `get` and `set`.

`get(key)` - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.

`set(key, value)` - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

<!-- more -->

The basic idea is to use LinkedHashMap, as it has property - `capacity`.

```java
import java.util.LinkedHashMap; // need to import this

public class LRUCache {
    private LinkedHashMap<Integer, Integer> map;

    public LRUCache(int capacity) {
        final int c = capacity; // make it final, so it can be used in inner class
        this.map = new LinkedHashMap<Integer, Integer>(c) {
            @Override
            protected boolean removeEldestEntry(Map.Entry<Integer, Integer> eldest) {
                return this.size() > c;
            }
        };
    }

    public int get(int key) {
        if (map.containsKey(key)) {
            int value = map.get(key);
      // why remove then put here? For LRU. ---- This is an ugly way, I know
            map.remove(key);
            map.put(key, value);
            return value;
        }
        return -1;
    }

    public void set(int key, int value) {
        if (map.containsKey(key)) {
            map.remove(key);
        }
        map.put(key, value);
    }
}
```

### Another solution with double linked list
```java
public class LRUCache {
    private Map<Integer, LinkedNode> map;
    private int capacity;
    private LinkedNode head;
    private LinkedNode end;

    public LRUCache(int capacity) {
        this.capacity = capacity;
        map = new HashMap<>(capacity);
    }

    public int get(int key) {
        if (map.containsKey(key)) {
            LinkedNode node = map.get(key);
            removeNode(node);
            addNodeToHead(node);
            return node.value;
        } else {
            return -1;
        }
    }

    public void put(int key, int value) {
        LinkedNode node = new LinkedNode(key, value);
        if (map.containsKey(key)) {
            removeNode(map.get(key));
            addNodeToHead(node);
        } else {
            if (map.size() >= capacity) {
                map.remove(end.key);
                removeNode(end);
            }
            addNodeToHead(node);
        }
        map.put(key, node);
    }


    private void removeNode(LinkedNode node) {
        LinkedNode prev = node.prev;
        LinkedNode next = node.next;
        if (prev == null && next == null) {
            head = end = null;
        } else if (prev == null) {
            head = next;
            head.prev = null;
        } else if (next == null) {
            end = prev;
            end.next = null;
        } else {
            prev.next = next;
            next.prev = prev;
        }
    }

    private void addNodeToHead(LinkedNode node) {
        if (head == null) {
            head = end = node;
            return;
        }
        head.prev = node;
        node.next = head;
        node.prev = null;
        head = node;
    }

    private static class LinkedNode {
        int value;
        int key;
        LinkedNode prev = null;
        LinkedNode next = null;

        LinkedNode(int key, int value) {
            this.key = key;
            this.value = value;
        }
    }
}
```
