title: 'LeetCode: Anagrams'
date: 2015-06-24 00:03:22
---
```java
public class Anagrams {
    public List<String> anagrams(String[] strs) {
        List<String> result = new ArrayList<String>();
        if (strs == null || strs.length < 2) {
            return result;
        }
        Map<String, List<Integer>> map = new HashMap<String, List<Integer>>();
        for (int i = 0; i < strs.length; i++) {
            String s = strs[i];
            char[] chars = s.toCharArray();
            Arrays.sort(chars);
            String key = String.valueOf(chars);
            if (map.containsKey(key)) {
                map.get(key).add(i);
            } else {
                List<Integer> list = new ArrayList<Integer>();
                list.add(i);
                map.put(key, list);
            }
        }
        for (List<Integer> list : map.values()) {
            if (list.size() > 1) {
                for (int i : list) {
                    result.add(strs[i]);
                }
            }
        }
        return result;
    }
}
```
