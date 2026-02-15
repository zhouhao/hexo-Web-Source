title: 'LeetCode: Subsets II'
date: 2015-06-24 00:03:22
---
 
```java

/**
 * Description:
 *
 * @author hzhou
 */
public class SubsetsII {
    public List<List<Integer>> subsetsWithDup(int[] nums) {
        List<List<Integer>> result = new ArrayList<List<Integer>>();
        if (nums == null || nums.length == 0) {
            return result;
        }
        Arrays.sort(nums);
        helper(0, new ArrayList<Integer>(), result, nums);
        return new ArrayList<List<Integer>>(new HashSet<List<Integer>>(result));
    }
    private void helper(int start, List<Integer> crt, List<List<Integer>> result, int[] nums) {
        if (start == nums.length) {
            result.add(new ArrayList<Integer>(crt));
            return;
        }
        helper(start + 1, new ArrayList<Integer>(crt), result, nums);
        crt.add(nums[start]);
        helper(start + 1, new ArrayList<Integer>(crt), result, nums);
    }
    @Test
    public void test() {
        int[] nums = new int[]{1, 2, 2};
        List<List<Integer>> result = subsetsWithDup(nums);
    }
}
```
