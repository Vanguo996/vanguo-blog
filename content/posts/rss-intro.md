---
title: "我们为什么需要信息聚合工具？"
date: 2022-12-30
tags: [技术分享,信息聚合,rss]
keywords: ""
---

我们处在一个信息爆炸的时代，个人注意力被各路信息不断分散，特别是自媒体短视频的出现，人们总是在被动地接受信息——被大数据推荐算法“投喂”，甚至被监听。

表面上人们在不断“得到”：从推荐算法中接收新内容，扩展认知边界，获得快乐。

但实际上人们在不断“失去”：失去主动选择的能力、主动探索新世界的能力，主动思考的能力。

所以我们需要一个区别于微信公众号的、**自由的、定制化的消息订阅与聚合工具**

## 什么是RSS？
Really Simple Syndication(RSS)，是一种信息聚合的格式规范。个人认为它最重大的意义是：
- **将信息获取的主动权交给用户**：用户可以自由订阅信息源的RSS
- **更加高效、优雅地信息获取体验**：整合多个渠道的信息，并过滤垃圾信息

了解更多：
- [RSS介绍](https://www.runoob.com/rss/rss-intro.html)
- [RSS使用技巧](https://diygod.me/ohmyrss)

## 什么是RSSHub？
[RSSHub](https://docs.rsshub.app/)，是一个RSS生成器，可以通过docker一键部署至服务端。
```sh
docker run -d --name rsshub -p 1200:1200 diygod/rsshub
```
客户端可以通过各种[路由规则](https://docs.rsshub.app/social-media.html)订阅消息。
iOS端还有一个应用叫做[RSSBud](https://github.com/Cay-Zhang/RSSBud)，直接省去了查找RSS文档的过程，完美诠释万物皆可RSS。