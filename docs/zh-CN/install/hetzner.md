---
summary: Longxia 不再推荐直接沿用上游 Hetzner 部署教程
title: Hetzner
---

# Hetzner

Longxia 不再推荐直接使用上游 Hetzner 部署文档。

该文档默认依赖公开仓库拉取、远程安装入口和外部渠道接入，这些都与当前分支的边界策略不一致。

如需在 Hetzner 部署，请改为：

- 使用你自己的源码镜像
- 从本地仓库运行安装脚本
- 将所有包管理器和下载源切到可访问镜像
- 只保留 Longxia 当前支持的内置能力
