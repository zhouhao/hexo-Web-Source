title: 'LeetCode: Perfect Number'
date: 2017-08-30 20:03:22
---

We define the Perfect Number is a positive integer that is equal to the sum of all its positive divisors except itself.

Now, given an integer n, write a function that returns true when it is a perfect number and false when it is not.
### Example:
```
Input: 28
Output: True
Explanation: 28 = 1 + 2 + 4 + 7 + 14
```
**Note**: The input number n will not exceed 100,000,000. (1e8)


```java
public class Solution {
    public boolean checkPerfectNumber(int num) {
        if (num < 2) return false;
        int sqrt = (int) Math.sqrt(num);
        int result = 1;
        for (int i = 2; i <= sqrt; i++) {
            if (num % i == 0) {
                result += i + (num / i);
            }
        }
        if (sqrt * sqrt == num) {
            result -= sqrt;
        }

        return result == num;
    }
}
```
