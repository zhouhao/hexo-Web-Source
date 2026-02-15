title: 'LeetCode: Median of Two Sorted Arrays'
date: 2015-06-24 00:03:22
---
 
```java

/**
 * Created by hzhou on 5/20/15. codeashobby@gmail.com
 */
public class MedianOfTwoSortedArrays {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        if ((nums1 == null || nums1.length == 0) && (nums2 == null || nums2.length == 0)) {
            return 0;
        }
        int totalLength = nums1.length + nums2.length;
        if (totalLength % 2 == 0) {
            return (findNumber(0, 0, totalLength / 2, nums1, nums2) + findNumber(0, 0, totalLength / 2 + 1, nums1, nums2)) / 2.0;
        } else {
            return findNumber(0, 0, totalLength / 2 + 1, nums1, nums2);
        }
    }
    private int findNumber(int startA, int startB, int offSet, int[] nums1, int[] nums2) {
        if (startA >= nums1.length) {
            return nums2[startB + offSet - 1];
        }
        if (startB >= nums2.length) {
            return nums1[startA + offSet - 1];
        }
        if (offSet == 1) {
            return Math.min(nums1[startA], nums2[startB]);
        }
        int a = Integer.MAX_VALUE;
        int b = Integer.MAX_VALUE;
        if (startA + offSet / 2 - 1 < nums1.length) {
            a = nums1[startA + offSet / 2 - 1];
        }
        if (startB + offSet / 2 - 1 < nums2.length) {
            b = nums2[startB + offSet / 2 - 1];
        }
        if (a > b) {
            //return findNumber(startA, startB + offSet / 2, offSet / 2, nums1, nums2);
            return findNumber(startA, startB + offSet / 2, offSet - offSet / 2, nums1, nums2);
        } else {
            return findNumber(startA + offSet / 2, startB, offSet - offSet / 2, nums1, nums2);
        }
    }
}
```
