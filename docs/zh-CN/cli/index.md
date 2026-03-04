---
read_when:
  - 你要查阅 Longxia 当前支持的 CLI 命令边界
summary: Longxia CLI 参考，仅描述当前保留并受支持的命令范围
title: CLI 参考
---

# CLI 参考

本页只描述 Longxia 当前仍然保留的命令范围。与上游相比，以下能力已经停用或不再对用户开放：

- 运行时插件安装、启用、禁用、更新、卸载
- 面向 Telegram、Discord、WhatsApp 的渠道登录与运维
- 依赖外部平台或第三方网络入口的快捷配置流程

## 主要命令页面

- [`setup`](/cli/setup)
- [`onboard`](/cli/onboard)
- [`configure`](/cli/configure)
- [`config`](/cli/config)
- [`doctor`](/cli/doctor)
- [`dashboard`](/cli/dashboard)
- [`reset`](/cli/reset)
- [`uninstall`](/cli/uninstall)
- [`update`](/cli/update)
- [`message`](/cli/message)
- [`agent`](/cli/agent)
- [`agents`](/cli/agents)
- [`acp`](/cli/acp)
- [`status`](/cli/status)
- [`health`](/cli/health)
- [`sessions`](/cli/sessions)
- [`gateway`](/cli/gateway)
- [`logs`](/cli/logs)
- [`system`](/cli/system)
- [`channels`](/cli/channels)
- [`plugins`](/cli/plugins)

## Longxia 额外约束

- `plugins` 页面仅用于说明限制，不再提供运行时插件管理能力。
- 与已移除渠道相关的子命令，即使仍有上游遗留文档，也不应视为受支持接口。
- 新的集成能力必须随构建一起交付，不能由最终用户在运行时接入。

如果你需要某个具体子命令的当前行为，应以命令帮助输出和当前代码实现为准；任何仍然引用上游外联渠道的旧说明都应视为待清理内容。
