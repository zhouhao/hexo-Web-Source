title: "Fix: Tomcat7 restart too slow in Ubuntu 14.04"
date: 2015-01-03 11:59:13
tags:
  - Tomcat 7
  - Ubuntu
---
I have two servers in [DigitalOcean](https://www.digitalocean.com/), and both of them are Ubutun with tomcat 7. Recently, I found that if I want to restart tomcat, it will cost me more than 5 minutes(No errors during this). And the worest is `INFO: Server startup in 1497026 ms`(almots half an hour).
<!-- more -->
Then I opened a support ticket in DigitalOcean, then I get the response very quick as below.

```bash
Hello,

This is a known issue with Ubuntu and Tomcat:

The issue stems from the use of /dev/random as its RNG, so app startup in Tomcat can be slow due to a lack of entropy (upwards of 5 minutes). You can correct this by modifying /etc/default/tomcat7. On the the JAVA_OPTS line, add the following:

-Djava.security.egd=file:/dev/./urandom
```

I highly recommend DigitalOcean if you want to setup your own VPS.