---
title: SaltyNote Server Setup 
tags: [Ubuntu]
categories: [程序员的日常, 日常]
date: 2020-12-24 00:26:41
---

Last post [Ubuntu Server Setup](https://hzhou.me/2020/12/23/ubuntu-server-setup/), I talked about the basic setup for an Ubuntu server. In this post, I will share some details about the setup for
saltynote server.
<!-- more -->

## Database

### 1. Create a new database, and a database user

Login database from terminal with `mysql -u root -p`, and execute follow command lines:

```sql
CREATE DATABASE saltynote;

# Please update USER_NAME and A-STRONG-PASSWORD.
CREATE USER 'USER_NAME'@'localhost' IDENTIFIED BY 'A_STRONG_PASSWORD';
GRANT ALL PRIVILEGES ON saltynote.* TO 'USER_NAME'@'localhost' WITH GRANT OPTION;
```

Note: You can find more details about how to enable remote access from [this post](https://hzhou.me/2014/04/21/mysql-enable-remote-access-and-create-a-new-user/). 
While here, I only enable it with local access, as I for security reason, it is not required for current stage.



## Spring Boot Service

The [service](https://github.com/SaltyNote/saltynote-service) is implemented with Spring Boot. So it can be run with a standalone jar file as a [Systemd](https://www.freedesktop.org/wiki/Software/systemd/) service.
You can find more official information from [this link](https://docs.spring.io/spring-boot/docs/current/reference/html/deployment.html#deployment-systemd-service).

### Create a new user
For security, I will create a specific user to run the service. [This post](https://www.baeldung.com/spring-boot-app-as-a-service) will be very helpful for this step.

```bash
# Create a new user, and create its home dir
sudo useradd -m saltynote
# Update its password, so the new user can log in later 
sudo passwd saltynote
```

### Create Service Folder & Service Setup

```bash
mkdir -p /home/saltynote/service
```

Upload the jar file to `/home/saltynote/service` folder, and create `application.properties` inside that folder, which can be used to set some sensitive information. e.g. database connection info.

```bash
# Make saltynote is the owner of service.jar
chown saltynote:saltynote service.jar
# Only give owner read and execute permission
chmod 500 service.jar
```

#### Systemd Setup
Create `note.service` in `/etc/systemd/system` dir, and populate `note.service` as below:
```systemd
[Unit]
Description=SaltyNote Service
After=syslog.target

[Service]
User=saltynote
ExecStart=/home/saltynote/service/service.jar
SuccessExitStatus=143

[Install]
WantedBy=multi-user.target
```
We can enable this service to auto start when system restarts by:
```bash
systemctl enable note.service

# manually start it
systemctl start note.service

# check its status
systemctl status note.service
```

If everything goes well, the service should start now.
Open http://YOUR-SERVER-IP:8888, you should see a welcome message in JSON format.



```bash
# You can check that the service is running with saltynote user.
ps aux | grep java | grep -v grep
```

## NginX and HTTPS
// TODO

TO BE DONE 
