title: 'LeetCode: Employee Bonus'
date: 2017-08-30 20:03:22
---

Select all employee's name and bonus whose bonus is < 1000.

Table:`Employee`
```
+-------+--------+-----------+--------+
| empId |  name  | supervisor| salary |
+-------+--------+-----------+--------+
|   1   | John   |  3        | 1000   |
|   2   | Dan    |  3        | 2000   |
|   3   | Brad   |  null     | 4000   |
|   4   | Thomas |  3        | 4000   |
+-------+--------+-----------+--------+
empId is the primary key column for this table.
```
Table: `Bonus`

```
+-------+-------+
| empId | bonus |
+-------+-------+
| 2     | 500   |
| 4     | 2000  |
+-------+-------+
empId is the primary key column for this table.
```
Example ouput:
```
+-------+-------+
| name  | bonus |
+-------+-------+
| John  | null  |
| Dan   | 500   |
| Brad  | null  |
+-------+-------+
```

```sql
# Write your MySQL query statement below

select name, bonus
from Employee
left join Bonus on Employee.empId = Bonus.empId
where bonus < 1000 or bonus is null;
```
