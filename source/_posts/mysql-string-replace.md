---
title: MySQL String Replace
date: 2013-06-05 18:07:41
tags: [MySQL]
categories: [计算机那些事, 数据库]
---
最近在处理数据库转移的活（把就网站的数据库拷贝到新的网站中），本来想写个脚本的，但是上面催的急，就先手工导入了数据。导入后遇到一个问题就是：原先的图片路径和新的网站中不一致。
<!-- more -->
```sql
UPDATE `table_name` 
SET `field_name` = replace (`field_name`,'from_str','to_str') 
WHERE `field_name` LIKE '%from_str%'
```
就这么一句话解决了所有的问题！在此感谢博客园。
    
参考页面：[http://www.cnblogs.com/freespider/archive/2011/09/13/2174386.html](http://www.cnblogs.com/freespider/archive/2011/09/13/2174386.html)



#### MySQL "where" field is case-sensitive. so when you need to make in-sensitive, you'd add *`COLLATE UTF8_GENERAL_CI`* when doing search, like below:    
```sql
SELECT  *
FROM    trees
WHERE   trees.`title` COLLATE UTF8_GENERAL_CI LIKE '%elm%'
```

Thanks for: [http://stackoverflow.com/questions/2876789/case-insensitive-for-sql-like-wildcard-statement](http://stackoverflow.com/questions/2876789/case-insensitive-for-sql-like-wildcard-statement)  

#### If you want to select the 500th record from a table, you can do it like below:   
```sql
SELECT products_id 
FROM  products 
ORDER BY products_id DESC 
LIMIT 1 OFFSET 500
```
Thanks for: [http://stackoverflow.com/questions/16568/how-to-select-the-nth-row-in-a-sql-database-table](http://stackoverflow.com/questions/16568/how-to-select-the-nth-row-in-a-sql-database-table)
