---
title: Ubuntu Server Setup
tags: [Ubuntu]
categories: [程序员的日常, 日常]
date: 2020-12-23 22:28:32
---

This is an opinionated memo that lists the steps to set up an Ubuntu server for web service or website.
<!-- more -->

## 1. General Initialization

The step 1 is what I will do for all new servers, even for my personal Linux laptop.

### 1.1 Update Server first

```bash
# This step may take some time, just be patient
sudo apt update && sudo apt upgrade -y
```

When this step is done, you can restart your server. But usually, I will restart after I have everything installed.

### 1.2 Install Basic Tools

```bash
# Maybe most of them are already bundled with Ubuntu
sudo apt install git vim curl wget zsh htop
```

I really like `zsh`, and I will also enable [oh-my-zsh](https://ohmyz.sh/). But this is optional, even I highly recommend it.

## 2. Setup for Web Server

### 2.1 Install Necessary Software

```bash
sudo apt install openjdk-11-jre mariadb-server nginx
```

#### Java

I install open Java 11 here, based on your own requirement, you can either install Java 8 or Java 14, whatever you want.
The reason why I just install JRE not JDK is because I will only need Java Runtime in this server, and I will never try to compile or build any Java projects.

```bash
# Check whether java is installed correctly
root@dev:~# java -version
openjdk version "11.0.9.1" 2020-11-04
OpenJDK Runtime Environment (build 11.0.9.1+1-Ubuntu-0ubuntu1.20.04)
OpenJDK 64-Bit Server VM (build 11.0.9.1+1-Ubuntu-0ubuntu1.20.04, mixed mode, sharing)
```

#### MariaDB

It is almost the same as MySQL. Personally, I choose Mariadb these days.
An important reason is that they have different licenses.

* [MariaDB](https://mvnrepository.com/artifact/org.mariadb.jdbc/mariadb-java-client) is LGPL 2.1.
* [MySQL](https://mvnrepository.com/artifact/mysql/mysql-connector-java) is GPL 2.0, which is not compatible with MIT license.

If you take Open Source seriously, this is something that you should care. [如何选择开源许可证](http://www.ruanyifeng.com/blog/2011/05/how_to_choose_free_software_licenses.html)

**Configure MariaDB**

```bash
sudo mysql_secure_installation
# Select "Yes" to the end
```

**Verify MariaDB**

```bash
# You should see similar output as below:
root@dev:~# mysql -u root -p
Enter password:
Welcome to the MariaDB monitor.  Commands end with ; or \g.
Your MariaDB connection id is 57
Server version: 10.3.25-MariaDB-0ubuntu0.20.04.1 Ubuntu 20.04

Copyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

MariaDB [(none)]>
```

#### NginX

As a reverse proxy, NginX is very helpful. Usually, I use it as a load balancer.

Simply open `http://your-server-ip`, you will see a page showing these words

```text
Welcome to nginx!
If you see this page, the nginx web server is successfully installed and working. Further configuration is required.

For online documentation and support please refer to nginx.org.
Commercial support is available at nginx.com.

Thank you for using nginx.
```
