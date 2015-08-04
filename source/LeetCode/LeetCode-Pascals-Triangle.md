title: 'LeetCode: Pascals Triangle'
date: 2015-06-25 20:03:22
---
Given `numRows`, generate the first `numRows` of Pascal's triangle.

For example, given `numRows = 5`,
Return
```
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
```

```java
public class PascalTriangle {
  public List<List<Integer>> generate(int numRows) {
    List<List<Integer>> result = new ArrayList<List<Integer>>();
    if(numRows < 1) {
      return result;
    }
    List<Integer> tmp1 = new ArrayList<Integer>();
    tmp1.add(1);
    result.add(tmp1);

    // build result low by low
    for(int i = 1; i < numRows;i++) {
      List<Integer> tmp = new ArrayList<Integer>();
      List<Integer> pre = result.get(i-1);
      for(int k = 0; k <= i;k++) {
        // get current value
        tmp.add(k == 0 ? pre.get(k) : k == i ? pre.get(k - 1) : pre.get(k - 1) + pre.get(k));
      }
      result.add(tmp);
    }
    return result;
  }
}
```
