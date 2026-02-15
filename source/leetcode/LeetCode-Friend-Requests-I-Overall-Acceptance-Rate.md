title: 'LeetCode: Friend Requests I: Overall Acceptance Rate'
date: 2017-08-30 20:03:22
---
In social network like Facebook or Twitter, people send friend requests and accept others’ requests as well. Now given two tables as below:

Table: `friend_request`
```
| sender_id | send_to_id |request_date|
|-----------|------------|------------|
| 1         | 2          | 2016_06-01 |
| 1         | 3          | 2016_06-01 |
| 1         | 4          | 2016_06-01 |
| 2         | 3          | 2016_06-02 |
| 3         | 4          | 2016-06-09 |
```

Table: `request_accepted`
```
| requester_id | accepter_id |accept_date |
|--------------|-------------|------------|
| 1            | 2           | 2016_06-03 |
| 1            | 3           | 2016-06-08 |
| 2            | 3           | 2016-06-08 |
| 3            | 4           | 2016-06-09 |
| 3            | 4           | 2016-06-10 |
```
Write a query to find the overall acceptance rate of requests rounded to 2 decimals, which is the number of acceptance divide the number of requests.

For the sample data above, your query should return the following result.
```
|accept_rate|
|-----------|
|       0.80|
```
#### Note:
1. The accepted requests are not necessarily from the table friend_request. In this case, you just need to simply count the total accepted requests (no matter whether they are in the original requests), and divide it by the number of requests to get the acceptance rate.
2. It is possible that a sender sends multiple requests to the same receiver, and a request could be accepted more than once. In this case, the ‘duplicated’ requests or acceptances are only counted once.
3. If there is no requests at all, you should return 0.00 as the accept_rate.

**Explanation**: There are 4 unique accepted requests, and there are 5 requests in total. So the rate is 0.80.

```sql
# Write your MySQL query statement below
#select IFNULL(cast((sum(case when a.accepter_id > 0 then 1 else 0 end) / count(*)) as decimal (10,2)), 0.00) as accept_rate
#from (select distinct sender_id, send_to_id from friend_request) r
#left join (select distinct requester_id, accepter_id from request_accepted) a on r.sender_id = a.requester_id and r.send_to_id = a.accepter_id;

select
round(
    ifnull(
    (select count(*) from (select distinct requester_id, accepter_id from request_accepted) as A)
    /
    (select count(*) from (select distinct sender_id, send_to_id from friend_request) as B),
    0)
, 2) as accept_rate;
```
