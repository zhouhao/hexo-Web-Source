title: 'LeetCode: Encode and Decode TinyURL'
date: 2017-08-30 20:03:22
---

TinyURL is a URL shortening service where you enter a URL such as `https://leetcode.com/problems/design-tinyurl` and it returns a short URL such as `http://tinyurl.com/4e9iAk`.

Design the `encode` and `decode` methods for the TinyURL service. There is no restriction on how your encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.

```java
public class Codec {

    private final Random rand = new Random();
    private final String x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    private Map<String, String> encodeMap = new HashMap<>();
    private Map<String, String> decodeMap = new HashMap<>();

    private final String baseUrl = "http://tinyurl.com/";

    // Encodes a URL to a shortened URL.
    public String encode(String longUrl) {
        if (encodeMap.containsKey(longUrl)) {
            return encodeMap.get(longUrl);
        }

        String tinyPart = getRandomString(6);
        while (decodeMap.containsKey(tinyPart)) {
            tinyPart = getRandomString(6);
        }
        String result = baseUrl + tinyPart;
        encodeMap.put(longUrl, result);
        decodeMap.put(result, longUrl);
        return result;
    }

    // Decodes a shortened URL to its original URL.
    public String decode(String shortUrl) {
        return decodeMap.get(shortUrl);
    }

    private String getRandomString(int length) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < length; i++) {
            sb.append(x.charAt(rand.nextInt(x.length())));
        }
        return sb.toString();
    }
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.decode(codec.encode(url));
```
