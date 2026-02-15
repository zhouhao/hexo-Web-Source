title: 'LeetCode: Ugly Number II'
date: 2016-06-25 20:03:22
---

Write a program to check whether a given number is an ugly number.

Ugly numbers are positive numbers whose prime factors only include `2, 3, 5`. For example, `6, 8` are ugly while `14` is not ugly since it includes another prime factor `7`.

Note that `1` is typically treated as an ugly number.

```java
public class Solution {
    public boolean isUgly(int num) {
        if(num <1) {
            return false;
        }
        if(num == 1) {
            return true;
        }
        
        while(num % 5 == 0) {
            num /= 5;
        }
        
        while(num % 3 == 0) {
            num /= 3;
        }
        
        while(num % 2 == 0) {
            num /= 2;
        }
        
        return num == 1;
    }
}
```