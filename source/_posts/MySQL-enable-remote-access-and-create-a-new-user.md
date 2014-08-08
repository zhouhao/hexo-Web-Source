title: MySQL enable remote access and create a new user
date: 2014-04-21 10:46:29
tags:
 - MySQL
---
###1. Enable Remote Access
Open 
```
/etc/mysql/my.cnf
```
<!-- more -->
Comment `bind-address  = 127.0.0.1` as below:
```
# Instead of skip-networking the default is now to listen only on
# localhost which is more compatible and is not less secure.
#bind-address           = 127.0.0.1
```
Restart MySQL service with 
```
/etc/init.d/mysql restart
```
to make changes into effect. 

<h3>2. Create a New User</h3>
Login MySQL as root, then run the code as below[change the field you want]:
```
mysql> CREATE USER 'USER_NAME'@'localhost' IDENTIFIED BY 'NEW-PASSWORD';
mysql> GRANT ALL PRIVILEGES ON DB_NAME.* TO 'USER_NAME'@'localhost' WITH GRANT OPTION;
mysql> CREATE USER 'USER_NAME'@'%' IDENTIFIED BY 'NEW-PASSWORD';
mysql> GRANT ALL PRIVILEGES ON DB_NAME.* TO 'USER_NAME'@'%' WITH GRANT OPTION;
```
