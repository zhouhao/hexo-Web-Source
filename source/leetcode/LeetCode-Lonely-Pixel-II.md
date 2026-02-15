title: 'LeetCode: Lonely Pixel II'
date: 2017-08-30 20:03:22
---
Given a picture consisting of black and white pixels, and a positive integer N, find the number of black pixels located at some specific row R and column C that align with all the following rules:

1. Row R and column C both contain exactly N black pixels.
2. For all rows that have a black pixel at column C, they should be exactly the same as row R

The picture is represented by a 2D char array consisting of 'B' and 'W', which means black and white pixels respectively.

### Example:
```
Input:                                            
[['W', 'B', 'W', 'B', 'B', 'W'],    
 ['W', 'B', 'W', 'B', 'B', 'W'],    
 ['W', 'B', 'W', 'B', 'B', 'W'],    
 ['W', 'W', 'B', 'W', 'B', 'W']]

N = 3
Output: 6
Explanation: All the bold 'B' are the black pixels we need (all 'B's at column 1 and 3).
        0    1    2    3    4    5         column index                                            
0    [['W', 'B', 'W', 'B', 'B', 'W'],    
1     ['W', 'B', 'W', 'B', 'B', 'W'],    
2     ['W', 'B', 'W', 'B', 'B', 'W'],    
3     ['W', 'W', 'B', 'W', 'B', 'W']]    
row index

Take 'B' at row R = 0 and column C = 1 as an example:
Rule 1, row R = 0 and column C = 1 both have exactly N = 3 black pixels.
Rule 2, the rows have black pixel at column C = 1 are row 0, row 1 and row 2. They are exactly the same as row R = 0.
```

#### Note:
The range of width and height of the input 2D array is [1,200].

```java
class Solution {
    public int findBlackPixel(char[][] picture, int N) {
        if (picture == null || picture.length < N || picture[0] == null || picture[0].length < N) {
            return 0;
        }

        Map<Integer, Integer> colMap = new HashMap<>();
        Map<Integer, Integer> rowMap = new HashMap<>();
        Map<Integer, List<Integer>> sameRowMap = new HashMap<>();
        int result = 0;

        for (int i = 0; i < picture.length; i++) {
            for (int j = 0; j < picture[0].length; j++) {
                if (picture[i][j] == 'B') {
                    colMap.put(j, colMap.getOrDefault(j, 0) + 1);
                    rowMap.put(i, rowMap.getOrDefault(i, 0) + 1);
                }
            }
        }

        for (int i = 0; i < picture.length; i++) {
            for (int j = 0; j < picture[0].length; j++) {
                if (picture[i][j] == 'B') {
                    List<Integer> rows = sameRowMap.getOrDefault(j, new ArrayList<>());
                    rows.add(i);
                    sameRowMap.put(j, rows);
                }
            }
        }

        for (Map.Entry<Integer, List<Integer>> entry : sameRowMap.entrySet()) {
            List<Integer> val = entry.getValue();
            int R = val.get(0);
            boolean allSame = true;
            for (int i = 1; i < val.size(); i++) {
                if (!isSameRow(picture[R], picture[val.get(i)])) {
                    allSame = false;
                    break;
                }
            }

            if (allSame &&
                    colMap.getOrDefault(entry.getKey(), 0) == N &&
                    rowMap.getOrDefault(R, 0) == N) {
                result += val.size();
            }

        }

        return result;
    }

    private boolean isSameRow(char[] a, char[] b) {
        for (int i = 0; i < a.length; i++) {
            if (a[i] != b[i]) return false;
        }
        return true;
    }
}
```
