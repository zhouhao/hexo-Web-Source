title: 'LeetCode: Word Ladder'
date: 2015-06-24 00:03:22
---
 
```java

/**
 * Description: Medium Word Ladder
 * <p/>
 * Given two words (start and end), and a dictionary, find the length of shortest transformation sequence from start to
 * end, such that:
 * <p/>
 * Only one letter can be changed at a time Each intermediate word must exist in the dictionary H
 * <pre>
 *     Example
 *     Given: start = "hit"
 *     end = "cog"
 *     dict = ["hot","dot","dog","lot","log"]
 * </pre>
 * As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog", return its length 5.
 * <p/>
 * Note Return 0 if there is no such transformation sequence. All words have the same length. All words contain only
 * lowercase alphabetic characters.
 *
 * @author hzhou
 */
public class WordLadder {
    public int ladderLength(String start, String end, Set<String> dict) {
        if (start == null || end == null || dict == null || dict.isEmpty()) {
            return 0;
        }
        dict.add(end);
        Queue<Info> queue = new LinkedList<Info>();
        queue.add(new Info(start, 1));
        int result = Integer.MAX_VALUE;
        while (!queue.isEmpty()) {
            Info info = queue.poll();
            if (info.s.equals(end)) {
                result = Math.min(result, info.x);
            }
            for (int i = 0; i < info.s.length(); i++) {
                char[] chars = info.s.toCharArray();
                for (char a = 'a'; a <= 'z'; a++) {
                    chars[i] = a;
                    String str = String.valueOf(chars);
                    if (dict.contains(str)) {
                        queue.add(new Info(str, info.x + 1));
                        dict.remove(str);
                    }
                }
            }
        }
        return result == Integer.MAX_VALUE ? 0 : result;
    }
    static class Info {
        String s;
        int x;
        Info(String s, int x) {
            this.s = s;
            this.x = x;
        }
    }
}
```
