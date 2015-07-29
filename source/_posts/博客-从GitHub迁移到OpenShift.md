title: 博客：从GitHub迁移到OpenShift
date: 2015-07-28 22:59:04
tags:
 - GitHub
 - OpenShift
 - CloudFlare
---
之前博客一直以纯静态的方式托管在GitHub Page里面（是基于[Hexo](https://hexo.io/)的），遗憾的是

1. 百度蜘蛛频繁乱爬，导致GitHub对它才取了屏蔽。（参考：[解决 Github Pages 禁止百度爬虫的方法与可行性分析](http://jerryzou.com/posts/feasibility-of-allowing-baiduSpider-for-Github-Pages/)）另外这篇文章末尾给出了一个解决该问题的可行方法，但是我个人没有试。
2. GitHub Page虽然支持自定义域名，但是对`https`支持的不好（这个一个次要的理由）。

<!-- more -->
### Solutions
1. 针对`问题1`，可以把网站部署在`OpenShift`（）
2. 针对`问题2`，可以使用`cloudflare`的**免费**服务来实现

### 如何在`OpenShift`上部署？
1. 注册一个OpenShift帐号（最左边的就行）： https://www.openshift.com/
2. 建一个`PHP5.X`的Application（注意：里面有直接的hexo应用，我不是很建议，因为是node驱动的，我用了之后发现如果url中出现中文，会导致404的问题。反正生成的最终是静态文件，我就决定apache来托管）
    1). 为了能使本地与服务器

### 如何使用`cloudflare`服务？
