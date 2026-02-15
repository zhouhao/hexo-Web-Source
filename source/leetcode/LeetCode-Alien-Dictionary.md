title: 'LeetCode: Alien Dictionary'
date: 2016-06-25 20:03:22
---

There is a new alien language which uses the latin alphabet. However, the order among letters are unknown to you. You receive a list of **non-empty** words from the dictionary, where **words are sorted lexicographically by the rules of this new language**. Derive the order of letters in this language.

### Example 1:
Given the following words in dictionary,
```
[
  "wrt",
  "wrf",
  "er",
  "ett",
  "rftt"
]
```
The correct order is: `"wertf"`.

### Example 2:
Given the following words in dictionary,
```
[
  "z",
  "x"
]
```
The correct order is: `"zx"`.

### Example 3:
Given the following words in dictionary,
```
[
  "z",
  "x",
  "z"
]
```
The order is invalid, so return `""`.

### Note:
1. You may assume all letters are in lowercase.
2. You may assume that if a is a prefix of b, then a must appear before b in the given dictionary.
3. If the order is invalid, return an empty string.
4. There may be multiple valid order of letters, return any one of them is fine.

```java
public class Solution {
        public String alienOrder(String[] words) {
        if (words == null || words.length == 0) {
            return "";
        }

        if (words.length == 1) {
            return words[0];
        }

        Map<Character, Set<Character>> graph = new HashMap<>();
        Map<Character, Integer> toCount = new HashMap<>();
        StringBuilder sb = new StringBuilder();

        init(graph, toCount, words);
        process(graph, toCount, words);
        build(sb, graph, toCount);
         return sb.length()== toCount.size()? sb.toString():"";
    }

    private void init(Map<Character, Set<Character>> graph, Map<Character, Integer> toCount, String[] words) {
        Arrays.stream(words).forEach(word -> {
            for (char c : word.toCharArray()) {
                graph.putIfAbsent(c, new HashSet<>());
                toCount.putIfAbsent(c, 0);
            }
        });
    }

    private void process(Map<Character, Set<Character>> graph, Map<Character, Integer> toCount, String[] words) {
        Set<String> edges = new HashSet<>();
        for (int i = 0; i < words.length - 1; i++) {
            String s1 = words[i];
            String s2 = words[i + 1];

            // TODO: what if s1 or s2 is null
            for (int j = 0; j < s1.length() && j < s2.length(); j++) {
                char c1 = s1.charAt(j);
                char c2 = s2.charAt(j);
                if (c1 == c2) {
                    continue;
                }
                String edge = "" + c1 + c2;
                if (!edges.contains(edge)) {
                    toCount.put(c2, toCount.get(c2) + 1);
                    Set<Character> val = graph.get(c1);
                    val.add(c2);
                    graph.put(c1, val);
                    edges.add(edge);
                    break;
                }
            }
        }
    }

    private void build(StringBuilder sb, Map<Character, Set<Character>> graph, Map<Character, Integer> toCount) {
        Queue<Character> queue = new LinkedList<>();
        toCount.forEach((key, value) -> {
            if (value == 0) {
                queue.add(key);
            }
        });

        while (!queue.isEmpty()) {
            char c = queue.poll();
            sb.append(c);
            graph.get(c).forEach(ch -> {
                int value = toCount.get(ch) - 1;
                toCount.put(ch, value);
                if (value == 0) {
                    queue.add(ch);
                }
            });
        }
    }
}
```