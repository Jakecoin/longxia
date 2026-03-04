---
read_when:
  - 你在设置私信访问控制
  - 你在配对新的 iOS/Android 节点
  - 你在审查 Longxia 的安全边界
summary: Longxia 中仍然保留的配对机制说明
title: 配对
---

# 配对

在 Longxia 中，配对仍然用于两类批准动作：

1. 入站私信访问
2. 设备/节点接入

Longxia 不再记录基于 Telegram、WhatsApp 或 Discord 的配对流程。

## 私信配对

当某个仍受支持的渠道使用 `pairing` 私信策略时，未知发送者会收到短码，消息在批准前不会被处理。

使用：

```bash
openclaw pairing list <受支持渠道>
openclaw pairing approve <受支持渠道> <CODE>
```

具体可用渠道以 [聊天渠道](/channels/index) 为准。

## 设备配对

使用：

```bash
openclaw devices list
openclaw devices approve <requestId>
openclaw devices reject <requestId>
```

设备配对状态仍保存在 `~/.openclaw/devices/`。

更多信息见：[安全](/gateway/security) 和 [网络边界](/design/network-boundary)

