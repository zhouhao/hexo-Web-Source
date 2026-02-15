title: 'LeetCode: Flip Game'
date: 2016-06-25 20:03:22
---

You are playing the following Flip Game with your friend: Given a string that contains only these two characters: + and -, you and your friend take turns to flip two consecutive "++" into "--". The game ends when a person can no longer make a move and therefore the other person will be the winner.

Write a function to compute all possible states of the string after one valid move.

For example, given s = "++++", after one move, it may become one of the following states:
```
[
  "--++",
  "+--+",
  "++--"
]
```
If there is no valid move, return an empty list [].

```java
public class Solution {
    public List<String> generatePossibleNextMoves(String s) {
                if (s == null || s.length() < 2) {
            return Collections.emptyList();
        }
        List<String> result = new ArrayList<>();

        char[] chars = s.toCharArray();
        for (int i = 0; i < s.length() - 1; i++) {
            char a = chars[i];
            char b = chars[i + 1];
            if (a == '+' && b == '+') {
                chars[i] = chars[i + 1] = '-';
                result.add(arrayToStr(chars));
                chars[i] = chars[i + 1] = '+';
            }
        }
        return result;
    }

    private String arrayToStr(char[] chars) {
        StringBuilder sb = new StringBuilder();
        for (char c : chars) {
            sb.append(c);
        }
        return sb.toString();
    }
}
```