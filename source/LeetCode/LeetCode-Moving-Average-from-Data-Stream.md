title: 'LeetCode: Moving Average from Data Stream'
date: 2016-06-25 20:03:22
---

Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.

For example,
```
MovingAverage m = new MovingAverage(3);
m.next(1) = 1
m.next(10) = (1 + 10) / 2
m.next(3) = (1 + 10 + 3) / 3
m.next(5) = (10 + 3 + 5) / 3
```

```java
public class MovingAverage {

    private int size;
    private Queue<Integer> queue;

    public MovingAverage(int size) {
        this.queue = new LinkedList<>();
        this.size = size;
    }

    public double next(int val) {
        queue.add(val);
        if (queue.size() > this.size) {
            queue.poll();
        }

        int sum = 0;
        for (int i : queue) {
            sum += i;
        }
        return 1.0 * sum / this.size;
    }
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * MovingAverage obj = new MovingAverage(size);
 * double param_1 = obj.next(val);
 */
``` 