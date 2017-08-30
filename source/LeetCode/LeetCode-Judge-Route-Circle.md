title: 'LeetCode: Judge Route Circle'
date: 2017-08-30 20:03:22
---

Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.

The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R (Right), L (Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.

### Example 1:
```
Input: "UD"
Output: true
```
### Example 2:
```
Input: "LL"
Output: false
```

```java
class Solution {
    public boolean judgeCircle(String moves) {
        if (moves == null || moves.isEmpty()) {
            return false;
        }

        int[] start = {0, 0};
        for (char c : moves.toCharArray()) {
            switch (c) {
                case 'R':
                    start[1]++;
                    break;
                case 'L':
                    start[1]--;
                    break;
                case 'U':
                    start[0]--;
                    break;
                case 'D':
                    start[0]++;
                    break;
                default:
            }

        }
        return start[0] == 0 && start[1] == 0;
    }
}
```
