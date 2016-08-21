title: 'LeetCode: Max Points on a Line'
date: 2015-06-24 00:03:22
---
 
```java

/**
 * Created by hzhou on 2015/6/1. Email: codeashobby@gmail.com
 */
public class MaxPointsOnALine {
    public int maxPoints(Point[] points) {
        if (points == null || points.length == 0) {
            return 0;
        }
        if (points.length < 3) {
            return points.length;
        }
        int globalMax = 0;
        Map<Double, Integer> map = new HashMap<Double, Integer>();
        for (int i = 0; i < points.length; i++) {
            map.clear();
            int localMax = 0;
            int samePoints = 0;
            Point p1 = points[i];
            for (int j = i + 1; j < points.length; j++) {
                Point p2 = points[j];
                double slope = 0;
                if (p1.x == p2.x && p1.y == p2.y) {
                    samePoints++;
                    continue; // this is important
                } else if (p1.y == p2.y) {
                    slope = 0;
                } else if (p1.x == p2.x) {
                    slope = Double.MAX_VALUE;
                } else {
                    slope = (p1.y * 1.0 - p2.y) / (p1.x * 1.0 - p2.x);
                }
                if (map.containsKey(slope)) {
                    map.put(slope, map.get(slope) + 1);
                    localMax = Math.max(localMax, map.get(slope));
                } else {
                    map.put(slope, 1);
                    if (localMax == 0) {
                        localMax = 1;
                    }
                }
            }
            globalMax = Math.max(globalMax, localMax + samePoints + 1);
        }
        return globalMax;
    }
}
```
