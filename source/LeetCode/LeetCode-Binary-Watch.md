title: 'LeetCode: Binary Watch'
date: 2017-08-30 20:03:22
---

A binary watch has 4 LEDs on the top which represent the hours (0-11), and the 6 LEDs on the bottom represent the minutes (0-59).

Each LED represents a zero or one, with the least significant bit on the right.

See the picture here: https://leetcode.com/problems/binary-watch/description/
For example, the above binary watch reads "3:25".

Given a non-negative integer n which represents the number of LEDs that are currently on, return all possible times the watch could represent.

### Example:
```
Input: n = 1
Return: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16", "0:32"]
```

#### Note:
1. The order of output does not matter.
2. The hour must not contain a leading zero, for example "01:00" is not valid, it should be "1:00".
3. The minute must be consist of two digits and may contain a leading zero, for example "10:2" is not valid, it should be "10:02".


```java
public class Solution {
    public List<String> readBinaryWatch(int num) {
        if (num < 0 || num > 10) return null;

        List<String> result = new ArrayList<>();

        for (int i = Math.max(0, num - 6); i < Math.min(num+1, 4); i++) {
            Set<Integer> hours = new HashSet<>();
            helper(hours, new int[]{1, 2, 4, 8}, 0, 0, i, 0);

            Set<Integer> minutes = new HashSet<>();
            helper(minutes, new int[]{1, 2, 4, 8, 16, 32}, 0, 0, num - i, 0);

            for (int x : hours) {
                if(x>11) continue;
                for (int y : minutes) {
                    if(y>59) continue;
                    result.add(x + ":" + (y < 10 ? "0" + y : y));
                }
            }
        }
        Collections.sort(result);
        return result;
    }

    public void helper(Set<Integer> result, int[] nums, int num, int start, int total, int count) {
        if (count == total) {
            result.add(num);
            return;
        }

        for (int i = start; i < nums.length; i++) {
            int c = nums[i];
            if ((num & c) == 0) {
                helper(result, nums, num | c, start + 1, total, count + 1);
            }
            helper(result, nums, num, start + 1, total, count);
        }
    }
}
```
