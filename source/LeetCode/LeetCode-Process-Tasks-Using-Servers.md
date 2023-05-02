title: 'LeetCode: 4Sum II'
date: 2023-05-01 23:03:22
---
1882. Process Tasks Using Servers: https://leetcode.com/problems/process-tasks-using-servers/description/

```java
class Solution {
    public int[] assignTasks(final int[] servers, final int[] tasks) {
        if (tasks == null || tasks.length == 0 || servers == null || servers.length == 0) return new int[0];

        PriorityQueue<int[]> serverInUser = new PriorityQueue<>((a, b) -> {
            int av = a[1] - b[1]; // sort by available time 1st
            if (av != 0) return av;
            int p = servers[a[0]] - servers[b[0]];
            return p == 0 ? a[0] - b[0] : p;
        });

        PriorityQueue<int[]> freeServer = new PriorityQueue<>((a, b) -> {
            int p = servers[a[0]] - servers[b[0]];
            return p == 0 ? a[0] - b[0] : p;
        });

        for (int i = 0; i < servers.length; i++) {
            freeServer.add(new int[]{i, 0});
        }

        int[] result = new int[tasks.length];

        for (int i = 0; i < tasks.length; i++) {
            int len = tasks[i];

            while (!serverInUser.isEmpty() && serverInUser.peek()[1] <= i) {
                freeServer.add(serverInUser.poll());
            }
            int[] s = null;
            if (!freeServer.isEmpty()) {
                s = freeServer.poll();
                s[1] = i + len; // since some server may have available time less than i, we need to use current time `i` as start time
            } else {
                s = serverInUser.poll();
                s[1] += len;
            }
            
            serverInUser.add(s);
            result[i] = s[0];
        }
        return result;
    }
}
```