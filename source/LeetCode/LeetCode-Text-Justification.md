title: 'LeetCode: Text Justification'
date: 2015-06-24 00:03:22
tags:
 - LeetCode
---
<hr/>    

```java

import static org.junit.Assert.assertSame;
/**
 * Description:
 *
 * @author hzhou
 */
public class TextJustification {
	public List<String> fullJustify(String[] words, int maxWidth) {
		List<String> result = new ArrayList<String>();
		if (words == null || words.length == 0) {
			return result;
		}
		if (maxWidth == 0) {
			result.add("");
			return result;
		}
		int crt = 0;
		int pre = 0;
		int count = 0;
		while (pre < words.length) {
			count = words[crt].length() + 1;
			while (count <= maxWidth + 1 && crt < words.length - 1) {
				crt++;
				count += words[crt].length() + 1;
			}
			// for the last line
			if (crt == words.length - 1 && count <= maxWidth + 1) {
				StringBuilder sb = new StringBuilder();
				for (int i = pre; i < words.length - 1; i++) {
					sb.append(words[i]).append(' ');
				}
				sb.append(words[words.length - 1]);
				result.add(appendSpace(sb.toString(), maxWidth));
				break;
			}
			if (crt - pre == 1) {
				result.add(appendSpace(words[pre], maxWidth));
			} else {
				count = count - words[crt].length() - 2;
				int realLength = maxWidth - count;
				int spaceCount = realLength / (crt - pre - 1) + 1;
				int extra = realLength % (crt - pre - 1);
				result.add(getLine(words, pre, crt - pre, spaceCount, extra));
			}
			pre = crt;
		}
		return result;
	}
	private String getLine(String[] words, int start, int count, int spaceCount, int extra) {
		StringBuilder sb = new StringBuilder();
		StringBuilder _sb = new StringBuilder();
		for (int i = 0; i < spaceCount; i++) {
			_sb.append(' ');
		}
		String spaceStr = _sb.toString();
		for (int i = start; i < start + count - 1; i++) {
			sb.append(words[i]).append(spaceStr);
			if (extra-- > 0) {
				sb.append(' ');
			}
		}
		sb.append(words[start + count - 1]);
		return sb.toString();
	}
	private String appendSpace(String s, int maxWidth) {
		StringBuilder sb = new StringBuilder(s);
		while (sb.length() < maxWidth) {
			sb.append(' ');
		}
		return sb.toString();
	}
	@Test
	public void test() {
		String[] words = new String[]{"This", "is", "an", "example", "of", "text", "justification."};
		List<String> result = fullJustify(words, 16);
		assertSame("example  of text", result.get(1));
		words = new String[]{"a", "b", "c", "d", "e"};
		result = fullJustify(words, 1);
	}
}
```
