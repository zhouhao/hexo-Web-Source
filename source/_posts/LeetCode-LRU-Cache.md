title: "Leetcode: LRU Cache"
date: 2015-05-04 23:24:42
tags:
 - LeetCode
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
### If you have any better idea, please share. I wish to learn more. =)
