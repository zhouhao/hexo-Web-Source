title: 'LeetCode: Classes More Than Students'
date: 2017-08-30 20:03:22
---
There is a table `courses` with columns: student and class

Please list out all classes which have more than or equal to 5 students.

For example, the table:
```
+---------+------------+
| student | class      |
+---------+------------+
| A       | Math       |
| B       | English    |
| C       | Math       |
| D       | Biology    |
| E       | Math       |
| F       | Computer   |
| G       | Math       |
| H       | Math       |
| I       | Math       |
+---------+------------+
```
Should output:
```
+---------+
| class   |
+---------+
| Math    |
+---------+
```
#### Note:
The students should not be counted duplicate in each course.


```sql
# Write your MySQL query statement below
select class from (select distinct student, class from courses) t group by class having count(*) >=5;
```
