title: 'LeetCode: Remove Duplicates from Sorted Array II'
date: 2015-06-24 00:03:22
tags:
 - LeetCode
---
<hr/>    

```java

/**
 * Created by hzhou on 2015/5/27.
 * Email: codeashobby@gmail.com
 * <p>
 * Given sorted array nums = [1,1,1,2,2,3],
 * <p>
 * Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3.
 * It doesn't matter what you leave beyond the new length.
 */
public class RemoveDuplicatesFromSortedArrayII {
    public int removeDuplicates(int[] nums) {
        if (nums == null) {
            return 0;
        }
        if (nums.length < 3) {
            return nums.length;
        }
        int crtVal = nums[0];
        int crtCount = 1;
        int length = 1;
        for (int i = 1; i < nums.length; i++) {
            int crt = nums[i];
            nums[length++] = crt;
            if (crt == crtVal) {
                crtCount++;
                while (crtCount >= 2 && i < nums.length && nums[i] == crtVal) {
                    i++;
                }
                i--;
            } else {
                crtVal = crt;
                crtCount = 1;
            }
        }
        return length;
    }
    @Test
    public void test() {
        int[] nums = new int[]{1, 1, 1};
        int result = removeDuplicates(nums);
    }
}
```
