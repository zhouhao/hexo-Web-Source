---
title: "Fix: Tomcat7 restart too slow in Ubuntu 14.04"
date: 2015-01-03 11:59:13
tags: ["Tomcat 7", Ubuntu]
categories: [编程人生, 普通]
---
I have two servers in [DigitalOcean](https://www.digitalocean.com/), and both of them are Ubutun with tomcat 7. Recently, I found that if I want to restart tomcat, it will cost me more than 5 minutes(No errors during this). And the worest is(almots half an hour):  
```bash
INFO: Server startup in 1497026 ms
```
<!-- more -->
Then I opened a support ticket in DigitalOcean, then I get the response very quick as below.

```bash
Hello,

This is a known issue with Ubuntu and Tomcat:

The issue stems from the use of /dev/random as its RNG,
so app startup in Tomcat can be slow due to a lack of entropy (upwards of 5 minutes).
You can correct this by modifying /etc/default/tomcat7. On the the JAVA_OPTS line, add the following:

-Djava.security.egd=file:/dev/./urandom
```

### Entropy Source (http://wiki.apache.org/tomcat/HowTo/FasterStartUp)

Tomcat 7+ heavily relies on SecureRandom class to provide random values for its session ids and in other places. Depending on your JRE it can cause delays during startup if entropy source that is used to initialize SecureRandom is short of entropy. You will see warning in the logs when this happens, e.g.:

```bash
<DATE> org.apache.catalina.util.SessionIdGenerator createSecureRandom
INFO: Creation of SecureRandom instance for session ID generation using [SHA1PRNG] took [5172] milliseconds.
```
There is a way to configure JRE to use a non-blocking entropy source by setting the following system property: `-Djava.security.egd=file:/dev/./urandom`

Note the `"/./"` characters in the value. They are needed to work around known [Oracle JRE bug #6202721](http://bugs.sun.com/bugdatabase/view_bug.do?bug_id=6202721). See also [JDK Enhancement Proposal 123](http://openjdk.java.net/jeps/123). It is known that implementation of SecureRandom was improved in Java 8 onwards.

Also note that replacing the blocking entropy source (`/dev/random`) with a non-blocking one actually reduces security because you are getting less-random data. If you have a problem generating entropy on your server (which is common), consider looking into entropy-generating hardware products such as "EntropyKey".
