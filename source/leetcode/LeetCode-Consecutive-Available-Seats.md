title: 'LeetCode: Consecutive Available Seats'
date: 2017-08-30 20:03:22
---

Several friends at a cinema ticket office would like to reserve consecutive available seats.
Can you help to query all the consecutive available seats order by the seat_id using the following `cinema` table?
```
| seat_id | free |
|---------|------|
| 1       | 1    |
| 2       | 0    |
| 3       | 1    |
| 4       | 1    |
| 5       | 1    |
```
Your query should return the following result for the sample case above.
```
| seat_id |
|---------|
| 3       |
| 4       |
| 5       |
```
##### Note:
1. The seat_id is an auto increment int, and free is bool ('1' means free, and '0' means occupied.).
2. Consecutive available seats are more than 2(inclusive) seats consecutively available.

```sql
# Write your MySQL query statement below
select C1.seat_id from cinema C1  where
C1.free=1
and
(
    C1.seat_id+1 in (select seat_id from cinema where free=1)
    or
    C1.seat_id-1 in (select seat_id from cinema where free=1)
)
order by C1.seat_id
```
