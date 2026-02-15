title: 'LeetCode: Candy'
date: 2015-06-24 00:03:22
---
 ### Description:
There are `N` children standing in a line. Each child is assigned a rating value.

You are giving candies to these children subjected to the following requirements:

Each child must have at least one candy. Children with a higher rating get more candies than their neighbors. What is the minimum candies you must give?

```java
/**
 * http://www.programcreek.com/2014/03/leetcode-candy-java/
 *
 */
public class Candy {
    public int candy(int[] ratings) {
        if (ratings == null || ratings.length == 0) {
            return 0;
        }
        int[] count = new int[ratings.length];
        for (int i = 0; i < count.length; i++) {
            count[i] = 1;
        }
        for (int i = 1; i < ratings.length; i++) {
            if (ratings[i] > ratings[i - 1]) {
                count[i] = count[i - 1] + 1;
            }
        }
        int result = 0;
        for (int i = ratings.length - 2; i >= 0; i--) {
            if (ratings[i] > ratings[i + 1]) {
                count[i] = Math.max(count[i], count[i + 1] + 1);
            }
        }
        for (int i : count) {
            result += i;
        }
        return result;
    }
}
```
