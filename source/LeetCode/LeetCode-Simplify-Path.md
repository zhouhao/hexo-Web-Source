title: 'LeetCode: Simplify Path'
date: 2015-06-24 00:03:22
tags:
 - LeetCode
---
<hr/>    

```java

/**
 * Created by hzhou on 5/7/15. codeashobby@gmail.com Given an absolute path for a file (Unix-style), simplify it.
 * <p/>
 * For example, path = "/home/", => "/home" path = "/a/./b/../../c/", => "/c"
 * <p/>
 * Corner Cases: Did you consider the case where path = "/../"? In this case, you should return "/". Another corner case is the path might contain
 * multiple slashes '/' together, such as "/home//foo/". In this case, you should ignore redundant slashes and return "/home/foo".
 */
public class SimplifyPath {
	public String simplifyPath(String path) {
		if (path == null || path.isEmpty()) {
			return "";
		}
		if (!path.startsWith("/")) {
			return null;
		}
		path = path.trim();
		Stack<String> stack = new Stack<String>();
		StringBuilder sb = new StringBuilder();
		String[] splits = path.split("/");
		for (String s : splits) {
			s = s.trim();
			if (isValid(s)) {
				stack.push(s);
			} else if (s.equals("..")) {
				if (!stack.isEmpty()) {
					stack.pop();
				}
			}
		}
		for (String s : stack) {
			sb.append("/").append(s);
		}
		return sb.toString().isEmpty() ? "/" : sb.toString();
	}
	private boolean isValid(String s) {
		return !(s.isEmpty() || s.equals(".") || s.equals(".."));
	}
}
```
