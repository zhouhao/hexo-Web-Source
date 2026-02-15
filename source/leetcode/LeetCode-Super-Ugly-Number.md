title: 'LeetCode: Super Ugly Number'
date: 2016-06-25 20:03:22
---

Write a program to find the nth super ugly number.

Super ugly numbers are positive numbers whose all prime factors are in the given prime list primes of size k. For example, [1, 2, 4, 7, 8, 13, 14, 16, 19, 26, 28, 32] is the sequence of the first 12 super ugly numbers given primes = [2, 7, 13, 19] of size 4.

### Note:
1. 1 is a super ugly number for any given primes.
2. The given numbers in primes are in ascending order.
3. 0 < k ≤ 100, 0 < n ≤ 106, 0 < primes[i] < 1000.
4. The nth super ugly number is guaranteed to fit in a 32-bit signed integer.

```java
public class Solution {
    public int nthSuperUglyNumber(int n, int[] primes) {
            if (n < 1 || primes == null || primes.length == 0) {
            return 0;
        }
        if (n == 1) {
            return 1;
        }

        int size = primes.length;
        int[] pos = new int[size];

        int[] dict = new int[n];
        dict[0] = 1;
        for (int i = 1; i < n; i++) {
            int[] result = getBatchResult(pos, primes, dict);
            int minPos = findMinIndex(result);
            pos[minPos]++;
            if (i > 0 && result[minPos] == dict[i - 1]) {
                i--;
                continue;
            }
            dict[i] = result[minPos];
        }

        return dict[n - 1];
    }

    private int[] getBatchResult(int[] pos, int[] primes, int[] dict) {
        int[] result = new int[primes.length];
        for (int i = 0; i < primes.length; i++) {
            result[i] = primes[i] * dict[pos[i]];
        }
        return result;
    }

    private int findMinIndex(int[] arr) {
        int min = 0;
        for (int i = 1; i < arr.length; i++) {
            if (arr[min] > arr[i]) {
                min = i;
            }
        }
        return min;
    }
}
```