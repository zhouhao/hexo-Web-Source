title: 'LeetCode: Triangle Judgement'
date: 2017-08-30 20:03:22
---

A pupil Tim gets homework to identify whether three line segments could possibly form a triangle.

However, this assignment is very heavy because there are hundreds of records to calculate.
Could you help Tim by writing a query to judge whether these three sides can form a triangle, assuming table triangle holds the length of the three sides x, y and z.
```
| x  | y  | z  |
|----|----|----|
| 13 | 15 | 30 |
| 10 | 20 | 15 |
```
For the sample data above, your query should return the follow result:
```
| x  | y  | z  | triangle |
|----|----|----|----------|
| 13 | 15 | 30 | No       |
| 10 | 20 | 15 | Yes      |
```

```sql
# Write your MySQL query statement below
select x, y, z, case when (x+y+z) - GREATEST(x,y,z) > GREATEST(x,y,z) then 'Yes' else 'No' end as triangle from triangle;
```
