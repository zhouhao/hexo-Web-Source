title: 'LeetCode: Gas Station'
date: 2015-06-24 00:03:22
tags:
 - LeetCode
---
<hr/>    

```java

/**
 * Created by hzhou on 5/12/15. codeashobby@gmail.com
 */
public class GasStation {
	public int canCompleteCircuit(int[] gas, int[] cost) {
		if (gas == null || cost == null || gas.length != cost.length) {
			return -1;
		}
		int total, start, sumRemain;
		start = total = sumRemain = 0;
		for (int i = 0; i < gas.length; i++) {
			int remain = gas[i] - cost[i];
			if (sumRemain >= 0) {
				sumRemain += remain;
			} else {
				sumRemain = remain;
				start = i;
			}
			total += remain;
		}
		return total >= 0 ? start : -1;
	}
}
```
