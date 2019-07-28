title: 博客：从GitHub迁移到OpenShift
date: 2015-07-28 22:59:04
tags: [GitHub, OpenShift, CloudFlare]
categories: [计算机那些事, 网站]
---
之前博客一直以纯静态的方式托管在GitHub Page里面（是基于[Hexo](https://hexo.io/)的），遗憾的是

1. 百度蜘蛛频繁乱爬，导致GitHub对它采取了屏蔽。（参考：[解决 Github Pages 禁止百度爬虫的方法与可行性分析](http://jerryzou.com/posts/feasibility-of-allowing-baiduSpider-for-Github-Pages/)）另外这篇文章末尾给出了一个解决该问题的可行方法，但是我个人没有试。
2. GitHub Page虽然支持自定义域名，但是对`https`支持的不好（这是一个次要的理由）。

<!-- more -->
## Solutions
1. 针对`问题1`，可以把网站部署在`OpenShift`
2. 针对`问题2`，可以使用`cloudflare`的**免费**服务来实现

## 如何在`OpenShift`上部署？
1. 注册一个OpenShift帐号（最左边的就行）： https://www.openshift.com/
2. 建一个`PHP5.X`的Application（注意：里面有直接的hexo应用，我不是很建议，因为是`node`驱动的，我用了之后发现**如果url中出现中文，会导致404的问题**。反正最终生成的是静态文件，我就决定Apache来托管）
    1). 因为没有采用直接的`hexo`应用，所以[`hexo-openshift`](https://github.com/hexojs/hexo-deployer-openshift)插件我也没用，而是直接通过`git`的方式直接上传到OpenShift远程服务器上
    2). 这里需要配置ssh的key文件，考虑不同系统的差异，暂时先不介绍了
3. 配置hexo配置文件（虽然这个[`hexo-git`](https://github.com/hexojs/hexo-deployer-git)插件的文档说可以支持多个repo，但是我实际发现会出一个git的`index.lock`的问题，所以这里把`github`的先注释了）
```yml
# Deployment
## Docs: http://hexo.io/docs/deployment.html
deploy:
  type: git
  message: "Sync blog from my local machine"
  repo:
    #github: https://github.com/zhouhao/zhouhao.github.io.git
    git: ssh://55b7e9de4382ecce1b000085@php-codeashobby.rhcloud.com/~/git/php.git/
```
4. 至此，每次你写完博客，`hexo generate` -> `hexo deploy`就可以直接部署到OpenShift上了。

## 如何使用[`CloudFlare`](https://www.cloudflare.com/)服务？
`CloudFlare` = DNS解析 + CDN + 简单网站数据分析 + https支持(对Google排名有利)

这4个服务都是我需要的，而且这一切都可以是免费的。具体细节可以自己体验一下，前提是需要有自己的域名。

点击试一下：[https://sbzhouhao.net/](https://sbzhouhao.net/)

## 注意
OpenShift的免费版本有24小时的[APPLICATION IDLING](https://www.openshift.com/products/pricing/plan-comparison)限制，换句话说如果你的网站24小时内连续没人访问，你的网站会被自动停止。

## 国内测速(http比https明显快很多)
1. http://sbzhouhao.net
![CloudFare非https测速](/img/blog/openshift/1.png "CloudFare非https测速")

2. https://sbzhouhao.net
![CloudFare https测速](/img/blog/openshift/2.png "CloudFare https测速")
