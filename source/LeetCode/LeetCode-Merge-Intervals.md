title: 'LeetCode: Merge Intervals'
date: 2015-06-24 00:03:22
tags:
 - LeetCode
---
<hr/>    

```java

/**
 * Created by hzhou on 2015/5/21.
 * Email: codeashobby@gmail.com
 */
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
    @Test
    public void test() {
        List<Interval> list = new ArrayList<Interval>();
        /**/
        list.add(new Interval(1, 3));
        list.add(new Interval(2, 6));
        list.add(new Interval(8, 10));
        list.add(new Interval(15, 18));
        /**/
        /*
        list.add(new Interval(1, 4));
        list.add(new Interval(4, 5));
        */
        /*
        list.add(new Interval(1, 4));
        list.add(new Interval(0, 2));
        list.add(new Interval(3, 5));
        */
        List<Interval> result = merge(list);
    }
}
```
