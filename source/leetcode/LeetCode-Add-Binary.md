title: 'LeetCode: Add Binary'
date: 2015-06-24 00:03:22
---
 Given two binary strings, return their sum (also a binary string).

### For example
`a = "11" b = "1"` Return `"100"`.

```java
public class AddBinary {
    if(a == null || a.isEmpty() || a.equals("0")) return b;
    if(b == null || b.isEmpty() || b.equals("0")) return a;
    StringBuilder sb = new StringBuilder();
    int l = Math.max(a.length(), b.length());
    int c = 0;
    a = new StringBuilder(a).reverse().toString();
    b = new StringBuilder(b).reverse().toString();
    for(int i = 0; i < l; i++){
        int x = (i >= a.length())? 0: a.charAt(i) - '0';
        int y = (i >= b.length())? 0: b.charAt(i) - '0';
        
        int m = x+y+c;
        sb.append(m % 2);
        c = m/2;
    }
    if(c == 1) sb.append(c);
    return sb.reverse().toString();
}
```
