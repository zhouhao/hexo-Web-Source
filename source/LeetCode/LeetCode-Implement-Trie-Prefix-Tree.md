title: 'LeetCode: Implement Trie (Prefix Tree)'
date: 2015-06-23 21:38:57
tags:
---
<hr/>   
Implement a trie with insert, search, and startsWith methods.

```java
public class Trie {

	private TrieNode root;

	public Trie() {
		root = new TrieNode();
	}

	// Inserts a word into the trie.
	public void insert(String word) {
		if (word == null || word.isEmpty()) {
			return;
		}

		Map<Character, TrieNode> children = root.getChildren();

		for (int i = 0; i < word.length(); i++) {
			char c = word.charAt(i);
			TrieNode tmp;
			if (children.containsKey(c)) {
				tmp = children.get(c);
			} else {
				tmp = new TrieNode(c);
				children.put(c, tmp);
			}
			children = tmp.getChildren();

			if (i == word.length() - 1) {
				tmp.setIsLeaf(true);
			}
		}
	}

	// Returns if the word is in the trie.
	public boolean search(String word) {
		if (word == null || word.isEmpty()) {
			return true;
		}
		Map<Character, TrieNode> children = root.getChildren();
		char[] chars = word.toCharArray();
		TrieNode tmp = null;
		for (char c : chars) {
			if (!children.containsKey(c)) {
				return false;
			} else {
				tmp = children.get(c);
				children = tmp.getChildren();
			}
		}
		return tmp != null && tmp.isLeaf();
	}

	// Returns if there is any word in the trie
	// that starts with the given prefix.
	public boolean startsWith(String prefix) {
		if (prefix == null || prefix.isEmpty()) {
			return true;
		}
		Map<Character, TrieNode> children = root.getChildren();
		char[] chars = prefix.toCharArray();

		for (char c : chars) {
			if (!children.containsKey(c)) {
				return false;
			} else {
				children = children.get(c).getChildren();
			}
		}
		return true;
	}

	class TrieNode {

		private Map<Character, TrieNode> children;
		private Character value;
		private boolean isLeaf;

		// Initialize your data structure here.
		public TrieNode() {
			children = new HashMap<Character, TrieNode>();
			isLeaf = false;
		}

		public TrieNode(Character value) {
			this();
			this.value = value;
		}

		public Map<Character, TrieNode> getChildren() {
			return children;
		}

		public boolean isLeaf() {
			return isLeaf;
		}

		public void setIsLeaf(boolean isLeaf) {
			this.isLeaf = isLeaf;
		}
	}
}
```