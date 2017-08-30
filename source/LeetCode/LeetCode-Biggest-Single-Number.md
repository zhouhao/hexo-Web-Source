title: 'LeetCode: Biggest Single Number'
date: 2017-08-30 20:03:22
---

Table `number` contains many numbers in column num including duplicated ones.
Can you write a SQL query to find the biggest number, which only appears once.
```
+---+
|num|
+---+
| 8 |
| 8 |
| 3 |
| 3 |
| 1 |
| 4 |
| 5 |
| 6 |
```
For the sample data above, your query should return the following result:
```
+---+
|num|
+---+
| 6 |
```
#### Note:
1. If there is no such number, just output `null`.

```SQL
# Write your MySQL query statement below
select max(t.num) as num from (select num from number group by num having count(*) =1) t;
```
