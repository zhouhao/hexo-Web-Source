title: 'LeetCode: Counting Bits'
date: 2016-06-25 20:03:22
---

Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

### Example:
For num = 5 you should return [0,1,1,2,1,2].

```java
public class Solution {
    public int[] countBits(int num) {
        if (num == 0) {
            return new int[]{0};
        }
        int[] result = new int[num + 1];

        result[0] = 0;
        result[1] = 1;
        for (int i = 2; i <= num; i++) {
            int x = (int) (Math.log(i)/Math.log(2));
            int mod = i - (1 << x);
            int res = 1;
            while (mod >= 2) {
                x = (int) (Math.log(mod)/Math.log(2));
                mod = mod - (1 << x);
                res++;
            }
            if (mod == 1) {
                res++;
            }
            result[i] = res;
        }

        return result;
    }
}
```
