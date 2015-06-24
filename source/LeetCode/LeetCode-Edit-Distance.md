title: 'LeetCode: Edit Distance'
date: 2015-06-24 00:03:22
tags:
 - LeetCode
---
<hr/>    

```java

/**
 * Description: Given two words word1 and word2, find the minimum number of steps required to convert word1 to word2.
 * (each operation is counted as 1 step.)
 * <p/>
 * You have the following 3 operations permitted on a word:
 * <p/>
 * a) Insert a character
 * <p/>
 * b) Delete a character
 * <p/>
 * c) Replace a character
 *
 * @author hzhou
 */
public class EditDistance {
	public int minDistance(String word1, String word2) {
		if (word1 == null && word2 == null) {
			return 0;
		}
		if (word1 == null || word1.isEmpty()) {
			return word2.length();
		}
		if (word2 == null || word2.isEmpty()) {
			return word1.length();
		}
		int[][] map = new int[word1.length() + 1][word2.length() + 1];
		for (int i = 0; i <= word1.length(); i++) {
			map[i][0] = i;
		}
		for (int i = 0; i <= word2.length(); i++) {
			map[0][i] = i;
		}
		for (int i = 0; i < word1.length(); i++) {
			char c1 = word1.charAt(i);
			for (int j = 0; j < word2.length(); j++) {
				char c2 = word2.charAt(j);
				if (c1 == c2) {
					map[i + 1][j + 1] = map[i][j];
				} else {
					int r1 = map[i][j + 1] + 1;
					int r2 = map[i][j] + 1;
					int r3 = map[i + 1][j] + 1;
					map[i + 1][j + 1] = Math.min(r1, Math.min(r2, r3));
				}
			}
		}
		return map[word1.length()][word2.length()];
	}
}
```
