title: 'LeetCode: Remove K Digits'
date: 2017-08-30 20:03:22
---

Given a non-negative integer num represented as a string, remove k digits from the number so that the new number is the smallest possible.

#### Note:
1. The length of num is less than 10002 and will be ≥ k.
2. The given num does not contain any leading zero.

### Example 1:
```
Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
```
### Example 2:
```
Input: num = "10200", k = 1
Output: "200"
Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
```
### Example 3:
```
Input: num = "10", k = 2
Output: "0"
Explanation: Remove all the digits from the number and it is left with nothing which is 0.
```

```java
class Solution {
    public String removeKdigits(String num, int k) {
        if (num == null || num.isEmpty() || num.length() < k) {
            return null;
        }

        if(num.length() == k) return "0";
        int[] arr = new int[num.length()];
        for (int i = 0; i < num.length(); i++) {
            arr[i] = num.charAt(i) - '0';
        }

        int length = num.length() - k;
        Stack<Integer> stack = new Stack<>();

        stack.push(arr[0]);
        for (int i = 1; i < arr.length; i++) {
            while (!stack.isEmpty()  && stack.size() + num.length() - i > length && arr[i] < stack.peek()) {
                stack.pop();
            }

            if (stack.size() < length) {
                stack.push(arr[i]);
            }
        }

        StringBuilder sb = new StringBuilder();
        stack.forEach(sb::append);
        while(sb.charAt(0) == '0' && sb.length()>1){
            sb.deleteCharAt(0);
        }
        return sb.toString();
    }
}
```
