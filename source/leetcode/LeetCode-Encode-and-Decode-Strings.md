title: 'LeetCode: Encode and Decode Strings'
date: 2016-06-25 20:03:22
---

Design an algorithm to encode **a list of strings to a string**. The encoded string is then sent over the network and is decoded back to the original list of strings.

Machine 1 (sender) has the function:
```
string encode(vector<string> strs) {
  // ... your code
  return encoded_string;
}
```
Machine 2 (receiver) has the function:
```
vector<string> decode(string s) {
  //... your code
  return strs;
}
```
So Machine 1 does:
```
string encoded_string = encode(strs);
```
and Machine 2 does:
```
vector<string> strs2 = decode(encoded_string);
```
strs2 in Machine 2 should be the same as strs in Machine 1.

Implement the encode and decode methods.

### Note:
1. The string may contain any possible characters out of 256 valid ascii characters. Your algorithm should be generalized enough to work on any possible characters.
2. Do not use class member/global/static variables to store states. Your encode and decode algorithms should be stateless.
3. Do not rely on any library method such as eval or serialize methods. You should implement your own encode/decode algorithm.

```java
public class Codec {

    public String encode(List<String> strs) {
        if (strs == null) return null;
        if (strs.size() == 0) return "";

        StringBuilder sb = new StringBuilder();

        for (String s : strs) {
            sb.append(s == null ? "" : s);
        }
        sb.append('-');
        for (String s : strs) {
            sb.append(',').append(s == null ? -1 : s.length());
        }
        return sb.toString();
    }

    // Decodes a single string to a list of strings.
    public List<String> decode(String s) {
        if (s == null) return null;
        if (s.isEmpty()) return Collections.emptyList();

        int index = s.lastIndexOf('-');
        String[] counts = s.substring(index + 2).split(",");

        List<String> result = new ArrayList<>();
        int crt = 0;
        for (String c : counts) {
            int length = Integer.valueOf(c);
            if (length == -1) {
                result.add(null);
            } else {
                result.add(s.substring(crt, crt+length));
                crt += length;
            }
        }
        return result;
    }
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.decode(codec.encode(strs));
```