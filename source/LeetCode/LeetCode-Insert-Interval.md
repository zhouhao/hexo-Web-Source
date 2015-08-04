title: 'LeetCode: Insert Interval'
date: 2015-06-24 00:03:22
---

```java

/**
 * Description:
 *
 * @author hzhou
 */
public class InsertInterval {
    public List<Interval> insert(List<Interval> intervals, Interval newInterval) {
        List<Interval> result = new ArrayList<Interval>();
        if (intervals == null || intervals.isEmpty() || (newInterval.start <= intervals.get(0).start
                && newInterval.end >= intervals.get(intervals.size() - 1).end)) {
            if (newInterval != null) {
                result.add(newInterval);
            }
            return result;
        }
        if (newInterval.start == intervals.get(intervals.size() - 1).end) {
            intervals.get(intervals.size() - 1).end = newInterval.end;
            return intervals;
        }
        if (newInterval.end == intervals.get(0).start) {
            intervals.get(0).start = newInterval.start;
            return intervals;
        }
        if (newInterval.start > intervals.get(intervals.size() - 1).end) {
            intervals.add(newInterval);
            return intervals;
        }
        if (newInterval.end < intervals.get(0).start) {
            intervals.add(0, newInterval);
            return intervals;
        }
        int start = Integer.MIN_VALUE;
        int end = Integer.MIN_VALUE;
        for (int i = 0; i < intervals.size(); i++) {
            Interval tmp = intervals.get(i);
            if (tmp.start <= newInterval.start && tmp.end >= newInterval.start) {
                start = i;
            }
            if (tmp.start <= newInterval.end && tmp.end >= newInterval.end) {
                end = i;
            }
            if (start == Integer.MIN_VALUE && newInterval.start < tmp.start) {
                start = -i;
            }
            if (end == Integer.MIN_VALUE && newInterval.end < tmp.start) {
                end = -i;
            }
        }
        if (end == Integer.MIN_VALUE && intervals.get(intervals.size() - 1).end < newInterval.end) {
            intervals.get(intervals.size() - 1).end = newInterval.end;
        }
        if (start < 0 && end == start) {
            intervals.add(-start, newInterval);
            return intervals;
        }
        if (start <= 0 && intervals.get(-start).start > newInterval.start) {
            intervals.get(-start).start = newInterval.start;
        }
        intervals.get(Math.abs(start)).end = (end < 0) ? newInterval.end : intervals.get(end).end;
        start = Math.abs(start);
        end = end < 0 ? -end - 1 : end;
        for (int i = 0; i < intervals.size(); i++) {
            if (i <= start || i > end) {
                result.add(intervals.get(i));
            }
        }
        return result;
    }
    @Test
    public void test() {
        List<Interval> intervals = new ArrayList<Interval>();
        intervals.add(new Interval(1, 5));
        //intervals.add(new Interval(6, 8));
        Interval newInterval = new Interval(2, 3);
        List<Interval> result = insert(intervals, newInterval);
    }
}
```
