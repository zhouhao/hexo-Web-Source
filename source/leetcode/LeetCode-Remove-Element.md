title: 'LeetCode: Remove Element'
date: 2015-06-24 00:03:22
---
 
```java

/**
 * Description: Given an array and a value, remove all instances of that value in place and return the new length.
 * <p/>
 * The order of elements can be changed. It doesn't matter what you leave beyond the new length.
 *
 * @author hzhou
 */
public class RemoveElement {
    public int removeElement(int[] nums, int val) {
        if (nums == null || nums.length == 0) {
            return 0;
        }
        int crt = 0;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != val) {
                nums[crt++] = nums[i];
            }
        }
        return crt;
    }
    @Test
    public void test() {
        int[] nums = new int[]{1, 1};
        int result = removeElement(nums, 1);
    }
}
```
