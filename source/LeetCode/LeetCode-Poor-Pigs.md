title: 'LeetCode: Poor Pigs'
date: 2017-08-30 20:03:22
---

There are 1000 buckets, one and only one of them contains poison, the rest are filled with water. They all look the same. If a pig drinks that poison it will die within 15 minutes. What is the minimum amount of pigs you need to figure out which bucket contains the poison within one hour.

Answer this question, and write an algorithm for the follow-up general case.


```java
public class Solution {
    public int poorPigs(int buckets, int minutesToDie, int minutesToTest) {
        int round = minutesToTest / minutesToDie;
        return (int) Math.ceil(Math.log(buckets) / Math.log(round + 1));
    }
}
```
