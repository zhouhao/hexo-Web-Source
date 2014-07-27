title: "LeetCode: Combination Sum 1"
date: 2014-07-27 12:25:51
tags:
 - Programming
 - DFS
 - LeetCode
---
Given a set of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

The same repeated number may be chosen from C unlimited number of times.
<!-- more -->
###Note:
All numbers (including target) will be positive integers.   
Elements in a combination (a1, a2, … , ak) must be in non-descending order. (ie, a1 ≤ a2 ≤ … ≤ ak).   
The solution set must not contain duplicate combinations.   
*For example, given candidate set 2,3,6,7 and target 7, 
A solution set is:* 
```   
    [7] 
    [2, 2, 3] 
```

###The source code is as below:

```
import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;

public class CombinationSum {

    public List<List<Integer>> combinationSum(int[] candidates, int target) {
    	// handle special error cases
    	if(candidates == null || candidates.length == 0 || target < 0) return null;
    	// store the result 
        List<List<Integer>> result = new ArrayList<List<Integer>>(); 
        Arrays.sort(candidates);

        List<Integer> currentList = new ArrayList<Integer>(); 
        findSum(0, target, currentList, result, candidates);


        return result;
    }

    public void findSum(int currentCursor, int target, List<Integer> currentList, List<List<Integer>> result, int[] candidates) {
    	if(target == 0) {
    		List<Integer> tmp = new ArrayList<Integer>(currentList); 
    		result.add(tmp);
    		return;
    	} 

    	for(int i = currentCursor; i < candidates.length; i++) {
    		int offset = target - candidates[i];
    		if(offset < 0) {
    			return;
    		}
    		currentList.add(candidates[i]);
    		findSum(i, offset , currentList, result, candidates);
    		currentList.remove(currentList.size() - 1);
    	}

    }
    
    public static void main(String[] args) {
    	CombinationSum cs = new CombinationSum();
    	int[] list = new int[]{2,3,6,7};
    	List<List<Integer>> result = cs.combinationSum(list, 7);
    	for(List<Integer> i : result) {
    		for(int j : i) {
    			System.out.print(j + " ");
    		}
    		System.out.println();
    	}
    }
}
```