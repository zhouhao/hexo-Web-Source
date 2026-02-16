---
title: install netease music in Ubuntu
date: 2018-05-15 17:17:40
tags: [Ubuntu, 网易]
categories: [编程人生]
---
在18.04出来之前，一直用Ubuntu的16.04，安装网易音乐之后，只需要在`/usr/share/applications/netease-cloud-music.desktop` 添加一个 `--no-sandbox`就可以解决了。
```
Exec=netease-cloud-music --no-sandbox %U
```
<!-- more -->
但是等我升级之后，网易云音乐怎么也启动不了。后来在[知乎](https://www.zhihu.com/question/268165660/answer/377142494)中再次看到了解决方法，顺便在此记录一下。

```bash
# 需要在网上搜索并下载网易云音乐1.0.0版本.deb

# 先创建软件包目录
mkdir -p extract/DEBIAN

# 用dpkg解压
dpkg-deb -x neteasemusic.deb extract/
dpkg-deb -e neteasemusic.deb extract/DEBIAN

# 然后用文本编辑器打开extract/DEBIAN/control，找到Depends行，
# 删除libqt5libqgtk2，删除libfontconfig1 (>= 2.11.94)中的(>= 2.11.94)

# 然后重新打包：
# 建立软件包生成目录
mkdir build
# 重新打包 注意: build/之前是有空格的，如果你手动输入的话
dpkg-deb -b extract/ build/

# 最后重新安装:
dpkg -i  *.deb

```

Note: 在这个方式中你不加`--no-sandbox`也没有问题。


### 海外国内解锁音乐
点击[unblock-NetEaseMusic](https://github.com/fengjueming/unblock-NetEaseMusic)获取更多信息。