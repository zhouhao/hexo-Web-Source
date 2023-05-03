---
title: SaltyNote Server Setup 
tags: [Ubuntu, SaltyNote]
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

### NginX and HTTPS

Now, we can connect NginX with our service, which means we want `http://dev.saltynote.com` displays the same content
as `http://dev.saltynote.com:8888` instead of showing NginX welcome page.

#### 1. Add Upstream

Open `/etc/nginx/nginx.conf`, and add a new `upstream` inside `http` section. (I named it as `service`, while it can be
any name you want.)

```nginx
http {

    ## Other configurations
    
    upstream service {
        server 127.0.0.1:8888;
    }

    ## Other configurations
}
```

#### 2. Connect it in Site Conf

Open `/etc/nginx/sites-available/default`, and update the `server_name` and `location` sections.

**Note**: You must own the domain before you can add them to `server_name`.

```nginx
server {
    listen 80;
    listen [::]:80;
    
    # You can enable multiple domains below
    server_name dev.saltynote.com;

    location / {
        proxy_pass http://service;
    }
}
```

#### 3. Reload or restart NginX

```bash
service nginx restart
```

![nginx-service](/img/blog/nginx-service.png)

#### 4. Enable Https

So far, everything seems working now, while the browser still complains `Not Secure` in the url bar. It is time to
enable https for our service. It is free with [Let's Encrypt](https://letsencrypt.org/).

##### 4.1 Install [Certbot](https://certbot.eff.org/)

It should be easy to install certbot by following
the [instruction](https://certbot.eff.org/lets-encrypt/ubuntufocal-nginx).

```bash
# Since I use nginx, I will run this to enable https
sudo certbot --nginx
```

![nginx-https](/img/blog/nginx-https.png)

#### 5. Hide service from port 8888

We enable NginX with https for our service now, and we can hide the original service running in port `8888` from the
public. There are multiple solutions for this. e.g. [`iptables`](https://www.cyberciti.biz/faq/iptables-block-port/).

While I find [`UFW - Uncomplicated Firewall`](https://help.ubuntu.com/community/UFW) is more user-friendly, so I will
choose it here.

```bash
➜  ~ ufw status
# It is inactive by default
Status: inactive
➜  ~ ufw enable
# It is OK ot enable it, it will not disrupt your current SSH connection
Command may disrupt existing ssh connections. Proceed with operation (y|n)? y
Firewall is active and enabled on system startup
➜  ~ ufw allow 22   # For SSH
Rule added
Rule added (v6)
➜  ~ ufw allow 80   # For http 
Rule added
Rule added (v6)
➜  ~ ufw allow 443  # For https 
Rule added
Rule added (v6)
➜  ~ ufw status
Status: active

To                         Action      From
--                         ------      ----
22                         ALLOW       Anywhere
80                         ALLOW       Anywhere
443                        ALLOW       Anywhere
22 (v6)                    ALLOW       Anywhere (v6)
80 (v6)                    ALLOW       Anywhere (v6)
443 (v6)                   ALLOW       Anywhere (v6)
```

**Note**:For enhanced security, you can change default SSH port 22 to other number.

Now you will not be able to access the service with https://dev.saltynote.com.

## All Set Now! 🎉

