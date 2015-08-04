title: 'LeetCode: Count Primes'
date: 2015-06-23 21:39:39
tags:
---
```java
public class CountPrimes {

    public int countPrimes(int n) {
        if (n < 2) {
            return 0;
        }
        boolean[] noPri = new boolean[n];
        noPri[0] = true;
        noPri[1] = true;
        for (int i = 2; i * i < n; i++) {
            if (!noPri[i]) {
                int c = i * i;
                while (c < n) {
                    noPri[c] = true;
                    c += i;
                }
            }
        }

        int result = 0;
        for (int i = 0; i < n; i++) {
            if (!noPri[i]) {
                result++;
            }
        }
        return result;
    }
}
```