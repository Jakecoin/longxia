---
read_when:
  - 某个已配置渠道已连接但行为异常
  - 你需要先做快速排查
summary: 面向 Longxia 精简渠道集的故障排除入口
title: 渠道故障排除
---

# 渠道故障排除

这个页面现在只用于 Longxia 中仍然保留的渠道。Telegram、Discord、WhatsApp 的专项排障内容已经随这些集成一起移除。

## 建议先执行

```bash
openclaw status
openclaw gateway status
openclaw logs --follow
openclaw doctor
openclaw channels status --probe
```

## 继续检查

- 当前受支持渠道的配对与允许列表
- 渠道凭据或 webhook 配置
- Gateway 网关连通性与鉴权
- 日志中的出站投递失败信息

然后再进入你当前实际使用的渠道文档，例如 Slack、Signal、BlueBubbles、Google Chat 或 IRC。

