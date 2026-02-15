title: 'LeetCode: Power of Four'
date: 2016-06-25 20:03:22
---

```java
public class Solution {
    public boolean isPowerOfFour(int num) {
        return num > 0 && (num & (num - 1)) == 0 && (0x55555555 & num) != 0;
    }
}
```