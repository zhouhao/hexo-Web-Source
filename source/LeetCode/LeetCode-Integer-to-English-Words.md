title: 'LeetCode: Integer to English Words'
date: 2016-06-25 20:03:22
---

Convert a non-negative integer to its english words representation. Given input is guaranteed to be less than 231 - 1.

For example,
```
123 -> "One Hundred Twenty Three"
12345 -> "Twelve Thousand Three Hundred Forty Five"
1234567 -> "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
```

```java
public class Solution {
    private static final Map<Integer, String> intMap = new HashMap<>();
    private static final List<String> list = new ArrayList<>();

    static {
        intMap.put(0, "Zero");
        intMap.put(1, "One");
        intMap.put(2, "Two");
        intMap.put(3, "Three");
        intMap.put(4, "Four");
        intMap.put(5, "Five");
        intMap.put(6, "Six");
        intMap.put(7, "Seven");
        intMap.put(8, "Eight");
        intMap.put(9, "Nine");
        intMap.put(10, "Ten");
        intMap.put(11, "Eleven");
        intMap.put(12, "Twelve");
        intMap.put(13, "Thirteen");
        intMap.put(14, "Fourteen");
        intMap.put(15, "Fifteen");
        intMap.put(16, "Sixteen");
        intMap.put(17, "Seventeen");
        intMap.put(18, "Eighteen");
        intMap.put(19, "Nineteen");
        intMap.put(20, "Twenty");
        intMap.put(30, "Thirty");
        intMap.put(40, "Forty");
        intMap.put(50, "Fifty");
        intMap.put(60, "Sixty");
        intMap.put(70, "Seventy");
        intMap.put(80, "Eighty");
        intMap.put(90, "Ninety");

        list.add("");
        list.add("Thousand");
        list.add("Million");
        list.add("Billion");
    }

    public String numberToWords(int num) {
        StringBuilder sb = new StringBuilder();
        int index = 0;
        while (num > 0) {
            int n = num % 1000;
            sb.insert(0, toStr(n, index));
            num = num / 1000;
            index++;
        }

        return sb.length() == 0 ? "Zero" : sb.toString().replace("  "," ").trim();
    }

    // num < 1000
    private String toStr(int num, int index) {
        if (num == 0) {
            return "";
        }

        StringBuilder sb = new StringBuilder();
        int n = num / 100;
        if (n > 0) {
            sb.append(intMap.get(n)).append(" Hundred ");
        }

        num = num % 100;
        n = num / 10;
        if (n == 1) {
            sb.append(intMap.get(num));
        } else {
             if (n != 0) {
                sb.append(intMap.get(n * 10));
            }
            n = num % 10;
            if (n != 0) {
                sb.append(" ").append(intMap.get(n));
            }
        }

        sb.append(" ").append(list.get(index)).append(" ");
        return sb.toString();
    }
}
```