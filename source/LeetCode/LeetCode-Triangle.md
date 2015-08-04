title: 'LeetCode: Triangle'
date: 2015-06-24 00:03:22
---

```java

/**
 * Created by hzhou on 5/6/15. codeashobby@gmail.com
 */
public class Triangle {
    public int minimumTotal(List<List<Integer>> triangle) {
        if (triangle == null || triangle.isEmpty()) {
            return 0;
        }
        int size = triangle.size();
        int[] result = new int[size];
        for (int i = 0; i < size; i++) {
            result[i] = triangle.get(size - 1).get(i);
        }
        for (int i = triangle.size() - 2; i >= 0; i--) {
            int s = triangle.get(i).size();
            for (int j = 0; j < s; j++) {
                result[j] = triangle.get(i).get(j) + Math.min(result[j], result[j + 1]);
            }
        }
        return result[0];
    }
}
```
