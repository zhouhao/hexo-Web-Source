title: 'LeetCode: Combination Sum III'
date: 2015-06-23 21:37:19
tags:
---
Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.

```java
public class CombinationSumIII {

    public List<List<Integer>> combinationSum3(int k, int n) {
        List<List<Integer>> result = new ArrayList<List<Integer>>();
        if (k < 0 || n <= 0 || n < k || n > 9 * k) {
            return result;
        }
        helper(0, k, n, new ArrayList<Integer>(), result);
        return result;
    }

    private void helper(int count, int k, int sum, List<Integer> crt, List<List<Integer>> result) {
        if (count == k) {
            if (sum == 0) {
                result.add(new ArrayList<Integer>(crt));
            }
            return;
        }
        if (sum <= 0) {
            return;
        }
        int lower = crt.isEmpty() ? 1 : crt.get(crt.size() - 1) + 1;
        for (int i = lower; i < 10; i++) {
            if (sum >= i) {
                crt.add(i);
                helper(count + 1, k, sum - i, crt, result);
                crt.remove(crt.size() - 1);
            } else {
                break;
            }
        }
    }

    @Test
    public void test() {
        List<List<Integer>> result = combinationSum3(3, 7);
    }
}
```