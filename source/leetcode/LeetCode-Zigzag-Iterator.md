title: 'LeetCode: Zigzag Iterator'
date: 2016-06-25 20:03:22
---

Given two 1d vectors, implement an iterator to return their elements alternately.

For example, given two 1d vectors:
```
v1 = [1, 2]
v2 = [3, 4, 5, 6]
```
By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1, 3, 2, 4, 5, 6].

**Follow up**: What if you are given k 1d vectors? How well can your code be extended to such cases?

Clarification for the follow up question - Update (2015-09-18):
The "Zigzag" order is not clearly defined and is ambiguous for k > 2 cases. If "Zigzag" does not look right to you, replace "Zigzag" with "Cyclic". For example, given the following input:

```
[1,2,3]
[4,5,6,7]
[8,9]
```

It should return `[1,4,8,2,5,9,3,6,7]`.

```java
public class ZigzagIterator {

   private List<Integer> list;
    private int currentIndex;

    public ZigzagIterator(List<Integer> v1, List<Integer> v2) {
        list = new ArrayList<>();
        currentIndex = 0;
        if (v1 == null || v1.isEmpty()) {
            list = v2;
            return;
        }
        if (v2 == null || v2.isEmpty()) {
            list = v1;
            return;
        }

        for (int i = 0; i < v1.size(); i++) {
            list.add(v1.get(i));
            if (i < v2.size()) {
                list.add(v2.get(i));
            }
        }

        for (int i = v1.size(); i < v2.size(); i++) {
            list.add(v2.get(i));
        }

    }

    public int next() {
        return list.get(currentIndex++);
    }

    public boolean hasNext() {
        return currentIndex < list.size();
    }
}

/**
 * Your ZigzagIterator object will be instantiated and called as such:
 * ZigzagIterator i = new ZigzagIterator(v1, v2);
 * while (i.hasNext()) v[f()] = i.next();
 */
 ```
