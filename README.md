# 甘雨 · 霜华主题（dsh-theme-ganyu）

为 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) Web / Desktop 界面制作的二次元甘雨风格浅蓝主题。

![主题预览](preview.png)

## 效果

- **浅蓝冰霜色调**：低饱和冰蓝背景，深海军蓝正文，霜蓝强调色
- **甘雨背景**：2.5K 宽幅立绘固定在底层，右侧留人物，左侧聊天区清爽
- **30%–50% 自适应模糊**：窗口越宽模糊越高（5–8px），不会糊掉人物
- **玻璃质感**：侧栏、会话区、输入框、菜单半透明霜白，背景可见
- **设置界面防透视**：不透明霜面 + 深色无模糊遮罩，文字清晰

![设置界面](settings-preview.png)

- **侧栏账单**：账户行上方两张卡片，「凝霜墨痕」（今日 token）与「霜华账单」（余额/花费），默认收起成一行，点击展开明细

![账单](token-preview.png)

- **侧栏会话列表**：当前会话冰蓝竖线 + 浮起 + 加粗，悬停浮起高亮，时间戳等宽右对齐

![侧栏](sidebar-preview.png)

- **设置入口**：账户行右端的文明6徽记图标，点击直接打开设置
- **细节**：雪晶装饰、冰蓝滚动条、右下角「甘雨 · 霜华」签名

## 凝霜墨痕（今日 token）

按**当天**统计，不用 `tokenUsage` 的终身累计值：逐条读会话事件流，按事件时间戳只累加当天。

| 行 | 含义 | 事件字段 |
| --- | --- | --- |
| 命中率 | 缓存读取 ÷ 全部计费输入 | — |
| 未缓存输入 | 未命中缓存的输入 | `inputTokens` |
| 缓存读取 | 直接从缓存读出 | `cacheReadTokens` |
| 输出 | 模型输出 | `outputTokens` |

展开后有一排指标按钮（合计 / 命中率 / 未缓存输入 / 缓存读取 / 输出）：选中哪个，对话列表就按哪个排序并显示该指标；另有「展开各对话 / 隐藏各对话」开关，指标与列表同进同出。

> 花费金额是按 DeepSeek 官方 Flash 单价的**估算**（模型识别较粗，仅供参考），以实际账单为准。

## 安装

1. 把本仓库放到本地，例如 `C:/path/dsh-ganyu-theme`
2. 安装到 Desktop profile：

```powershell
dsh plugin --profile desktop add file:C:/path/dsh-ganyu-theme
```

3. 编辑 `~/.dsh/profiles/desktop/cordis.patch.yml`，加入：

```yaml
- insert:
    - id: theme-ganyu
      name: dsh-theme-ganyu
```

4. 重启 DeepSeek Harness（桌面端只在启动时加载 bundle，HMR 不重载主题文件）

## 卸载

```powershell
dsh plugin --profile desktop remove dsh-theme-ganyu
```

并删除 `cordis.patch.yml` 里上面那段 `insert`。

## 重新构建

修改 `src/client.template.js` 或替换 `assets/` 里的图片后：

```bash
node build.cjs
```

`lib/client.js` 把三张图片以 base64 内嵌，运行时不需要额外静态资源。

## 文件结构

```
ganyu-theme/
├─ package.json          # dsh.client 声明
├─ build.cjs             # 把图片内嵌进 bundle
├─ lib/
│  ├─ index.js           # Host 空插件
│  └─ client.js          # 构建产物（含内嵌图片）
├─ src/
│  └─ client.template.js # 主题源码
├─ assets/               # 背景图、文明徽记、青莲
└─ *.png                 # 预览图
```

## 素材说明

甘雨（Ganyu）角色与立绘版权归 HoYoverse / miHoYo 所有。人物素材取自 Enka Network 公开 UI 资源与文明6模组图标，仅用于个人桌面主题，请勿商业分发。主题代码可按需修改自用。

## License

MIT
