title: 'Ubuntu: change time zone'
date: 2014-07-10 19:04:04
tags: [Ubuntu， "Useful Commands"]
categories: [计算机那些事, 普通]
---
Recently, I always have work in Ubuntu servers. And sometimes when I tried to output a timestamp from server side to front end, I find something is "wrong". Such I want time in EST, but the default is UTC.
<!-- more -->

In this case, there is a useful command in Ubuntu:  

```bash
sudo dpkg-reconfigure tzdata
```

Then, you will see a list of country, choose the right one you need.

### In my Java Project
Sometime, even I set time zone to ETS for Ubuntu server, I still get the time "wrong" in my Java Code. In this case, I just add

```java
TimeZone.setDefault(TimeZone.getTimeZone("EST"));
```

in my Global Filter/handler.
