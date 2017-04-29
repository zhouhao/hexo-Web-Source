title: 'LeetCode: Palindrome Pairs'
date: 2016-06-25 20:03:22
---

Given a list of unique words, find all pairs of distinct indices (i, j) in the given list, so that the concatenation of the two words, i.e. words[i] + words[j] is a palindrome.

### Example 1:
Given words = ["bat", "tab", "cat"]
Return [[0, 1], [1, 0]]
The palindromes are ["battab", "tabbat"]

### Example 2:
Given words = ["abcd", "dcba", "lls", "s", "sssll"]
Return [[0, 1], [1, 0], [3, 2], [2, 4]]
The palindromes are ["dcbaabcd", "abcddcba", "slls", "llssssll"]

```java
public class Solution {
    public List<List<Integer>> palindromePairs(String[] words) {
        if (words == null || words.length < 2) {
            return Collections.emptyList();
        }

        List<List<Integer>> result = new ArrayList<>();
        Map<String, Integer> dict = new HashMap<>();
       
        for (int i = 0; i < words.length; i++) {
            dict.put(words[i], i);
        
        }

        for (int i = 0; i < words.length; i++) {
            String a = words[i];
            String reverse = getReverse(a);
            if (isPalindrome(a)) {
                if (dict.containsKey("") && !a.equals("")) {
                    result.add(getPair(i, dict.get("")));
                    result.add(getPair(dict.get(""), i));
                }
            } 
            if (dict.containsKey(reverse) && !reverse.equals(a)) {
                result.add(getPair(i, dict.get(reverse)));
            } 
                for (int x = 1; x < a.length(); x++) {
                    String right = a.substring(x);
                    String left = a.substring(0, x);
                    String rl = getReverse(left);
                    String rr = getReverse(right);
                    if (isPalindrome(right) && dict.containsKey(rl)) {
                        result.add(getPair(i, dict.get(rl)));
                    }
                    if (isPalindrome(left) && dict.containsKey(rr)) {
                        result.add(getPair(dict.get(rr), i));
                    }
                }
            
        }

      
        return result;
    }



    private boolean isSingleCharString(String s) {
        if (s == null || s.isEmpty()) {
            return false;
        }
        char c = s.charAt(0);
        for (int i = 1; i < s.length(); i++) {
            if (c != s.charAt(i)) {
                return false;
            }
        }
        return true;
    }

    private boolean isPalindrome(String s) {
        if (s == null || s.isEmpty()) {
            return true;
        }
        int a = 0;
        int b = s.length() - 1;
        while (a < b) {
            if (s.charAt(a) != s.charAt(b)) {
                return false;
            }
            a++;
            b--;
        }
        return true;
    }

    private String getReverse(String a) {
        StringBuilder sb = new StringBuilder(a);
        return sb.reverse().toString();
    }

    private List<Integer> getPair(int a, int b) {
        List<Integer> result = new ArrayList<>();
        result.add(a);
        result.add(b);
        return result;
    }
}
```