title: 'LeetCode: Compare Version Numbers'
date: 2015-06-24 00:03:22
---

```java
public class CompareVersionNumbers {
    private static final Logger log = Logger.getLogger(CompareVersionNumbers.class);
    public int compareVersion(String version1, String version2) {
        assert version1 != null;
        assert version2 != null;
        version1 = version1.trim();
        version2 = version2.trim();
        String[] v1 = version1.split("\\.");
        String[] v2 = version2.split("\\.");
        int result = 0;
        int l1 = v1.length;
        int l2 = v2.length;
        for (int i = 0; i < Math.max(l1, l2); i++) {
            int a = ((l1 <= i) || v1[i].isEmpty()) ? 0 : Integer.valueOf(v1[i]);
            int b = ((l2 <= i) || v2[i].isEmpty()) ? 0 : Integer.valueOf(v2[i]);
            if (a > b) {
                result = 1;
                break;
            } else if (a < b) {
                result = -1;
                break;
            }
        }
        return result;
    }
}
```
