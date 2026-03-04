---
read_when:
  - 你找到了旧的 OpenClaw 个人助手设置页
  - 你需要改看 Longxia 的受控部署边界
summary: Longxia 中已替换掉上游的个人助手设置指引
title: 个人助手设置
---

# 个人助手设置

这个上游页面原本围绕 WhatsApp、Telegram 和 Discord 的个人助手接入流程编写。这些外联面在 Longxia 中都不再可用。

在 Longxia 中，请改用受控边界的部署方式：

- 只使用 [聊天渠道](/channels/index) 中当前仍保留的渠道
- 只使用当前构建内已打包、已批准的能力
- 不依赖运行时插件安装
- 将所有对外集成保持在经审查的部署边界内

当前边界策略见：[网络边界](/design/network-boundary)

