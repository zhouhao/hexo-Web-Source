title: 'Tomcat7: Change Port to 80'
date: 2014-07-14 21:27:08
tags:
  - Tomcat 7
  - Ubuntu
---
I have many servers, which run Java Web applications. For development, I like Jetty, but for production, I prefer Tomcat7 now.
###In ubuntu, you need root permission to use ports under 1024.
<!-- more -->

When you Google this topic, you will find alot of solutions around the Internet, but many of them are not so useful, even some try to trap you.

So I just record what I do for this issue in **Ubuntu**:   

1. Open `/var/lib/tomcat7/conf/server.xml` or `/etc/tomcat7/server.xml`(they are the same), modify code as below
```xml
<!-- more code here -->

  <Connector port="80" protocol="HTTP/1.1"
             connectionTimeout="20000"
             URIEncoding="UTF-8"
             redirectPort="8443" />

<!-- more code here -->
```

2. Open `/etc/default/tomcat`:    
```xml
# If you run Tomcat on port numbers that are all higher than 1023, then you
# do not need authbind.  It is used for binding Tomcat to lower port numbers.
# NOTE: authbind works only with IPv4.  Do not enable it when using IPv6.
# (yes/no, default: no)
AUTHBIND=yes
```

3. In very rare case, you need to change `TOMCAT7_USER=tomcat7` to `TOMCAT7_USER=root`. [This is not recommended]

