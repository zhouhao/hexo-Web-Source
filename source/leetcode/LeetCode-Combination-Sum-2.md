title: "LeetCode: Combination Sum 2"
date: 2014-07-27 15:25:33
---
 
Given a collection of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.  
Each number in C may only be used once in the combination.
<!-- more -->
###Note:
```
 All numbers (including target) will be positive integers.
 Elements in a combination (a1, a2, … , ak) must be in non-descending order. (ie, a1 ≤ a2 ≤ … ≤ ak).
 The solution set must not contain duplicate combinations.
 For example, given candidate set 10,1,2,7,6,1,5 and target 8,
 A solution set is:
     [1, 7]
     [1, 2, 5]
     [2, 6]
     [1, 1, 6]
```

###The logic is almost the same as [combination sum 1](../LeetCode-Combination-Sum-1/):
```
1. Do not count the same number
2. Convert List to linkedHashSet to remove duplicated element, then return as list again
```

###The source code is as below:


```
import java.util.Arrays;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.ArrayList;

public class CombinationSum2 {

    public List<List<Integer>> combinationSum2(int[] num, int target) {
        // handle edge case
        if (num.length == 0 || target <= 0) return null;

        // sort the array
        Arrays.sort(num);

        List<List<Integer>> result = new ArrayList<List<Integer>>();
        List<Integer> current = new ArrayList<Integer>();

        getResult(num, target, result, current, -1);

        return new ArrayList<List<Integer>>(new LinkedHashSet<List<Integer>>(result));
    }


    private void getResult(int[] num, int target, List<List<Integer>> result, List<Integer> current, int start) {
        if (target == 0) {
            List<Integer> tmp = new ArrayList<Integer>(current);
            result.add(tmp);
            return;
        } else {
            for (int i = start + 1; i < num.length; i++) {
                int offset = target - num[i];
                if(offset < 0) {
                    return;
                }
                current.add(num[i]);
                getResult(num, offset, result, current, i);
                current.remove(current.size()-1);
            }

        }
    }

    public static void main(String[] args) {
        int[] num = new int[]{10,1,2,7,6,1,5};
        List<List<Integer>> result = new CombinationSum2().combinationSum2(num, 8);
        for(List<Integer> i : result) {
            System.out.print("[");
            for(int j : i) {
                System.out.print(j + " ");
            }
            System.out.println("]");
        }

    }
}
```
