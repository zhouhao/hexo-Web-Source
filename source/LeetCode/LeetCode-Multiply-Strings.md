title: 'LeetCode: Multiply Strings'
date: 2015-06-24 00:03:22
tags:
 - LeetCode
---
<hr/>    

```java

/**
 * Description: Given two numbers represented as strings, return multiplication of the numbers as a string.
 * <p/>
 * Note: The numbers can be arbitrarily large and are non-negative.
 *
 * @author hzhou
 */
public class MultiplyStrings {
	public String multiply(String num1, String num2) {
		if (num1 == null || num1.isEmpty() || num2 == null || num2.isEmpty() || num1.equals("0") || num2.equals("0")) {
			return "0";
		}
		int[] tmp = new int[num1.length() + num2.length()];
		String t1 = new StringBuilder(num1).reverse().toString();
		String t2 = new StringBuilder(num2).reverse().toString();
		for (int i = 0; i < t1.length(); i++) {
			for (int j = 0; j < t2.length(); j++) {
				tmp[i + j] += calc(t1.charAt(i), t2.charAt(j));
			}
		}
		int inc = 0;
		StringBuilder sb = new StringBuilder();
		for (int i = 0; i < tmp.length; i++) {
			int sum = inc + tmp[i];
			inc = sum / 10;
			tmp[i] = sum % 10;
			sb.append(tmp[i]);
		}
		String result = sb.reverse().toString();
		int i = 0;
		while (result.charAt(i) == '0') {
			i++;
		}
		return result.substring(i, result.length());
	}
	private int calc(char a, char b) {
		return (a - '0') * (b - '0');
	}
	@Test
	public void test() {
		String r = multiply("0", "0");
		System.out.println(r);
	}
}
```
