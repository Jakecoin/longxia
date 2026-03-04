---
summary: 使用本地脚本和受控镜像更新 Longxia
title: 更新
---

# 更新

Longxia 的更新路径应与安装保持一致：使用本地脚本、受控源码地址，以及国内可访问的 npm 镜像。

## npm 方式

```bash
export OPENCLAW_NPM_REGISTRY=https://registry.npmmirror.com
npm_config_registry=https://registry.npmmirror.com npm install -g openclaw@latest
```

## git 方式

```bash
export OPENCLAW_NPM_REGISTRY=https://registry.npmmirror.com
export OPENCLAW_GIT_REPO_URL=<你的受控 Git 地址>
bash scripts/install.sh --install-method git --no-onboard
```

## 更新后检查

```bash
openclaw doctor
openclaw status
```

不要在更新时切回旧的远程安装入口。
