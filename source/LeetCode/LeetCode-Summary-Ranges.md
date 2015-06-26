title: 'LeetCode: Summary Ranges'
date: 2015-06-25 21:13:08
tags:
 - LeetCode
---
<hr/>
Given a sorted integer array without duplicates, return the summary of its ranges.<br/>
For example, given `[0,1,2,4,5,7]`, return `["0->2","4->5","7"]`.

```java
public class SummaryRanges {
    public List<String> summaryRanges(int[] nums) {
        List<String> result = new ArrayList<String>();
        if(nums == null || nums.length == 0) {
            return result;
        }

        int head, last;
        head = last = nums[0];
        for(int i = 1; i < nums.length;i++) {
            int x = nums[i];
            if(last+1 != x) {
                result.add(helper(head, last));
                head = last = x;
            } else {
                last = x;
            }
        }
        // do not forget the last pair
        result.add(helper(head, last));
        return result;
    }

    private String helper(int a, int b) {
        if(a == b) {
            return a +"";
        } else {
            return a+"->"+b;
        }
    }
}
```
