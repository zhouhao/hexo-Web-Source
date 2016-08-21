title: 'LeetCode: Sort Colors'
date: 2015-06-24 00:03:22
---
 Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

```java
public class SortColors {
  public void sortColors(int[] nums) {
    if(nums == null || nums.length < 2) {
      return;
    }

    int[] counter = new int[3];
    for(int i : nums) {
      counter[i]++;
    }

    int index = 0;
    for(int i = 0; i < 3;i++) {
      int count = counter[i];
      while(count > 0) {
        nums[index++] = i;
        count--;
      }
    }
  }
}
```
