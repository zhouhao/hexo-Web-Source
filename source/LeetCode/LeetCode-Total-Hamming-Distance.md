title: 'LeetCode: Total Hamming Distance'
date: 2017-08-30 20:03:22
---

The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Now your job is to find the total Hamming distance between all pairs of the given numbers.

### Example:
```
Input: 4, 14, 2

Output: 6

Explanation: In binary representation, the 4 is 0100, 14 is 1110, and 2 is 0010 (just
showing the four bits relevant in this case). So the answer will be:
HammingDistance(4, 14) + HammingDistance(4, 2) + HammingDistance(14, 2) = 2 + 2 + 2 = 6.
```
#### Note:
1. Elements of the given array are in the range of 0 to 10^9
2. Length of the array will not exceed 10^4.


```java
public class Solution {
    public int totalHammingDistance(int[] nums) {
        if (nums == null || nums.length < 2) return 0;

        int result = 0;
        for (int i = 0; i < 32; i++) {
            int cnt = 0;
            for (int n : nums) {
                cnt += (n >> i) & 1;
            }
            result += (nums.length - cnt) * cnt;
        }
        return result;
    }
}
```
