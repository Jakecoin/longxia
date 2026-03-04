---
summary: Longxia 中受限的 `openclaw plugins` 命令说明
read_when:
  - 你想知道为什么 `openclaw plugins` 的变更类命令被拦截
title: plugins
---

# `openclaw plugins`

Longxia 会阻止所有会修改插件状态的命令。

仅保留查看能力：

- `openclaw plugins list`
- `openclaw plugins info <id>`

在这个分支中被禁用：

- `openclaw plugins install`
- `openclaw plugins enable`
- `openclaw plugins disable`
- `openclaw plugins uninstall`
- `openclaw plugins update`
- `openclaw plugins doctor`

如果确实需要某项能力，应在构建阶段将其打包进部署物，而不是在运行时安装。
