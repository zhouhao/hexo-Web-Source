title: 'LeetCode: Implement Trie (Prefix Tree)'
date: 2015-06-23 21:38:57
tags:
---
<hr/>
Implement a trie with insert, search, and startsWith methods.

```java
class TrieNode {

    private boolean isLeaf;
    private Map<Character, TrieNode> children;
    private char value;

    // Initialize your data structure here.
    public TrieNode() {
        this.isLeaf = false;
        this.children = new HashMap<Character, TrieNode>();
    }

    public TrieNode(char value) {
        this();
        this.value = value;
    }

    public void putChild(char c) {
        this.children.put(c, new TrieNode(c));
    }
    public boolean containsChild(char c) {
        return this.children.containsKey(c);
    }
    public TrieNode getChild(char c) {
        return containsChild(c)? this.children.get(c) : null;
    }

    public void setLeaf() {
        this.isLeaf = true;
    }

    public boolean isLeaf() {
        return this.isLeaf;
    }
}

public class Trie {

    private TrieNode root;

    public Trie() {
        root = new TrieNode();
    }

    // Inserts a word into the trie.
    public void insert(String word) {
        if(word == null || word.isEmpty()) {
            return;
        }

        char[] chars = word.toCharArray();
        TrieNode tmp = root;
        for(char c : chars) {
            if(!tmp.containsChild(c)) {
                tmp.putChild(c);
            }
            tmp = tmp.getChild(c);
        }
        tmp.setLeaf();
    }

    // Returns if the word is in the trie.
    public boolean search(String word) {
        if(word == null || word.isEmpty()) {
            return true;
        }
        char[] chars = word.toCharArray();
        TrieNode tmp = root;
        for(char c : chars) {
            if(!tmp.containsChild(c)) {
                return false;
            }
            tmp = tmp.getChild(c);
        }
        return tmp.isLeaf();
    }

    // Returns if there is any word in the trie
    // that starts with the given prefix.
    public boolean startsWith(String prefix) {
        if(prefix == null || prefix.isEmpty()) {
            return true;
        }
        char[] chars = prefix.toCharArray();
        TrieNode tmp = root;
        for(char c : chars) {
            if(!tmp.containsChild(c)) {
                return false;
            }
            tmp = tmp.getChild(c);
        }
        return true;
    }
}
```
