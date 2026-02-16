---
title: 万恶的Adobe Reader安装
date: 2015-08-05 13:53:43
tags: [应用软件]
categories: [编程人生, 二逼]
---
对于PDF文件，我一直都是用[Foxit Reader](https://www.foxitsoftware.com/products/pdf-reader/)，但是最近在测试网站在IE中显示PDF文件的时候（IE真操蛋，没有内置的PDF渲染器，需要插件支持），公司让我安装一下Adobe Reader。
*无奈* 之下又得安装一下。没想到整个安装过程比我想象的折腾。

<!-- more -->
大约在半年前，我是在我电脑上安装过Adobe Reader的，但是用起来比Foxit差太多了，然后就卸载了。于是这次*不干净的*卸载，给我今天的安装带来了莫大的折腾。

### 官网下载
直接从官网下载了一个英文版的，准备直接安装，还没开始就跳出一个错误：
```
Windows Installer does not permit updating of managed advertised products.
At least one feature of the product must be installed before applying the update.
```

也不知道这是微软的问题还是Adobe的问题。偶尔还会跳出另一个错误：`Setup had detected that you already have a more functional product installed. Setup will now terminate`。

最后按照论坛中[Unable to install Adobe Reader 10 or 11](https://forums.adobe.com/message/6571183#6571183)操作了一遍。都逼我重启了，这个问题依旧在。

### 虚拟机
迫于无奈，我想既然不能在我电脑里面安装，拿我就试试我的虚拟机（之前为了测试多版本的IE而安装了虚拟机）。结果太令我失望了。虚拟机在我的电脑慢到令我发指，连Adobe官网都打不开。

### 最后的转机
最后我找了一个中文版（我也不知道为什么做出这个决定）的，安装，提示`已安装了一个更新的版本`。感觉深深的被Adobe玩了。直接用中文google了一下。然后答案出现了。
![Adobe Reader](/img/blog/sw/adobe-reg.png "Adobe Reader")

**打开注册表，找到`HKEY_CLASSES_ROOT\Installer \Products\68AB67CA7DA72502B7449A0000000010`，直接把这个文件夹删了。**

也没更好的方法，将信将疑下，我照做了，最后居然就安装上了。WTF

### 谨此纪念一下Adobe对我人生造成的浪费！
