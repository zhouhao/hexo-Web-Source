title: 'LeetCode: Reverse Words in a String III'
date: 2016-06-25 20:03:22
---

Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

### Example 1:
```
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
```
*Note*: In the string, each word is separated by single space and there will not be any extra space in the string.

```java
 /**
  * Input: "Let's take LeetCode contest"
  * Output: "s'teL ekat edoCteeL tsetnoc"
  *
  * @author hzhou
  */
 public class ReverseWordsInAStringIII {

     public String reverseWords(String s) {
         if (s == null || s.length() < 1) {
             return s;
         }
         String[] arr = s.split(" ");
         StringBuilder sb = new StringBuilder();
         for (String str : arr) {
             sb.append(new StringBuffer(str).reverse()).append(" ");
         }
         sb.delete(sb.length() - 1, sb.length());
         return sb.toString();
     }

 }

```
