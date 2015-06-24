title: 'LeetCode: Substring with Concatenation of All Words'
date: 2015-06-24 00:03:22
tags:
 - LeetCode
---
<hr/>    

```java

/**
 * Created by hzhou on 2015/5/28. Email: codeashobby@gmail.com
 * <p/>
 * // Note: leetcode test says words can have duplicated items
 */
public class SubstringWithConcatenationOfAllWords {
	public List<Integer> findSubstring(String s, String[] words) {
		List<Integer> result = new ArrayList<Integer>();
		if (s == null || words == null) {
			return result;
		}
		int wordLength = words[0].length();
		int totalLength = wordLength * words.length;
		if (s.length() < totalLength) {
			return result;
		}
		Map<String, Integer> map = getMap(words);
		for (int i = 0; i <= s.length() - totalLength; i++) {
			String tmp = s.substring(i, i + wordLength);
			if (map.containsKey(tmp) && check(s.substring(i, i + totalLength), words, map)) {
				result.add(i);
			}
		}
		return result;
	}
	private Map<String, Integer> getMap(String[] words) {
		Map<String, Integer> map = new HashMap<String, Integer>();
		for (String s : words) {
			if (map.containsKey(s)) {
				map.put(s, map.get(s) + 1);
			} else {
				map.put(s, 1);
			}
		}
		return map;
	}
	private boolean check(String s, String[] words, Map<String, Integer> map) {
		Map<String, Integer> tMap = new HashMap<String, Integer>();
		int length = words[0].length();
		for (int i = 0; i <= s.length() - length; i = i + length) {
			String tmp = s.substring(i, i + length);
			if (!map.containsKey(tmp)) {
				return false;
			}
			if (tMap.containsKey(tmp)) {
				tMap.put(tmp, tMap.get(tmp) + 1);
			} else {
				tMap.put(tmp, 1);
			}
			if (tMap.get(tmp) > map.get(tmp)) {
				return false;
			}
		}
		return true;
	}
	@Test
	public void test() {
		String s = "lingmindraboofooowingdingbarrwingmonkeypoundcake";
		String[] words = new String[]{"fooo", "barr", "wing", "ding", "wing"};
		List<Integer> result = findSubstring(s, words);
	}
}
```
