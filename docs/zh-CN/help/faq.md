---
summary: Longxia 的常见问题，聚焦受控部署与国内可访问安装链路
title: 常见问题
---

# 常见问题

## 推荐的安装方式是什么？

先拿到本仓库的本地副本，再运行仓库内脚本。不要再依赖旧的上游远程安装入口。

```bash
export OPENCLAW_NPM_REGISTRY=https://registry.npmmirror.com
bash scripts/install.sh
```

## 国内环境应该用哪个 npm 源？

建议使用：

```text
https://registry.npmmirror.com
```

本分支的 `.npmrc` 也已经默认指向这个地址。

## `git` 安装模式应该怎么用？

把 `OPENCLAW_GIT_REPO_URL` 指到你自己的镜像仓库或内网 Git 服务，不要继续把公开 GitHub 地址当成生产安装链路。

## Telegram、Discord、WhatsApp 和运行时插件还支持吗？

不支持。这个分支已经停用这些能力。新的集成只能在构建期内置，并经过代码审查。

## 安装或启动失败时先看哪里？

优先查看：

- [安装](/install)
- [Node.js](/install/node)
- [故障排除](/help/troubleshooting)
- [配置](/gateway/configuration)

## 去哪里求助？

请使用你自己的内部支持渠道、工单系统或部署维护流程。Longxia 不再把用户引导到外部聊天社区。
