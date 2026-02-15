title: 'LeetCode: Graph Valid Tree'
date: 2016-06-25 20:03:22
---

Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes), write a function to check whether these edges make up a valid tree.

For example:

Given n = 5 and edges = [[0, 1], [0, 2], [0, 3], [1, 4]], return true.

Given n = 5 and edges = [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]], return false.

**Note**: you can assume that no duplicate edges will appear in edges. Since all edges are undirected, [0, 1] is the same as [1, 0] and thus will not appear together in edges.

```java
public class Solution {
    public boolean validTree(int n, int[][] edges) {
        if (n < 1 || edges.length != n - 1  ) {
            return false;
        }

        Map<Integer, Integer> map = new HashMap<>();
       for (int i = 0; i < n; i++) {
            map.put(i, i);
        }

        for (int[] edge : edges) {
            int a = findRoot(map, edge[0]);
            int b = findRoot(map, edge[1]);
            if (a == b) {
                return false;
            }
            map.put(b, a);
        }
        return true;
    }

    private int findRoot(Map<Integer, Integer> map, int val) {
        int root = map.get(val);
        if (root == val) {
            return root;
        } else {
            return findRoot(map, root);
        }
    }
}
```
