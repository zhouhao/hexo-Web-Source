title: 'LeetCode: Pascals Triangle'
date: 2015-06-25 20:03:22
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
public class PascalTriangleOne {
	public List<List<Integer>> generate(int numRows) {
		List<List<Integer>> result = new ArrayList<List<Integer>>();
		if (numRows <= 0) {
			return result;
		}
		for (int i = 1; i <= numRows; i++) {
			result.add(helper(i, result));
		}
		return result;
	}
	private List<Integer> helper(int num, List<List<Integer>> list) {
		assert num > 0 && list.size() >= num - 1;
		List<Integer> result = new ArrayList<Integer>();
		result.add(1);
		if (num > 1) {
			List<Integer> tmp = list.get(num - 2);
			for (int i = 0; i < tmp.size() - 1; i++) {
				result.add(tmp.get(i) + tmp.get(i + 1));
			}
			result.add(1);
		}
		return result;
	}
	@Test
	public void test() {
		List<List<Integer>> result = generate(5);
	}
}
```
