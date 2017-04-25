title: Jetbrains-toolbox connection issue with OpenSSL 1.1+
date: 2017-04-23 17:33:12
tags: [Jetbrains, Toolbox, OpenSSL] 
categories: [程序员的日常, 普通]
---
作为一个以Java为主开发语言的攻城狮，我觉得我已经离不开Jetbrains的产品了。JB公司前段时间推出的toolbox小工具我也在第一时间使用了（不用的话根本就追不上版本帝的更新节奏）。然而，最近我吧我的系统改为深度的Linux(15.4)之后，我发现toolbox挂了。。。挂了。。。

<!-- more -->

![链接失败](/img/toolbox-error.png)

一阵Google之后，找到了这个https://intellij-support.jetbrains.com/hc/en-us/community/posts/115000160850--resolved-JetBrains-Toolbox-Error-creating-SSL-context
里面提到在新版本中会修复这个问题，问题是我不能就这么坐以待毙等下一个版本吧。

于是在(这个里面)[https://youtrack.jetbrains.com/issue/ALL-1486]找到了临时的解决方法。
> 错误原因就是toolbox不支持openssl1.1+版本。

### 临时解决方案如下（方法来自上述链接）

1. 安装旧版本的openssl（需要`sudo`）

```bash
mkdir -p "/opt/openssl-1.0.2k"
cd "/opt/openssl-1.0.2k"
curl -O https://www.openssl.org/source/openssl-1.0.2k.tar.gz
tar xzf openssl-1.0.2k.tar.gz
cd openssl-1.0.2k
./config shared --prefix="/opt/openssl-1.0.2k"
make
make install
```
2. 添加自己的启动脚本

```bash
#!/bin/sh
export LD_LIBRARY_PATH=/opt/openssl-1.0.2k/lib
exec $HOME/bin/jetbrains-toolbox "$@"
```

### 至此，toolbox应该可以正常启动了。
Note: 如果设置了toolbox的开机启动，就会发现还是会有链接问题，只需要关了，再通过启动脚本打开就行。坐等JB公司更新toolbox新版本。