title: 'LeetCode: Shortest Palindrome'
date: 2015-06-23 21:37:43
tags:
---
Find all possible combinations of `k` numbers that add up to a number `n`, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.   
Ensure that numbers within the set are sorted in ascending order.


### Example 1:
Input: `k = 3, n = 7`    
Output:   
```
[[1,2,4]]
```

### Example 2:
Input: `k = 3, n = 9`   
Output:   
```
[[1,2,6], [1,3,5], [2,3,4]]
```

```java
public class ShortestPalindrome {
    public String shortestPalindrome(String s) {
        if (s == null || s.length() < 2) {
            return s;
        }

        String r = new StringBuilder(s).reverse().toString();

        for (int i = 0; i < s.length(); i++) {
            if (s.startsWith(r.substring(i))) {
                return r.substring(0, i) + s;
            }
        }

        return s;
    }
}
```