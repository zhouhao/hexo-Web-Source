title: 'LeetCode: Top K Frequent Elements'
date: 2016-06-25 20:03:22
---
Given a non-empty array of integers, return the k most frequent elements.

For example,
Given [1,1,1,2,2,3] and k = 2, return [1,2].

```java
public class Solution {
    public List<Integer> topKFrequent(int[] nums, int k) {
         Map<Integer, Integer> map = new TreeMap<>();
         Arrays.stream(nums).forEach(x -> map.put(x, map.containsKey(x) ? map.get(x) + 1 : 1));
         return map.entrySet().stream()
                .sorted((o1, o2) -> o2.getValue() - o1.getValue())
                .map(Map.Entry::getKey)
                .limit(k)
                .collect(Collectors.toList());
    }
}
```