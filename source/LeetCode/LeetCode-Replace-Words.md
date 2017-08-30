title: 'LeetCode: Replace Words'
date: 2017-08-30 20:03:22
---

In English, we have a concept called root, which can be followed by some other words to form another longer word - let's call this word successor. For example, the root an, followed by other, which can form another word another.

Now, given a dictionary consisting of many roots and a sentence. You need to replace all the successor in the sentence with the root forming it. If a successor has many roots can form it, replace it with the root with the shortest length.

You need to output the sentence after the replacement.

### Example 1:
```
Input: dict = ["cat", "bat", "rat"]
sentence = "the cattle was rattled by the battery"
Output: "the cat was rat by the bat"
```

#### Note:
1. The input will only have lower-case letters.
2. 1 <= dict words number <= 1000
3. 1 <= sentence words number <= 1000
4. 1 <= root length <= 100
5. 1 <= sentence words length <= 1000

```java
public class Solution {
    public String replaceWords(List<String> dict, String sentence) {
        dict.sort(Comparator.comparingInt(String::length));
        String[] arr = sentence.split(" ");

        Map<Character, List<String>> map = new HashMap<>();
        for (String s : dict) {
            char c = s.charAt(0);
            List<String> l = map.getOrDefault(c, new ArrayList<>());
            l.add(s);
            map.put(c, l);
        }

        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < arr.length; i++) {
            char c = arr[i].charAt(0);
            if (map.containsKey(c)) {
                List<String> list = map.get(c);
                for (String s : list) {
                    if (arr[i].startsWith(s)) {
                        arr[i] = s;
                        break;
                    }
                }
            }
            sb.append(arr[i]).append(" ");
        }
        sb.deleteCharAt(sb.length() - 1);
        return sb.toString();
    }
}
```
