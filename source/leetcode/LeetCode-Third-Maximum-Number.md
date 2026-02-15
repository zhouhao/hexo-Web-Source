title: 'LeetCode: Third Maximum Number'
date: 2017-08-30 20:03:22
---

Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

### Example 1:
```
Input: [3, 2, 1]

Output: 1

Explanation: The third maximum is 1.
```
### Example 2:
```
Input: [1, 2]

Output: 2

Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
```

### Example 3:
```
Input: [2, 2, 3, 1]

Output: 1

Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.
```

```java
public class Solution {
    public int thirdMax(int[] nums) {
        PriorityQueue<Integer> queue = new PriorityQueue<>(3, Integer::compareTo);

        for (int i : nums) {
            if (queue.contains(i)) continue;
            if (queue.size() < 3 || i > queue.peek()) {
                if (queue.size() > 2) {
                    queue.poll();
                }
                queue.add(i);
            }
        }
        if (queue.size() == 3) return queue.poll();
        while (queue.size() > 1) {
            queue.poll();
        }
        return queue.peek();
    }
}
```
