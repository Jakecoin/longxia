---
read_when:
  - 你看到错误并想要快速定位
  - 安装成功提示出现了，但 Longxia 仍然不能正常工作
summary: Longxia 快速排障入口
title: 故障排除
---

# 故障排除

## 第一轮检查

按顺序运行：

```bash
openclaw status
openclaw status --all
openclaw gateway probe
openclaw gateway status
openclaw doctor
openclaw logs --follow
```

## 如果安装失败

请重新运行本地安装脚本，并打开详细输出；不要再使用远程 `curl | bash` 方式：

```bash
export OPENCLAW_NPM_REGISTRY=https://registry.npmmirror.com
bash scripts/install.sh --verbose
```

Windows：

```powershell
$env:OPENCLAW_NPM_REGISTRY="https://registry.npmmirror.com"
powershell -ExecutionPolicy Bypass -File .\scripts\install.ps1
```

## 如果找不到 `openclaw`

先检查 Node 和 npm 的 PATH：

```bash
node -v
npm -v
npm prefix -g
echo "$PATH"
```

然后查看 [Node.js](/install/node)。

## 如果 `git` 安装模式拉不下源码

把 `OPENCLAW_GIT_REPO_URL` 改成你自己的可访问镜像地址，再重试：

```bash
export OPENCLAW_GIT_REPO_URL=<你的受控 Git 地址>
bash scripts/install.sh --install-method git --no-onboard
```

## 如果你发现某些渠道或插件“不见了”

这通常是预期行为。Telegram、Discord、WhatsApp，以及运行时插件安装都在这个分支中被明确禁用。
