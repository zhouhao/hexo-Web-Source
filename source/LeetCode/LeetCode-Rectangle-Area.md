title: 'LeetCode: Rectangle Area'
date: 2015-06-23 21:02:38
tags:
 - LeetCode
---
<hr/>   
Find the total area covered by two rectilinear rectangles in a 2D plane.   
Each rectangle is defined by its bottom left corner and top right corner as shown in the figure.   

![Rectangle Area](/img/leetcode/rectangle_area.png "Rectangle Area")

Assume that the total area is never beyond the maximum possible value of int.   

```java
public class RectangleArea {
    public int computeArea(int A, int B, int C, int D, int E, int F, int G, int H) {

        int all = (C - A) * (D - B) + (G - E) * (H - F);
        int lbx = Math.max(A, E);
        int lby = Math.max(B, F);
        int rtx = Math.min(C, G);
        int rty = Math.min(D, H);

        int width = rtx - lbx;
        int height = rty - lby;

        int result = 0;
        if (width > 0 && height > 0) {
            result = width * height;
        }
        return all - result;
    }
}
```