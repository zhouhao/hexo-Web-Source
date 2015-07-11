title: "Tomcat7 failed to start: address already in used"
date: 2014-08-31 19:41:28
tags:
 - Tomcat 7
---
Sometime, when I failed to restart my tomcat7 server, and in the log, it returns error: **address already in use!**
<!-- more -->

In this case, you can do some check as below:

1. Check whether the port for tomcat7 is used by other applications, such as apache2, nginx... The port number may be 80, 8080, which depends on your configuration, but default is 8080.

2. In some rare cases, I am sure the ports above is not occupied by other application. So, what is happening???

###Please check whether the shut down port 8005 is occupied or not, and this may happen if tomcat7 crashes!

```bash
# find the pid of 8005
fuser 8005/tcp

# kill the pid
kill -9 ${number_of_pid}
```

###Now, you can restart your tomcat 7!
