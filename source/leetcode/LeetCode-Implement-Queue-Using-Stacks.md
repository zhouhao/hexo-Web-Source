title: 'LeetCode: Implement Queue using Stacks'
date: 2015-08-04 00:17:22
---
 Implement the following operations of a queue using stacks.
* `push(x)` -- Push element x to the back of queue.
* `pop()` -- Removes the element from in front of queue.
* `peek()` -- Get the front element.
* `empty()` -- Return whether the queue is empty.
### Notes:
* You must use only standard operations of a stack -- which means only push to top, peek/pop from top, size, and is empty operations are valid.
* Depending on your language, stack may not be supported natively. You may simulate a stack by using a list or deque (double-ended queue), as long as you use only standard operations of a stack.
* You may assume that all operations are valid (for example, no pop or peek operations will be called on an empty queue).
```java
public class ImplementQueueUsingStacks {
    
    private Stack<Integer> s1 = new Stack<>();
    private Stack<Integer> s2 = new Stack<>();
    private boolean pushable = true;
    
    // Push element x to the back of queue.
    public void push(int x) {
        if (!pushable) {
            if (s1.isEmpty()) {
                while (!s2.isEmpty()) {
                    s1.push(s2.pop());
                }
            } else {
                while (!s1.isEmpty()) {
                    s2.push(s1.pop());
                }
            }
            pushable = true;
        }
        
        if (s2.isEmpty()) {
            s1.push(x);
        } else {
            s2.push(x);
        }
    }
    
    // Removes the element from in front of queue.
    public void pop() {
        if (pushable) {
            pushable = false;
            if (s1.isEmpty()) {
                while (!s2.isEmpty()) {
                    s1.push(s2.pop());
                }
                s1.pop();
            } else {
                while (!s1.isEmpty()) {
                    s2.push(s1.pop());
                }
                s2.pop();
            }
        } else {
            if (s1.isEmpty()) {
                s2.pop();
            } else {
                s1.pop();
            }
        }
    }
    
    // Get the front element.
    public int peek() {
        if (pushable) {
            pushable = false;
            if (s1.isEmpty()) {
                while (!s2.isEmpty()) {
                    s1.push(s2.pop());
                }
                return s1.peek();
            } else {
                while (!s1.isEmpty()) {
                    s2.push(s1.pop());
                }
                return s2.peek();
            }
        } else {
            return s1.isEmpty() ? s2.peek() : s1.peek();
        }
    }
    
    // Return whether the queue is empty.
    public boolean empty() {
        return s1.isEmpty() && s2.isEmpty();
    }
}
```
