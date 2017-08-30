title: 'LeetCode: Number of Boomerangs'
date: 2017-08-30 20:03:22
---

Given n points in the plane that are all pairwise distinct, a "boomerang" is a tuple of points (i, j, k) such that the distance between i and j equals the distance between i and k (the order of the tuple matters).

Find the number of boomerangs. You may assume that n will be at most 500 and coordinates of points are all in the range [-10000, 10000] (inclusive).

### Example:
```
Input:
[[0,0],[1,0],[2,0]]

Output:
2

Explanation:
The two boomerangs are [[1,0],[0,0],[2,0]] and [[1,0],[2,0],[0,0]]
```

```java
public class Solution {
    public int numberOfBoomerangs(int[][] points) {
        if (points == null || points.length < 3) {
            return 0;
        }

        int result = 0;

        for (int[] p : points) {
            Map<Integer, Integer> dict = new HashMap<>();
            for (int[] q : points) {
                if (p == q) {
                    continue;
                }
                int dist = (p[0] - q[0]) * (p[0] - q[0]) + (p[1] - q[1]) * (p[1] - q[1]);
                dict.put(dist, dict.getOrDefault(dist, 0) + 1);
            }
            result += dict.values().stream()
                    .filter(x -> x > 1)
                    .map(x -> x * (x - 1))
                    .mapToInt(Integer::intValue)
                    .sum();
        }

        return result;
    }
}
```
