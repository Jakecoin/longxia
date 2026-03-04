---
summary: Longxia 不再推荐使用 exe.dev 作为默认部署路径
title: exe.dev
---

# exe.dev

Longxia 不再把 `exe.dev` 当作推荐部署方案。

上游这条路径依赖公开托管环境、远程安装说明和公网暴露入口；这与当前分支的受控边界原则相冲突。

如果你需要托管部署，应为你自己的基础设施编写 Longxia 专用部署手册，而不是继续沿用旧的 `exe.dev` 方案。
