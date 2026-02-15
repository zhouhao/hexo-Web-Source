title: 'LeetCode: Fizz Buzz'
date: 2017-08-30 20:03:22
---

Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

### Example:
```
n = 15,

Return:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]
```

```java
public class Solution {
    public List<String> fizzBuzz(int n) {
        List<String> result = new ArrayList<>();
        for (int i = 1; i <= n; i++) {
            if (i % 3 != 0 && i % 5 != 0) {
                result.add(String.valueOf(i));
            }
            if (i % 15 == 0) {
                result.add("FizzBuzz");
                continue;
            }
            if (i % 3 == 0) {
                result.add("Fizz");
            }
            if (i % 5 == 0) {
                result.add("Buzz");
            }
        }
        return result;
    }
}
```
