---
summary: Longxia 不再推荐沿用上游 openclaw-ansible 外部部署链路
title: Ansible
---

# Ansible

Longxia 不再推荐直接沿用上游 `openclaw-ansible` 部署链路。

原因是这条路径依赖多个公开仓库和远程安装入口，不符合当前分支“受控供应链 + 可审计镜像”的原则。

如果你需要 Ansible：

- 将源码同步到你自己的受控仓库
- 把角色、Playbook 和安装源全部切到你自己的镜像
- 明确使用国内可访问的包源和内部制品地址

在没有完成这些改造之前，这个页面不再提供可直接执行的上游命令。
