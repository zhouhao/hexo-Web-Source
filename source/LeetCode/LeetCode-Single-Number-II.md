title: 'LeetCode: Single Number II'
date: 2015-06-24 00:03:22
---
Given an array of integers, every element appears three times except for one. Find that single one.

### Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

```java
public class SingleNumberII {
    public int singleNumber(int[] nums) {
        int ones = 0, twos = 0, threes = 0;
        for (int num : nums) {
            twos |= ones & num;
            ones ^= num;
            threes = ones & twos;
            ones &= ~threes;
            twos &= ~threes;
        }
        return ones;
    }
}
```

The truth is that I cannot understand this logic easily. I used those two links for details.
* http://www.programcreek.com/2014/03/leetcode-single-number-ii-java/
* http://www.acmerblog.com/leetcode-single-number-ii-5394.html
