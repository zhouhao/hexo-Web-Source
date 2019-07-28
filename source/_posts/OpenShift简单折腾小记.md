---
title: OpenShift简单折腾小记
date: 2016-04-13 14:59:00
tags: [OpenShift, PaaS]
categories: [计算机那些事]
---
前段时间趁着参加一个无聊活动的过程中折腾了一下OpenShift，即使有一些不足，但是感觉它比我想象的好用。底下就扯扯我是瞎折腾过程中得经验。

<!-- more -->
### 官方解释：
*OpenShift is Red Hat's Platform-as-a-Service (PaaS) that allows developers to quickly develop, host, and scale applications in a cloud environment. With OpenShift you have a choice of offerings, including online, on-premise, and open source project options.*

### 1. 免费(有收费版)
1. 免费版可以建3个应用，除非是大型的应用，应该是够用的。为了使应用不进入休眠状态，需要在每个24小时应用被访问一下（网站类型的应用问题不大，那么多蜘蛛爬虫在呢）。
2. 应用支持的类型比较多：Java, PHP, nodeJS ...,几乎能支持的都支持了。
3. 另外还有一种DIY的应用，顾名思义，但是我没用过

### 2. 部署方便
只需要`git push`，服务器端会自动触发部署。建议在命令行里面push，这样可以看log。另外因为每次`push`都会触发部署，我建议新建一个其他的remote来管理代码，积累一段时间在`push`到OpenShift上。

### 3.环境变量
因为OpenShift上的应用都是预安装的，所以我们很难自己定制（出了DIY的应用类型），所以很多时候我们需要通过[修改环境变量](https://developers.openshift.com/managing-your-applications/environment-variables.html)来进行一些必要的配置。如下图就是一个tomcat应用的Java相关的环境变量截图：

![Java相关的环境变量](/img/blog/openshift_java_env_vars.png "Java相关的环境变量")
**糟糕的是：** 有些变量我们无法直接设置（部分可以间接）。如：`PATH，known_hosts......`，所以上述图片中虽然我可以把`JAVA_HOME`设置成1.8的，并把它添加到`PATH`中，但是`PATH`中那个1.6的`bin`永远排在1.8之前，导致运行`maven`命令时调用的是1.6的`javac`. ---- 或许有方法，只是我没有找到。另外如果你添加了Jenkins的应用，因为任务在编译之后需要吧war包通过`rsync`复制到对应服务器，因为`known_hosts`无法改写，所以导致permission denied。(网上也有人写了解决方案，但是我还没有去试一下)

### 4. 其他
git库里面有个`.openshift`的文件夹，里面可以做一些设置（如制定java版本）。

### 最后，补上一句一开始就应该说的：建议通过[`rhc`](https://developers.openshift.com/managing-your-applications/client-tools.html)工具来管理你的应用(Windows下一定要装1.9.3的ruby，最新的2.X版本会安装不了rhc)。


FY: 我的这个个人小站就是放在OpenShift上的，因为Github Page禁止了百度蜘蛛爬取。