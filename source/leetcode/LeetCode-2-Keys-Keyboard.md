title: 'LeetCode: 2 Keys Keyboard'
date: 2017-08-30 20:03:22
---
Initially on a notepad only one character 'A' is present. You can perform two operations on this notepad for each step:

1. `Copy All`: You can copy all the characters present on the notepad (partial copy is not allowed).
2. `Paste`: You can paste the characters which are copied last time.

Given a number n. You have to get exactly n 'A' on the notepad by performing the minimum number of steps permitted. Output the minimum number of steps to get n 'A'.

### Example 1:
```
Input: 3
Output: 3
Explanation:
Intitally, we have one character 'A'.
In step 1, we use Copy All operation.
In step 2, we use Paste operation to get 'AA'.
In step 3, we use Paste operation to get 'AAA'.
```
#### Note:
1. The n will be in the range [1, 1000].

```java
class Solution {
    public int minSteps(int n) {
        int result = n;
        if(n==1) return 0;
        for (int i = n - 1; i > 1; i--) {
            if (n % i == 0) {
                result = Math.min(result, minSteps(i) + n / i);
            }
        }
        return result;
    }
}
```
