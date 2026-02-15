title: 'LeetCode: Flatten Nested List Iterator'
date: 2016-06-25 20:03:22
---

Given a nested list of integers, implement an iterator to flatten it.

Each element is either an integer, or a list -- whose elements may also be integers or other lists.

### Example 1:
Given the list `[[1,1],2,[1,1]]`,

By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: `[1,1,2,1,1]`.

### Example 2:
Given the list `[1,[4,[6]]]`,

By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: `[1,4,6]`.

```java
public class NestedIterator implements Iterator<Integer> {

  private Stack<NestedInteger> stack;

  public NestedIterator(List<NestedInteger> nestedList) {
      stack = new Stack<>();
      if (nestedList == null || nestedList.isEmpty()) return;
      for (int i = nestedList.size() - 1; i >= 0; i--) {
          stack.push(nestedList.get(i));
      }
  }

  @Override
  public Integer next() {
      if (hasNext()) return stack.pop().getInteger();
      return null;
  }

  @Override
  public boolean hasNext() {
      while (!stack.isEmpty()) {
          NestedInteger ni = stack.peek();
          if (ni.isInteger()) return true;
          stack.pop();
          List<NestedInteger> list = ni.getList();
          for (int i = list.size() - 1; i >= 0; i--) {
              stack.push(list.get(i));
          }
      }
      return false;
  }
}
```
