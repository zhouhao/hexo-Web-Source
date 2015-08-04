title: 'LeetCode: Merge Sorted Array'
date: 2015-06-24 00:03:22
---

```java

/**
 * Description:
 *
 * @author hzhou
 */
public class MergeSortedArray {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int i = m - 1;
        while (i >= 0) {
            nums1[n + i] = nums1[i];
            i--;
        }
        int a = n;
        int b = 0;
        i = 0;
        while (a < m + n && b < n) {
            if (nums1[a] <= nums2[b]) {
                nums1[i++] = nums1[a++];
            } else {
                nums1[i++] = nums2[b++];
            }
        }
        while (a < m + n) {
            nums1[i++] = nums1[a++];
        }
        while (b < n) {
            nums1[i++] = nums2[b++];
        }
    }
}
```
