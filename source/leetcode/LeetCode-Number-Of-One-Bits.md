title: 'LeetCode: Number Of One Bits'
date: 2015-06-24 00:03:22
---
 
```java
public class NumberOfOneBits {

    // you need to treat n as an unsigned value
    public int hammingWeight(long n) {
        int weight = 0;
        for (int i = 0; i < 32; i++) {
            if ((n & (1<<i)) != 0) {
                weight++;
            }
        }
        return weight;
    }

    @Test
    public void test() {
        System.out.println(hammingWeight(2147483648L));
    }
}

```
