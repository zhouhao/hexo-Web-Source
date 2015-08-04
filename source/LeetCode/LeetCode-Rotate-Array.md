title: 'LeetCode: Rotate Array'
date: 2015-06-24 00:03:22
---

```java

/**
 * Created by hzhou on 4/22/15. codeashobby@gmail.com
 */
public class RotateArray {
    public void rotate(int[] nums, int k) {
        if (nums == null || nums.length < 2) {
            return;
        }
        k = k % nums.length;
        int[] tmp = new int[k];
        System.arraycopy(nums, nums.length - k, tmp, 0, k);
        System.arraycopy(nums, 0, nums, k, nums.length - k);
        System.arraycopy(tmp, 0, nums, 0, k);
    }
}
```
