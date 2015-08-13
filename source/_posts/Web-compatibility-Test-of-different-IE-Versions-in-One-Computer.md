title: 'Web Compatibility Test of different IE Versions in One Computer'
date: 2014-07-15 22:05:23
tags:
 - IE
 - Front End
 - Web
---
I have tried almost every browser, and my favorite one is Google Chrome:

1. Fast
2. Easy to sync everything I need
3. Easy for web developing
4. ... more ...

But this is not the execuse that I can never care about IE. In my daily life, I have many web related projects. Even I use Chrome, I must care for the users who use IE to visit my works.
<!-- more -->

Sincerely, I hate IE (all versions), becasue it takes away a lot of time from me for hacking on it.

As all web developers know, we can hardly install multi-verions of IEs in the same computer(Virtaul machine is too memory comsuming). In old days, I use [IETester](http://ietester.en.softonic.com/) to test my websites in different IEs. But it is out-of-date now.

The great news is that, actually, IE already gives us a way to do that:
```
Press "F12", you can go into Dev tools.
```
![Screenshot](https://dn-myblog.qbox.me/img/blog/ietest.png "Screenshot")

###I find in this way, IE mode under 9 cannot be detected by this [browser detector](https://github.com/ded/bowser).
