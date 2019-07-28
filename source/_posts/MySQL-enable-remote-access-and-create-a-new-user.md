---
title: MySQL enable remote access and create a new user
date: 2014-04-21 10:46:29
tags: [MySQL]
categories: [计算机那些事, 数据库]
---
### 1. Enable Remote Access
Open 
``` bash
/etc/mysql/my.cnf
# in Ubuntu 16.04, the path should be /etc/mysql/mysql.conf.d/mysqld.cnf
```
<!-- more -->
Comment `bind-address  = 127.0.0.1` as below:
```
# localhost which is more compatible and is not less secure.
# bind-address           = 127.0.0.1 # or you can change its value to 0.0.0.0
```
Restart MySQL service with 
```bash
/etc/init.d/mysql restart
# service mysql restart
```
to make changes into effect. 

### 2. Create a New User
Login MySQL as root, then run the code as below[change the field you want]:
```sql
CREATE USER 'USER_NAME'@'localhost' IDENTIFIED BY 'NEW-PASSWORD';
GRANT ALL PRIVILEGES ON DB_NAME.* TO 'USER_NAME'@'localhost' WITH GRANT OPTION;
CREATE USER 'USER_NAME'@'%' IDENTIFIED BY 'NEW-PASSWORD';
GRANT ALL PRIVILEGES ON DB_NAME.* TO 'USER_NAME'@'%' WITH GRANT OPTION;
```

### 3. Enable `root` remote access, better not do this
```sql
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'password';
```
