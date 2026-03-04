---
read_when:
  - 安装 Longxia
  - 你希望避免依赖国外安装链接
summary: 使用仓库内安装脚本和国内镜像安装 Longxia
title: 安装
---

# 安装

Longxia 不再推荐旧的远程安装方式。当前支持的路径是：先拿到本仓库的本地副本，再运行仓库内脚本，并把 npm 指向国内可访问镜像。

## 推荐命令

<Tabs>
  <Tab title="macOS / Linux">
    ```bash
    export OPENCLAW_NPM_REGISTRY=https://registry.npmmirror.com
    bash scripts/install.sh
    ```
  </Tab>
  <Tab title="Windows">
    ```powershell
    $env:OPENCLAW_NPM_REGISTRY="https://registry.npmmirror.com"
    powershell -ExecutionPolicy Bypass -File .\scripts\install.ps1
    ```
  </Tab>
</Tabs>

## 从源码安装

如果你要走 `git` 安装模式，请把远程地址切到你自己的镜像或受控仓库：

```bash
export OPENCLAW_NPM_REGISTRY=https://registry.npmmirror.com
export OPENCLAW_GIT_REPO_URL=<你的受控 Git 地址>
bash scripts/install.sh --install-method git --no-onboard
```

## 手动安装

```bash
npm_config_registry=https://registry.npmmirror.com npm install -g openclaw@latest
```

如需更多细节，请看：

- [Node.js](/install/node)
- [安装器内部原理](/install/installer)
- [更新](/install/updating)
- [卸载](/install/uninstall)
