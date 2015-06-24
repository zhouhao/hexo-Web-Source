title: 'LeetCode: Repeated DNA Sequences'
date: 2015-06-24 00:03:22
tags:
 - LeetCode
---
<hr/>    

```java

/**
 * Description
 *
 * @author hzhou
 */
public class RepeatedDNASequences {
	//TODO: wrong answer
	public List<String> findRepeatedDnaSequences(String s) {
		List<String> result = new ArrayList<String>();
		Map<Long, Integer> map = new HashMap<Long, Integer>();
		if (s == null || s.isEmpty() || s.length() < 10) {
			return result;
		}
		for (int i = 0; i < s.length() - 9; i++) {
			String tmp = s.substring(i, i + 10);
			Long key = str2long(tmp);
			if (map.containsKey(key)) {
				map.put(key, map.get(key) + 1);
			} else {
				map.put(key, 1);
			}
		}
		for (Long key : map.keySet()) {
			if (map.get(key) > 1) {
				result.add(long2str(key));
			}
		}
		return result;
	}
	private long str2long(String s) {
		long res = 0;
		for (int i = 0; i < 10; i++) {
			if (s.charAt(i) == 'A') {
				res = res * 10 + 1;
			}
			if (s.charAt(i) == 'T') {
				res = res * 10 + 2;
			}
			if (s.charAt(i) == 'C') {
				res = res * 10 + 3;
			}
			if (s.charAt(i) == 'G') {
				res = res * 10 + 4;
			}
		}
		return res;
	}
	private String long2str(long s) {
		StringBuilder res = new StringBuilder();
		for (int i = 0; i < 10; i++) {
			long d = s % 10;
			if (d == 1) {
				res.insert(0, 'A');
			}
			if (d == 2) {
				res.insert(0, 'T');
			}
			if (d == 3) {
				res.insert(0, 'C');
			}
			if (d == 4) {
				res.insert(0, 'G');
			}
			s = s / 10;
		}
		return res.toString();
	}
	@Test
	public void test() {
		List<String> result = findRepeatedDnaSequences("AAAAAAAAAAA");
	}
}
```
