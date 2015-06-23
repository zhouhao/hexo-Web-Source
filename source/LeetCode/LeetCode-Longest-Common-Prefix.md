title: "LeetCode: Longest Common Prefix"
date: 2014-08-28 13:57:14
tags:
 - LeetCode
 - String
---
Write a function to find the longest common prefix string amongst an array of strings.
<!-- more -->
```
public class Solution {
    public String longestCommonPrefix(String[] strs) {
    	// handle special case
        if(strs.length == 0) return "";

        // set the first string as prefix
        String prefix = strs[0];

        for(int i = 1; i < strs.length; i++) {
            int j = 0;
            for(; j < prefix.length() && j < strs[i].length(); j++) {
            	// find the longest prefix for current string 
                if(prefix.charAt(j) != strs[i].charAt(j)) {
                    break;
                }
            }
            // update longest prefix
            prefix = prefix.substring(0, j);
            // This line can be removed, just for performance issue
            if(prefix.length() == 0) break;
        }
        
        return prefix;
    }
}
```
