title: 'LeetCode: Permutations II'
date: 2015-06-24 00:03:22
---

```java

/**
 * Description: Given a collection of numbers that might contain duplicates, return all possible unique permutations.
 * <p/>
 * For example, [1,1,2] have the following unique permutations: [1,1,2], [1,2,1], and [2,1,1].
 *
 * @author hzhou
 */
public class PermutationsII {
    public List<List<Integer>> permuteUnique(int[] nums) {
        List<List<Integer>> result = new ArrayList<List<Integer>>();
        if (nums == null || nums.length == 0) {
            return result;
        }
        Arrays.sort(nums);
        boolean[] visited = new boolean[nums.length];
        helper(nums, result, new ArrayList<Integer>(), visited);
        return result;
    }
    private void helper(int[] nums, List<List<Integer>> result, List<Integer> crt, boolean[] visited) {
        if (crt.size() >= nums.length) {
            result.add(new ArrayList<Integer>(crt));
            return;
        }
        for (int i = 0; i < nums.length; i++) {
            if (visited[i] || (i > 0 && nums[i] == nums[i - 1] && !visited[i - 1])) {
                continue;
            }
            crt.add(nums[i]);
            visited[i] = true;
            helper(nums, result, crt, visited);
            visited[i] = false;
            crt.remove(crt.size() - 1);
        }
    }
}
```
