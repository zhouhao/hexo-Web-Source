title: 'LeetCode: Combinations'
date: 2015-06-24 00:03:22
---
```java

/**
 * Description:
 * <p/>
 * Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.
 * <p/>
 * For example, If n = 4 and k = 2, a solution is:
 * <pre>
 * [
 * [2,4],
 * [3,4],
 * [2,3],
 * [1,2],
 * [1,3],
 * [1,4],
 * ]
 * </pre>
 *
 * @author hzhou
 */
public class Combinations {
    public List<List<Integer>> combine(int n, int k) {
        List<List<Integer>> result = new ArrayList<List<Integer>>();
        if (n < 1 || k > n) {
            return result;
        }
        helper(0, 1, k, n, result, new ArrayList<Integer>());
        return result;
    }
    private void helper(int count, int start, int k, int n, List<List<Integer>> result, List<Integer> crt) {
        if (count == k) {
            result.add(new ArrayList<Integer>(crt));
            return;
        }
        for (int i = start; i <= n; i++) {
            crt.add(i);
            helper(count + 1, i + 1, k, n, result, crt);
            crt.remove(crt.size() - 1);
        }
    }
}
```
