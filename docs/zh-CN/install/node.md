---
summary: 使用国内可访问镜像安装和配置 Longxia 所需的 Node.js
title: Node.js
---

# Node.js

Longxia 需要 **Node 22 或更高版本**。在国内环境下，建议优先使用可访问镜像，而不是依赖国外官方下载入口。

## 推荐镜像

- npm 镜像：`https://registry.npmmirror.com`
- Node 二进制镜像：`https://npmmirror.com/mirrors/node/`

## 基本检查

```bash
node -v
```

如果已经是 `v22.x` 或更高，就可以继续安装 Longxia。

## 建议做法

- macOS：如果你已使用 Homebrew，可安装 `node@22`
- Linux：优先使用你自己的包源，或从 `npmmirror` 下载 Node 22 二进制包
- Windows：优先使用 `winget`，需要手动下载时再使用 `npmmirror`

## 设置 npm 镜像

```bash
npm config set registry https://registry.npmmirror.com
```

如果你使用 `pnpm`：

```bash
pnpm config set registry https://registry.npmmirror.com
```
