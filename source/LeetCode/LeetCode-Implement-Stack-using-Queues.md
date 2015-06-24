title: 'LeetCode: Implement Stack using Queues'
date: 2015-06-23 20:31:09
tags:
 - LeetCode
---
Implement the following operations of a stack using queues.
```
push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
empty() -- Return whether the stack is empty.
```

### Notes:
You must use only standard operations of a queue -- which means only push to back, peek/pop from front, size, and is empty operations are valid.   
Depending on your language, queue may not be supported natively. You may simulate a queue by using a list or deque (double-ended queue), as long as you use only standard operations of a queue.   
You may assume that all operations are valid (for example, no pop or top operations will be called on an empty stack).   

<!-- more -->

```java
public class ImplementStackUsingQueues {
    private Queue<Integer> q1 = new LinkedList<Integer>();
    private Queue<Integer> q2 = new LinkedList<Integer>();

    // Push element x onto stack.
    public void push(int x) {
        if (empty()) {
            q1.add(x);
            return;
        }

        if (q1.isEmpty()) {
            q1.add(x);
            while (!q2.isEmpty()) {
                q1.add(q2.poll());
            }
        } else {
            q2.add(x);
            while (!q1.isEmpty()) {
                q2.add(q1.poll());
            }
        }
    }

    // Removes the element on top of the stack.
    public void pop() {
        if (empty()) {
            return;
        }
        if (q1.isEmpty()) {
            q2.poll();
        } else {
            q1.poll();
        }
    }

    // Get the top element.
    public int top() {
        int result;
        if (q1.isEmpty()) {
            result = q2.peek();
        } else {
            result = q1.peek();
        }
        return result;
    }

    // Return whether the stack is empty.
    public boolean empty() {
        return q1.isEmpty() && q2.isEmpty();
    }
}
```