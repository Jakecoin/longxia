---
read_when:
  - 你想用 Docker 部署 Longxia
summary: Longxia 的 Docker 部署说明
title: Docker
---

# Docker

在 Longxia 中，Docker 部署只适用于当前分支保留的精简渠道集和已打包能力。

不要继续使用上游文档里关于以下内容的步骤：

- Telegram 接入
- Discord 接入
- WhatsApp 二维码登录
- 运行时插件安装

使用 Docker 部署时，应当：

- 仅启用 [聊天渠道](/channels/index) 中仍保留的渠道
- 不暴露运行时插件安装
- 将所有外联保持在 Longxia 的部署边界内

在启用任何对外连接前，请先阅读：[网络边界](/design/network-boundary)

