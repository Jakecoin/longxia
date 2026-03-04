---
read_when:
  - 从零开始首次设置
  - 你想要 Longxia 当前支持的最短上线路径
summary: Longxia 入门指南，仅覆盖当前保留的本地与内置能力
title: 入门指南
---

# 入门指南

Longxia 是 OpenClaw 的受限分支。这个分支已经移除以下用户侧路径：

- WhatsApp
- Telegram
- Discord
- 运行时插件安装
- 依赖第三方平台模板的一键部署入口

推荐的起步方式只保留两条：

1. 使用本地开发环境运行内置界面与 CLI。
2. 使用你自行维护、已审查的部署方式运行 Longxia 自有服务。

## 最短路径

1. 准备 Node 运行环境与仓库依赖。
2. 完成模型认证或本地开发配置。
3. 启动内置控制界面或 WebChat。
4. 仅使用当前构建中已经内置的能力进行验证。

## 推荐入口

- [向导](/start/wizard)
- [设置](/start/setup)
- [文档目录](/start/docs-directory)
- [聊天渠道](/channels)
- [工具总览](/tools)

## 不再适用的上游说明

如果你在其他页面看到以下内容，应视为上游遗留信息，而不是 Longxia 当前支持的能力：

- 扫描二维码登录 WhatsApp
- 使用 Telegram BotFather 创建机器人
- 配置 Discord 机器人令牌
- 在运行时安装或更新插件
- 通过第三方托管平台模板直接部署并暴露公网入口
