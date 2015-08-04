title: 'LeetCode: Subsets'
date: 2015-06-24 00:03:22
---

```java

import static org.junit.Assert.assertSame;
/**
 * Created by zhouhao on 5/20/2015.
 */
public class Subsets {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> result = new ArrayList<List<Integer>>();
        if (nums == null || nums.length == 0) {
            return result;
        }
        Arrays.sort(nums);
        helper(0, result, new ArrayList<Integer>(), nums);
        return result;
    }
    private void helper(int start, List<List<Integer>> result, List<Integer> crt, int[] nums) {
        if (start >= nums.length) {
            result.add(crt);
            return;
        }
        helper(start + 1, result, new ArrayList<Integer>(crt), nums);
        crt.add(nums[start]);
        helper(start + 1, result, new ArrayList<Integer>(crt), nums);
    }
    @Test
    public void test() {
        int[] nums = new int[]{1, 2, 3};
        List<List<Integer>> result = subsets(nums);
        assertSame(8, result.size());
    }
}
```
