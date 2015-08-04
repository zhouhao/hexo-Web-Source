title: 'LeetCode: Excel Sheet Column Title'
date: 2015-06-24 00:03:22
---

```java

/**
 * Created by hzhou on 4/23/15. codeashobby@gmail.com
 */
public class ExcelSheetColumnTitle {
    public String convertToTitle(int n) {
        assert n > 0;
        //StringBuilder sb = new StringBuilder();
        String result = "";
        while (n > 0) {
            int mod = n % 26;
            result = cal(mod) + result;
            n = n / 26;
            if (mod == 0) {
                n--;
            }
        }
        return result;
    }
    private char cal(int i) {
        i = (i + 26 - 1) % 26;
        return (char) ('A' + i);
    }
}
```
