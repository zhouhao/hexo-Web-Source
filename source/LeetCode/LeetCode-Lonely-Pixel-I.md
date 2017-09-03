title: 'LeetCode: Lonely Pixel II'
date: 2017-08-30 20:03:22
---
Given a picture consisting of black and white pixels, find the number of black lonely pixels.

The picture is represented by a 2D char array consisting of 'B' and 'W', which means black and white pixels respectively.

A black lonely pixel is character 'B' that located at a specific position where the same row and same column don't have any other black pixels.

### Example:
```
Input:
[['W', 'W', 'B'],
 ['W', 'B', 'W'],
 ['B', 'W', 'W']]

Output: 3
Explanation: All the three 'B's are black lonely pixels.
```
### Note:
The range of width and height of the input 2D array is [1,500].


```java
class Solution {
    public int findLonelyPixel(char[][] picture) {
        if (picture == null || picture.length == 0 || picture[0] == null || picture[0].length == 0) {
            return 0;
        }

        Map<Integer, Integer> colMap = new HashMap<>();
        Map<Integer, Integer> rowMap = new HashMap<>();
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
                if (picture[i][j] == 'B' && colMap.getOrDefault(j, 0) == 1 && rowMap.getOrDefault(i, 0) == 1) {
                    result++;
                }
            }
        }

        return result;
    }
}
```
