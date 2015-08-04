title: 'LeetCode: Maximum Gap'
date: 2015-06-24 00:03:22
---

```java

/**
 * Created by hzhou on 2015/6/7.
 * Email: i@hzhou.me
 */
public class MaximumGap {
    public int maximumGap(int[] nums) {
        if (nums == null || nums.length < 2) {
            return 0;
        }
        int max, min;
        max = min = nums[0];
        for (int i : nums) {
            max = Math.max(max, i);
            min = Math.min(min, i);
        }
        int length = nums.length;
        double interval = length * 1.0 / (max - min);
        int index = 0;
        Bucket[] buckets = new Bucket[length + 1];
        while (index <= length) {
            buckets[index++] = new Bucket();
        }
        for (int n : nums) {
            int i = (int) (interval * (n - min));
            buckets[i].min = Math.min(buckets[i].min, n);
            buckets[i].max = Math.max(buckets[i].max, n);
        }
        int pre = buckets[0].max;
        int result = 0;
        for (Bucket b : buckets) {
            if (b.max != Integer.MIN_VALUE) {
                result = Math.max(result, b.min - pre);
                pre = b.max;
            }
        }
        return result;
    }
    static class Bucket {
        int min, max;
        Bucket() {
            this.min = Integer.MAX_VALUE;
            this.max = Integer.MIN_VALUE;
        }
    }
    @Test
    public void test() {
        int[] nums = new int[]{1, 10000000};
        maximumGap(nums);
    }
}
```
