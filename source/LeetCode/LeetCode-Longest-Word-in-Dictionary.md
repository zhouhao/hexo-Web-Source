title: 'LeetCode: Longest Word in Dictionary'
date: 2017-06-25 20:03:22
---

Given a list of strings `words` representing an English Dictionary, find the longest word in `words` that can be built one character at a time by other `words` in words. If there is more than one possible answer, return the longest word with the smallest lexicographical order.

If there is no answer, return the empty string.
### Example 1:
```
Input:
words = ["w","wo","wor","worl", "world"]
Output: "world"
Explanation:
The word "world" can be built one character at a time by "w", "wo", "wor", and "worl".
```
### Example 2:
```
Input:
words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
Output: "apple"
Explanation:
Both "apply" and "apple" can be built from other words in the dictionary. However, "apple" is lexicographically smaller than "apply".
```

### Note:
1. All the strings in the input will only contain lowercase letters.
2. The length of words will be in the range [1, 1000].
3. The length of words[i] will be in the range [1, 30].

看到很多人用了`DFS`递归，于是尝试了用queue来解决。easy题简单折腾折腾。
但是根据提交的情况来看，时间排名第一的就是递归的。

```java
public class LongestWordInDictionary {

    public String longestWord(String[] words) {
        if (words == null || words.length == 0) return "";
        Map<Integer, Set<String>> map = new HashMap<>();
        for (String w : words) {
            int len = w.length();
            Set<String> set = map.getOrDefault(len, new TreeSet<>(Comparator.reverseOrder()));
            set.add(w);
            map.put(len, set);
        }
        if (!map.containsKey(1)) return "";
        String result = "";
        for (String s : map.get(1)) {
            Queue<String> queue = new LinkedList<>();
            queue.add(s);
            String max = s;
            while (!queue.isEmpty()) {
                max = queue.poll();
                if (!map.containsKey(max.length() + 1)) continue;
                for (String x : map.get(max.length() + 1)) {
                    if (x.startsWith(max)) queue.add(x);
                }
            }
            if (max.length() > result.length() || max.length() == result.length() && max.compareTo(result) < 0) result = max;
        }

        return result;
    }
}
```
