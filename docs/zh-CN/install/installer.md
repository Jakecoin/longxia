---
summary: Longxia 安装脚本的当前行为与镜像变量
title: 安装器内部原理
---

# 安装器内部原理

Longxia 不再把上游远程安装脚本当作默认入口。当前支持的做法是直接运行仓库内的安装脚本。

## 入口脚本

- `scripts/install.sh`：macOS / Linux
- `scripts/install.ps1`：Windows PowerShell

## 推荐用法

```bash
export OPENCLAW_NPM_REGISTRY=https://registry.npmmirror.com
bash scripts/install.sh
```

Windows：

```powershell
$env:OPENCLAW_NPM_REGISTRY="https://registry.npmmirror.com"
powershell -ExecutionPolicy Bypass -File .\scripts\install.ps1
```

## 关键环境变量

- `OPENCLAW_NPM_REGISTRY`：npm 镜像地址，当前分支默认是 `https://registry.npmmirror.com`
- `OPENCLAW_GIT_REPO_URL`：`--install-method git` 使用的源码地址，应改成你自己的镜像或受控仓库
- `OPENCLAW_NODE_MANUAL_URL`：脚本提示手动安装 Node 时显示的地址
- `OPENCLAW_HOMEBREW_INSTALL_URL`：如果你维护了自己的 Homebrew 镜像，可在这里覆盖
- `OPENCLAW_NODESOURCE_DEB_SETUP_URL`：Debian/Ubuntu 的 Node 安装脚本地址覆盖
- `OPENCLAW_NODESOURCE_RPM_SETUP_URL`：RPM 系发行版的 Node 安装脚本地址覆盖

## 原则

- 从本地仓库运行安装脚本
- 默认使用国内可访问的 npm 镜像
- 不依赖公开 `curl | bash` 入口
- `git` 模式必须使用你认可的源码地址
