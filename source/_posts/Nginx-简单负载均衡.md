title: 'Nginx: 简单负载均衡'
date: 2015-07-09 19:52:58
tags:
 - Nginx
categories:
  - 计算机那些事
  - 网站
---
工作之前的时候，做任何web项目，我都会选择用PHP，简洁，快速，有时候很赞同PHP是世界上最好的语言，但是有些时候还是不如Java来的利索。可惜的是Java“不支持”热部署（至少在生产环境下不建议热部署），
导致每次部署都会有一段服务下线的时间（更糟糕的是用户的session也会随之丢失，最最糟糕的时候，每次部署，有时候还不得不重启一下Tomcat）。
<!-- more -->
以上就是大背景。

我第一次使用nginx的原因是因为我不想通过配置tomcat来使它的端口改为`80`（Linux `1024`一下的端口需要root权限），正好本着体验新工具的想法就用nginx做了简单的`80`转发。

随着自己做的`Java`相关的项目越来越多，我越来越感觉到这种`热部署`的重要性（保证服务下线时间最短）。介于自己是个穷DS，也买不了什么高大上的设备。就想到一个用nginx的负载均衡来简单实现一个可以貌似达到`7*24`的生产环境（*我自己现在也是做了一些测试，还没在真实环境中这么做*）。

### 底下我快速过一下如何快速部署nginx的负载均衡（Ubuntu 14.04）：
1. 打开`/etc/nginx/nginx.conf`，在`http`节点里添加:

```bash
upstream myServer {
    # server 127.0.0.1:9090 down;
    server 127.0.0.1:8888 weight=2;
    server 127.0.0.1:8080 weight=2;
    # server 127.0.0.1:6060;
    # server 127.0.0.1:7070 backup;
}
```

2. 打开`/etc/nginx/sites-available/default`

```bash
server {

    ### a lot of default stuff, no need to change

    location / {
        # First attempt to serve request as file, then
        # as directory, then fall back to displaying a 404.
        # try_files $uri $uri/ =404;
        # Uncomment to enable naxsi on this location
        # include /etc/nginx/naxsi.rules

        proxy_pass http://myServer;
    }

    ### a lot of default stuff, no need to change
}
```

通过上述两步的操作，你可以访问那个**对外的URL**，它会同比例（自己在测试的时候，发现貌似不是1:1的，虽然weight值一样）的导向`127.0.0.1:8888`或`127.0.0.1:8080`。

### Note:
这种负载均衡的一个缺点就是需要自己是同步`session`,不然用户不同的request导向不同的内部服务器，会把用户弄疯的。-> 可以用`ip_hash`解决，但是如果用`redis`的话，估计拓展性更好

### 总结：
所以我觉得一个最妥协的伪热部署，就是在nginx后面部署两个或多个tomcat服务器，分批次部署最新的代码，保证服务的我线上时间。（自己想想还是有很多不合理的地方，毕竟我自己也没试过）。
还有，我觉得内部的服务没必要被公网访问（安全，这样可以统一做认证），所以可以在内部用docker来部署多个tomcat。

### 感谢博客园的日志[Nginx负载均衡](http://www.cnblogs.com/xiaogangqq123/archive/2011/03/04/1971002.html)，更多详情，大家可以参考这边文章
