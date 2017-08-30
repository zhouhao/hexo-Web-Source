title: 'LeetCode: Design Compressed String Iterator'
date: 2017-08-30 20:03:22
---

Design and implement a data structure for a compressed string iterator. It should support the following operations: `next` and `hasNext`.

The given compressed string will be in the form of each letter followed by a positive integer representing the number of this letter existing in the original uncompressed string.

`next()` - if the original string still has uncompressed characters, return the next letter; Otherwise return a white space.

`hasNext()` - Judge whether there is any letter needs to be uncompressed.


### Example:
```
StringIterator iterator = new StringIterator("L1e2t1C1o1d1e1");

iterator.next(); // return 'L'
iterator.next(); // return 'e'
iterator.next(); // return 'e'
iterator.next(); // return 't'
iterator.next(); // return 'C'
iterator.next(); // return 'o'
iterator.next(); // return 'd'
iterator.hasNext(); // return true
iterator.next(); // return 'e'
iterator.hasNext(); // return false
iterator.next(); // return ' '
```

```java
public class StringIterator {

       private long cursor = 0;
    private long size = 0;
    private Map<Long, Character> map = new HashMap<>();

    public StringIterator(String compressedString) {
        char pre = ' ';
        long crt = 0;
        for (char c : compressedString.toCharArray()) {
            if (c >= '0' && c <= '9') {
                crt = 10 * crt + c - '0';
            } else {
                size += crt;
                if (pre != ' ') map.put(size, pre);
                pre = c;
                crt = 0;
            }
        }
        if (crt > 0) {
            size += crt;
            map.put(size, pre);
        }
    }

    public char next() {
        if (cursor >= size) return ' ';

        long key = map.keySet().stream()
                .filter(x -> x > cursor)
                .mapToLong(Long::longValue)
                .min()
                .orElse(0);
        cursor++;
        return map.get(key);
    }

    public boolean hasNext() {
        return cursor < size;
    }

}

/**
 * Your StringIterator object will be instantiated and called as such:
 * StringIterator obj = new StringIterator(compressedString);
 * char param_1 = obj.next();
 * boolean param_2 = obj.hasNext();
 */
 ```
