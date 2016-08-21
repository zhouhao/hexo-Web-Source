title: 'LeetCode: Reverse Bits'
date: 2015-06-24 00:03:22
---
 
```java

/**
 * Created by hzhou on 4/22/15. codeashobby@gmail.com
 */
public class ReverseBits {
    public int reverseBits(int n) {
        int j;
        for (int i = 0; i < 16; i++) {
            j = 31 - i;
            n = swap(n, i, j);
        }
        return n;
    }
    private int swap(int n, int left, int right) {
        boolean leftBit = (n & 1 << left) != 0;
        boolean rightBit = (n & 1 << right) != 0;
        n = leftBit ? setOne(n, right) : setZero(n, right);
        n = rightBit ? setOne(n, left) : setZero(n, left);
        return n;
    }
    private int setZero(int n, int position) {
        return n & (~(1 << position));
    }
    private int setOne(int n, int position) {
        return n | (1 << position);
    }
    @Test
    public void test() {
        System.out.println(reverseBits(2));
        System.out.println(setZero(3, 0));
    }
}
```
