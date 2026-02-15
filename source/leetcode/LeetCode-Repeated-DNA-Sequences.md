title: 'LeetCode: Repeated DNA Sequences'
date: 2015-06-24 00:03:22
---
All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.

Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.

For example,
```
Given s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT",

Return:
["AAAAACCCCC", "CCCCCAAAAA"].
```

```java

public class RepeatedDNASequences {

    public List<String> findRepeatedDnaSequences(String s) {
         List<String> result = new ArrayList<>();
         if (s == null || s.isEmpty()) return result;
         Map<String, Integer> dp = new HashMap<>();
         for (int i = 0; i < s.length() - 9; i++) {
             String sub = s.substring(i, i + 10);
             dp.put(sub, dp.getOrDefault(sub, 0) + 1);
         }

         for (Map.Entry<String, Integer> entry : dp.entrySet()) {
             if (entry.getValue() < 2) continue;
             result.add(entry.getKey());
         }
         return result;
    }

}
```
