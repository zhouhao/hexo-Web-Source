title: 'LeetCode: Merge Intervals'
date: 2015-06-24 00:03:22
---
 Given intervals => merged intervals:
```
[                     [
  [1, 3],               [1, 6],
  [2, 6],      =>       [8, 10],
  [8, 10],              [15, 18]
  [15, 18]            ]
]
```
```java
public class MergeIntervals {
    public List<Interval> merge(List<Interval> intervals) {
        List<Interval> result = new ArrayList<Interval>();
        if (intervals == null || intervals.isEmpty()) {
            return result;
        }
        if (intervals.size() == 1) {
            return intervals;
        }
        Collections.sort(intervals, new Comparator<Interval>() {
            public int compare(Interval o1, Interval o2) {
                return o1.start - o2.start;
            }
        });
        Interval in = intervals.get(0);
        for (int i = 1; i < intervals.size(); i++) {
            Interval crt = intervals.get(i);
            if (in.end >= crt.start) {
                if (in.end < crt.end) {
                    in.end = crt.end;
                }
            } else {
                result.add(in);
                in = crt;
            }
        }
        if(!result.contains(in)) {
            result.add(in);
        }
        return result;
    }
}
```
