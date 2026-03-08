---
title: "Shark Eagle Sidebar: 一个极简主义的浏览器书签侧边栏"
tags: [ Chrome Extension ]
categories: [ 编程人生, Chrome Extension ]
date: 2026-03-08 01:19:49
---

浏览器自带的书签管理器臃肿、层级深、操作繁琐。你只是想快速打开几个常用网站，却要经历 "点击书签栏 → 展开文件夹 → 找到目标" 这三步曲。**[Shark Eagle Sidebar(鲨雕侧边栏)](https://chromewebstore.google.com/detail/shark-eagle-sidebar/afglnkmlbipmcepinaodkjifnajlmmka)** 的答案很简单：一个 60px 宽的侧边栏，按住 Alt 键呼出，松手即隐——就像桌面 Dock 一样自然。
<!-- more -->

这是我自己开发的一个 Chrome Extension，我讲将从用户体验、技术架构和核心实现三个维度简单介绍一下。

## 核心功能一览

```mermaid
mindmap
  root((Shark Eagle Sidebar))
    交互设计
      60px 超窄侧边栏
      按键呼出/松手隐藏
      拖拽排序书签
      右键上下文菜单
    书签管理
      添加书签(标题+URL)
      编辑书签信息
      删除书签
      自动抓取 Favicon
    个性化设置
      左/右位置切换
      自定义触发键
      深色主题
    数据管理
      Chrome Storage 持久化
      JSON 导出备份
      JSON 导入恢复
      跨设备同步(sync)
```

与传统书签管理器不同，Shark Eagle Sidebar 追求的是**零干扰**——它不会占据你的屏幕空间，只在你需要时出现。

## 用户交互流程

一个典型的使用场景如下：

```mermaid
sequenceDiagram
    actor User as 用户
    participant KB as 键盘事件
    participant Sidebar as 侧边栏组件
    participant Storage as Chrome Storage

    User->>KB: 按住 Alt 键
    KB->>Sidebar: keydown 事件触发
    Sidebar->>Sidebar: setIsVisible(true)
    Note over Sidebar: 侧边栏从屏幕边缘滑入

    User->>Sidebar: 点击书签图标
    Sidebar->>User: window.open(url, '_blank')

    User->>Sidebar: 点击 "+" 按钮
    Sidebar->>Sidebar: 弹出添加书签模态框
    User->>Sidebar: 输入标题和 URL
    Sidebar->>Storage: saveData(newBookmarks)
    Storage-->>Sidebar: 保存成功

    User->>KB: 松开 Alt 键
    KB->>Sidebar: keyup 事件触发
    Sidebar->>Sidebar: setIsVisible(false)
    Note over Sidebar: 侧边栏滑出隐藏
```

这种 **"按住显示，松手隐藏"** 的交互模式是 Shark Eagle Sidebar 的灵魂。它不需要你记住复杂的快捷键组合，不需要点击工具栏图标，只需要一个手指就能完成所有操作。

## 技术架构

### 技术栈

Shark Eagle Sidebar 采用了现代化的浏览器扩展开发方案：

| 层级 | 技术选型 | 选型理由 |
|------|---------|---------|
| 框架 | [WXT](https://wxt.dev/) | 下一代浏览器扩展框架，内置 HMR |
| UI | React 18 + TypeScript | 类型安全的声明式 UI |
| 构建 | Vite (via WXT) | 极速开发体验 |
| 样式 | Inline CSS-in-JS | 零外部依赖，无 CSS 冲突 |
| 存储 | Chrome Storage API | 原生同步，跨设备支持 |

### 架构设计

```mermaid
graph TB
    subgraph "Chrome Extension (MV3)"
        BG["background.ts<br/>Service Worker"]
        CS["content.tsx<br/>Content Script"]
    end

    subgraph "Content Script 内部结构"
        CS --> SidebarComp["Sidebar 组件<br/>(React FC)"]
        SidebarComp --> StateLayer["状态管理层"]
        SidebarComp --> UILayer["UI 渲染层"]

        StateLayer --> BookmarkState["书签状态"]
        StateLayer --> SettingsState["设置状态"]
        StateLayer --> UIState["UI 交互状态<br/>(模态框/菜单/拖拽)"]

        UILayer --> BookmarkList["书签列表<br/>(Favicon 图标)"]
        UILayer --> AddModal["添加书签弹窗"]
        UILayer --> EditModal["编辑书签弹窗"]
        UILayer --> SettingsPanel["设置面板"]
        UILayer --> CtxMenu["右键菜单"]
    end

    subgraph "数据层"
        StorageUtil["storage.ts<br/>存储工具"]
        TypesDef["types.ts<br/>类型定义"]
    end

    SidebarComp --> StorageUtil
    StorageUtil --> SyncStorage["chrome.storage.sync"]
    StorageUtil --> LocalStorage["chrome.storage.local<br/>(降级方案)"]

    style SyncStorage fill:#4a9eff,color:#fff
    style LocalStorage fill:#666,color:#fff
```

整个扩展的架构极为精简——**没有 popup 页面、没有 options 页面、没有额外的 CSS 文件**。所有 UI 都通过 Content Script 直接注入到当前网页中，作为一个 React 组件树渲染。

### 数据模型

```mermaid
erDiagram
    SidebarData ||--o{ Bookmark : contains
    SidebarData ||--|| SidebarSettings : has

    SidebarData {
        Bookmark[] bookmarks
        SidebarSettings settings
    }

    Bookmark {
        string id PK "时间戳+随机数"
        string title "书签标题"
        string url "目标 URL"
        string favicon "Favicon 图标 URL"
        number createdAt "创建时间戳"
    }

    SidebarSettings {
        string position "left 或 right"
        string toggleKey "触发键(默认 Alt)"
    }
```

数据结构扁平且直观。`SidebarData` 作为唯一的顶层数据对象，包含书签数组和设置信息，整体序列化后存入 Chrome Storage。

## 关键实现细节

### 存储策略：sync 优先，local 降级

```mermaid
flowchart LR
    A[保存数据] --> B{chrome.storage.sync<br/>可用?}
    B -->|是| C[写入 sync storage<br/>跨设备同步]
    B -->|否| D[写入 local storage<br/>本地持久化]

    E[读取数据] --> F{从 sync 读取<br/>成功?}
    F -->|是| G[返回 sync 数据]
    F -->|否| H[从 local 读取]
    H --> I{有数据?}
    I -->|是| J[返回 local 数据]
    I -->|否| K[返回默认数据]
```

这套降级机制确保了数据在任何环境下都不会丢失。当 `chrome.storage.sync` 不可用时（例如用户未登录 Chrome 账户），自动回退到本地存储。

### Favicon 自动获取

每当用户添加或编辑书签时，扩展会自动通过 Google 的 Favicon 服务获取网站图标：

```
https://www.google.com/s2/favicons?domain={domain}&sz=32
```

这意味着用户不需要手动上传图标——添加 URL 后，对应网站的 Favicon 会自动出现在侧边栏中。

### 拖拽排序

书签列表支持原生 HTML5 Drag & Drop API 实现的拖拽排序。拖拽过程中通过视觉反馈（透明度变化、蓝色边框指示器）告诉用户书签将被放置的位置，松手后自动更新顺序并持久化到 Storage。

```mermaid
stateDiagram-v2
    [*] --> Idle: 初始状态
    Idle --> Dragging: onDragStart<br/>记录拖拽索引
    Dragging --> DragOver: onDragOver<br/>更新放置指示器
    DragOver --> DragOver: 持续拖动
    DragOver --> Dropped: onDrop<br/>重排数组并保存
    Dragging --> Idle: onDragEnd<br/>取消拖拽
    Dropped --> Idle: 清除拖拽状态
```

### 样式隔离策略

作为 Content Script，Shark Eagle Sidebar 的 CSS 必须与宿主页面完全隔离。项目选择了 **Inline CSS-in-JS** 方案——所有样式都以 `React.CSSProperties` 对象的形式内联到组件中。这意味着：

- 不会被宿主页面的全局 CSS 污染
- 不需要 CSS Modules 或 Shadow DOM 的额外复杂度
- 打包体积极小，零外部样式依赖

唯一的代价是 `z-index: 2147483647`（32 位整数最大值），确保侧边栏始终浮于页面最顶层。

## 与同类产品的对比

```mermaid
quadrantChart
    title 书签管理工具对比
    x-axis "操作复杂度低" --> "操作复杂度高"
    y-axis "功能简单" --> "功能丰富"
    quadrant-1 "功能过剩"
    quadrant-2 "理想区域"
    quadrant-3 "极简工具"
    quadrant-4 "体验较差"
    "Shark Eagle Sidebar": [0.2, 0.45]
    "Chrome 原生书签": [0.5, 0.7]
    "Raindrop.io": [0.65, 0.9]
    "Speed Dial 类扩展": [0.4, 0.55]
    "Toby (Tab Manager)": [0.55, 0.75]
```

Shark Eagle Sidebar 定位于**极简高效**象限——功能克制但操作成本极低，适合那些只需要快速访问 10-20 个常用网站的用户。

## 开发与安装

### 本地开发

```bash
git clone https://github.com/SharkEagleUS/shark-eagle-sidebar.git
cd shark-eagle-sidebar
pnpm install
pnpm dev          # 启动开发服务器，支持 HMR
```

开发模式下，WXT 会自动在 `.output/chrome-mv3` 目录生成可加载的扩展文件。在 Chrome 中打开 `chrome://extensions/`，启用开发者模式并加载该目录即可。

### 生产构建

```bash
pnpm build        # 构建生产版本
pnpm zip          # 打包为可分发的 zip 文件
```

整个项目依赖极少（仅 React 18 + WXT），构建产物轻量且快速。

## 写在最后
如果你也厌倦了臃肿的书签管理器，不妨试试这个只有 60 像素宽的小工具。

*项目地址: [github.com/SharkEagleUS/shark-eagle-sidebar](https://github.com/SharkEagleUS/shark-eagle-sidebar) | 基于 MIT 协议开源*
