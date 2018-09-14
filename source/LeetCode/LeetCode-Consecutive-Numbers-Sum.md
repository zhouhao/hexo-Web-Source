title: 'LeetCode: Consecutive Numbers Sum'
date: 2018-06-25 20:03:22
---
### [829\. Consecutive Numbers Sum](https://leetcode.com/problems/consecutive-numbers-sum/description/)

Difficulty: **Medium**



Given a positive integer `N`, how many ways can we write it as a sum of consecutive positive integers?

**Example 1:**

```
Input: 5
Output: 2
Explanation: 5 = 5 = 2 + 3
```
**Example 2:**

```
Input: 9
Output: 3
Explanation: 9 = 9 = 4 + 5 = 2 + 3 + 4
```
**Example 3:**

```
Input: 15
Output: 4
Explanation: 15 = 15 = 8 + 7 = 4 + 5 + 6 = 1 + 2 + 3 + 4 + 5

Note: `1 <= N <= 10 ^ 9`.
```

#### Solution
根据题目，我们可以有
```
N = (x+1)+(x+2)+...+(x+k) = 1/2 * ((x+1)+(x+k))*k
```
于是我们可以得到
```java
2*x = 2*N/k - (k + 1)  // Note: 2*x是整数，(k+1)也是整数，所有(2*N/k)也应该是整数 
```
因为x为非负数，所以上述等式右边肯定大于0
```
2*N/k - k - 1 >= 0
-> 2*N/k - k > 0
-> 2*N > k*k
-> k <= (int)Math.sqrt(2*N) // 因为取整了，这边要变成 `<=` 
```

Language: **Java**

```java
class Solution {
    public int consecutiveNumbersSum(int N) {
        int result = 0;
        for (int i = 1; i <= (int) Math.sqrt(2 * N); i++) {
            if ((2 * N % i) != 0) continue;
            int x = 2 *N / i - i - 1;
            if (x % 2 == 0 && x >= 0) {
                result++;
            }
        }
        return result;
    }
}
```