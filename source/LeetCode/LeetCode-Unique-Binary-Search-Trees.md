title: "LeetCode: Unique Binary Search Trees"
date: 2014-09-01 17:09:19
---
 Given n, how many structurally unique BST's (binary search trees) that store values 1...n?

For example,
Given n = 3, there are a total of 5 unique BST's.
```
   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
```
<!-- more -->
<h3>Idea</h3>
1. If the count of element is 0 or 1, the result should be 1
2. If count is 2, result should be 2
... ...
k. If count is n, and we take an element m as root. Assume there are `x` elements, which are less than m, so there will be `n-x-1` elements, which are greater than m. Therefore, for count n with m as root, the unique BST should be count(left sub-tree)*count(right sub-tree).

<h3>Answer</h3>
```
public class Solution {
    public int numTrees(int n) {
        // handle special case
        if(n < 0) return -1;
        
        int[] tmp = new int[n+2]; 
        tmp[0] = 1;
        tmp[1] = 1;
        
        for(int i = 2; i <= n; i++) {
            for(int j = 0; j < i; j++ ) {
                tmp[i] += tmp[j] * tmp[i-j-1];
            }
        }
        
        return tmp[n];
    }
}
```