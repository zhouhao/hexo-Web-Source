title: 'LeetCode: Maximum Distance in Arrays'
date: 2017-08-30 20:03:22
---

Given m arrays, and each array is sorted in ascending order. Now you can pick up two integers from two different arrays (each array picks one) and calculate the distance. We define the distance between two integers a and b to be their absolute difference |a-b|. Your task is to find the maximum distance.

### Example 1:
```
Input:
[[1,2,3],
 [4,5],
 [1,2,3]]
Output: 4
Explanation:
One way to reach the maximum distance 4 is to pick 1 in the first or third array and pick 5 in the second array.
```
#### Note:
1. Each given array will have at least 1 number. There will be at least two non-empty arrays.
2. The total number of the integers in all the m arrays will be in the range of [2, 10000].
3. The integers in the m arrays will be in the range of [-10000, 10000].

```java
public class Solution {
    public int maxDistance(List<List<Integer>> arrays) {
        int result = 0;
        int start = arrays.get(0).get(0);
        int end = arrays.get(0).get(arrays.get(0).size() - 1);
        for (int i = 1; i < arrays.size(); i++) {
            List<Integer> l = arrays.get(i);
            int max = Math.max(Math.abs(l.get(0) - end), Math.abs(l.get(l.size() - 1) - start));
            result = Math.max(result, max);
            start = Math.min(start, l.get(0));
            end = Math.max(end, l.get(l.size() - 1));
        }
        return result;
    }
}
```
