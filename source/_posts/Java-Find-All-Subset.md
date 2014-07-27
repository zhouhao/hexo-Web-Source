title: "Java: Find All Subset"
date: 2014-07-20 13:06:25
tags:
 - Programming
 - DFS
---
Get all the subsets of a list, for example, the subsets for [1,2,3] are:
```
[]
[1]
[2]
[3]
[1,2]
[1,3]
[2,3]
[1,2,3]
```
<!-- more -->
```java
import java.util.List;
import java.util.ArrayList;
/**
 * Created by hzhou on 2014/7/17.
 */
public class SubSet {
    private List<Integer> list;

    public SubSet() {
        this.list = new ArrayList<Integer>();
    }
    public SubSet(List<Integer> list) {
        this.list = new ArrayList<Integer>(list);
    }

    public boolean add(int i) {
        return this.list.add(i);
    }
    public List<List<Integer>> getSubset() {
        List<List<Integer>> result = new ArrayList<List<Integer>>();
        List<Integer> current = new ArrayList<Integer>();
        getSubset(result, current, 0);
        return result;
    }

    private void getSubset(List<List<Integer>> result, List<Integer> current, int start) {
        if(start == this.list.size()) {
            result.add(current);
            return;
        }

        getSubset(result, current, start+1);
        List<Integer> tmp = new ArrayList<Integer>(current);
        tmp.add(this.list.get(start));
        getSubset(result, tmp, start+1);

    }
    /*
    Maybe more funcions below...
     */

    public static void main(String[] args) {
        List<Integer> list = new ArrayList<Integer>();
        list.add(1);
        list.add(2);
        list.add(3);
        SubSet ss = new SubSet(list);
        List<List<Integer>> result = ss.getSubset();
        int x = 0;
        for(List<Integer> i : result) {
            System.out.print(++x + "   [");
            for(int j : i) {
                System.out.print(j + " ");
            }
            System.out.println("]");
        }
    }
}
```