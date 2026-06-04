export interface CourseStep {
  title: string
  instruction: string
  keywords: string[]
}

export interface CheatItem {
  functionName: string
  chineseName: string
  formula: string
  scenario: string
  commonMistake: string
}

export interface Course {
  id: number
  title: string
  subtitle: string
  category: 'basic' | 'function' | 'analysis' | 'practice'
  difficulty: '入门' | '基础' | '进阶'
  duration: string
  description: string
  scenario: string
  bilibiliUrl: string
  bilibiliBvid: string
  practiceFile: string
  answerFile: string
  steps: CourseStep[]
  cheatsheet: CheatItem
  detailContent: string
}

const YUQUE = 'https://www.yuque.com/attachments/yuque/0/2026/xlsx/54160995'

export const courses: Course[] = [
  // ========== 基础篇 ==========
  {
    id: 1,
    title: 'WPS 界面与基本操作',
    subtitle: '认识工作区，掌握最常用的操作',
    category: 'basic', difficulty: '入门', duration: '12分钟',
    description: '打开 WPS 表格一脸懵？先认识六大区域，学会新建、保存、选择、填充——这是所有操作的地基。',
    scenario: '第一次打开 WPS 表格，别被密密麻麻的按钮吓到。90% 的操作只用其中一小块区域。',
    bilibiliUrl: 'https://www.bilibili.com/video/BV1F4jizbEFt/', bilibiliBvid: 'BV1F4jizbEFt',
    practiceFile: '', answerFile: '',
    steps: [
      { title: '认识六大区域', instruction: '标题栏 → 功能区 → 编辑栏 → 工作表区 → 工作表标签 → 状态栏。记住：编辑栏是输入公式的地方，工作表标签用来切换页面。', keywords: ['标题栏', '功能区', '编辑栏', '工作表标签'] },
      { title: '新建与保存', instruction: 'Ctrl+N 新建，Ctrl+S 保存。养成每 5 分钟按一次 Ctrl+S 的习惯。', keywords: ['Ctrl+N', 'Ctrl+S', '新建', '保存'] },
      { title: '选择操作', instruction: '单击选一格，Shift+单击选区域，Ctrl+A 全选，Ctrl+End 跳到末尾。双击单元格边框快速跳转。', keywords: ['选择', 'Ctrl+A', 'Ctrl+End', '区域'] },
      { title: '填充柄与 Ctrl+E', instruction: '写好公式 → 双击填充柄自动填到底。Ctrl+E 智能识别模式批量填充。', keywords: ['填充柄', '双击', 'Ctrl+E', '快速填充'] },
    ],
    cheatsheet: { functionName: 'WPS界面与基础操作', chineseName: '工作区认知', formula: 'Ctrl+N/S 新建保存 · Ctrl+A 全选 · Ctrl+E 智能填充 · 双击填充柄', scenario: '日常操作基础，效率提升 3 倍的起点', commonMistake: '忘记保存导致数据丢失；不知道双击填充柄而手动拖几百行' },
    detailContent: `## WPS 表格六大区域

| 区域 | 位置 | 功能 |
|---|---|---|
| 标题栏 | 最顶部 | 文件名 + 保存/关闭 |
| 功能区 | 标题栏下 | 所有按钮按标签分组 |
| 名称框 | 功能区下左 | 当前格地址 A1/B3 |
| 编辑栏 | 名称框右 | 输入公式的地方 |
| 工作表区 | 中央网格 | 数据操作主战场 |
| 工作表标签 | 最底部 | 切换不同页 |

## 两个最高效的操作

1. **双击填充柄**：写好公式 → 双击单元格右下角 → 自动填到数据末尾
2. **Ctrl+E 智能填充**：写一行示例 → Ctrl+E → 自动识别模式填充所有行`,
  },
  {
    id: 2,
    title: '复制与粘贴转值',
    subtitle: '把公式结果变成真正的数值',
    category: 'basic', difficulty: '入门', duration: '10分钟',
    description: '只复制"看起来"的内容，不复制背后的公式。数据处理的第一道基本功。',
    scenario: '用 VLOOKUP 算出结果后，发给老板之前——必须粘贴转值，否则老板打开全是 #REF!。',
    bilibiliUrl: 'https://www.bilibili.com/video/BV1MK4y1V7x4/', bilibiliBvid: 'BV1MK4y1V7x4',
    practiceFile: `${YUQUE}/1773546330133-7532b6d6-53a3-4ae9-b858-d94958facc55.xlsx`,
    answerFile: `${YUQUE}/1773546330174-19edeef8-643d-4274-bbac-a902f500a3b1.xlsx`,
    steps: [
      { title: '选中并复制', instruction: '选中公式结果区域，Ctrl+C 复制。', keywords: ['选中', 'Ctrl+C'] },
      { title: '粘贴为数值', instruction: '右键目标位置 → 点击"值"图标（带 123）。或 Ctrl+Alt+V → 选"数值"→ 确认。', keywords: ['右键', '粘贴为数值', '值', '123'] },
      { title: '验证', instruction: '粘贴后点击单元格看编辑栏——应该显示数字，不是公式。', keywords: ['验证', '编辑栏', '数字'] },
    ],
    cheatsheet: { functionName: '粘贴转值', chineseName: '选择性粘贴为数值', formula: 'Ctrl+C → 右键 → 粘贴选项 → "值"', scenario: '公式结果固化，防止发给他人后报错', commonMistake: '直接 Ctrl+V 把公式一并粘贴，接收方看到 #REF!' },
    detailContent: `## 为什么需要

VLOOKUP/SUMIF 的结果是公式。发给同事或存档后，源表没了就全变 #REF!。**粘贴转值 = 把公式"固化"成数字。**

## 三步记住

1. Ctrl+C 复制
2. 右键 → 点"值"（123 图标）
3. 检查编辑栏确认已固化`,
  },
  {
    id: 3,
    title: '清除空格与数字转换',
    subtitle: '让文本型数字变回真正的数字',
    category: 'basic', difficulty: '入门', duration: '12分钟',
    description: '后台导出的数据常有不可见空格和文本格式数字，导致求和=0。两步清洗干净。',
    scenario: '淘宝后台导出的金额列带绿色小三角——SUM 求和为 0，老板以为你今天没干活。',
    bilibiliUrl: 'https://www.bilibili.com/video/BV14L411Q7xr/', bilibiliBvid: 'BV14L411Q7xr',
    practiceFile: `${YUQUE}/1773546330163-6906490f-3888-42f2-a866-5202f03bbee8.xlsx`,
    answerFile: `${YUQUE}/1773546330189-30028d9a-0077-43d2-8693-5e71b873f3b0.xlsx`,
    steps: [
      { title: '清除空格', instruction: '=TRIM(A2) 或 Ctrl+H 查找空格替换为空。', keywords: ['TRIM', '空格', 'Ctrl+H'] },
      { title: '文本转数字', instruction: '选中带绿色三角的格 → 点感叹号 → "转换为数字"。或分列法：数据→分列→一路下一步到完成。', keywords: ['绿色三角', '转换为数字', '分列'] },
    ],
    cheatsheet: { functionName: 'TRIM + 文本转数字', chineseName: '数据清洗两步走', formula: '=TRIM(A1) 去空格 → 黄色警告 → 转换为数字', scenario: '后台导出的空格+文本数字清洗', commonMistake: '清洗前直接 SUM 结果为 0' },
    detailContent: `## 两个暗坑

1. **文本型数字**：看起来是 99.00，实际是字符串——SUM 忽略它
2. **前后空格**：" 99.00 "——VLOOKUP 匹配失败

## 标准流程

1. TRIM 或查找替换去空格
2. 文本转数字（绿色三角 → 转换为数字）
3. 确认：选中列，状态栏应显示求和结果`,
  },
  {
    id: 4,
    title: '筛选、查找替换与分列',
    subtitle: '批量过滤、修正、拆分数据',
    category: 'basic', difficulty: '基础', duration: '15分钟',
    description: '筛选（Ctrl+Shift+L）+ 查找替换（Ctrl+H）+ 分列——三个功能配合，数据清洗效率翻 10 倍。',
    scenario: '订单表 500 行，先删掉"已取消""退款"的无效行，再统一日期格式，最后把地址拆成省市区。',
    bilibiliUrl: 'https://www.bilibili.com/video/BV1HzwJzLEHb/', bilibiliBvid: 'BV1HzwJzLEHb',
    practiceFile: `${YUQUE}/1773546330289-15a1034e-4375-40ff-9e0a-6be385424de6.xlsx`,
    answerFile: `${YUQUE}/1773546330425-8579c3b2-2c49-4a84-81d6-d47d594cd86d.xlsx`,
    steps: [
      { title: '筛选删除', instruction: 'Ctrl+Shift+L 开启筛选 → 勾选"已取消""退款"→ 选中行 → 右键删除。清除筛选看结果。', keywords: ['Ctrl+Shift+L', '筛选', '删除行'] },
      { title: '查找替换清洗', instruction: 'Ctrl+H：查找"."替换为"-"统一日期；查找空格替换为空。', keywords: ['Ctrl+H', '查找替换', '统一格式'] },
      { title: '分列拆分', instruction: '数据 → 分列 → 按分隔符"-"→ 地址拆成省/市/区。', keywords: ['分列', '分隔符', '拆分'] },
    ],
    cheatsheet: { functionName: '筛选+替换+分列', chineseName: '数据清洗三件套', formula: 'Ctrl+Shift+L筛选 → Ctrl+H替换 → 分列拆分', scenario: '无效数据删除+格式统一+列拆分', commonMistake: '删除时误选表头；替换时不小心把正常内容也替换了' },
    detailContent: `## 三个功能配合

| 功能 | 快捷键 | 做什么 |
|---|---|---|
| 筛选 | Ctrl+Shift+L | 找出目标行 |
| 查找替换 | Ctrl+H | 批量修改 |
| 分列 | 数据→分列 | 一列拆多列 |

## 拓展视频

- 分列功能详解：BV1S24y1i7aK
- 条件格式标记重复：BV1vPLa69EAU`,
  },

  // ========== 函数篇 ==========
  {
    id: 5,
    title: 'SUM 与常用统计函数',
    subtitle: '求和、平均、最大、最小、计数',
    category: 'function', difficulty: '入门', duration: '12分钟',
    description: 'SUM、AVERAGE、MAX、MIN、COUNT——五个函数回答运营 80% 的数据问题。',
    scenario: '今天卖了多少钱？平均客单价？最高一笔？总共多少单？——五个函数全搞定。',
    bilibiliUrl: 'https://www.bilibili.com/video/BV189ErzAEPW/', bilibiliBvid: 'BV189ErzAEPW',
    practiceFile: `${YUQUE}/1773546330800-e00b2e5b-88db-4b0f-95c1-57f77a0d615d.xlsx`,
    answerFile: `${YUQUE}/1773546330663-930f8057-0a7c-490f-85f6-95dd5f19b30c.xlsx`,
    steps: [
      { title: 'SUM 求和', instruction: '=SUM(B2:B500)。更快：选中区域 → Alt+=。', keywords: ['SUM', 'Alt+='] },
      { title: 'AVERAGE 平均', instruction: '=AVERAGE(金额列) 算客单价。自动忽略文本和空格。', keywords: ['AVERAGE', '客单价'] },
      { title: 'MAX/MIN/COUNT', instruction: '=MAX()找最高，=MIN()找最低，=COUNTA()数订单。COUNT 只数数字，COUNTA 数所有非空。', keywords: ['MAX', 'MIN', 'COUNT', 'COUNTA'] },
    ],
    cheatsheet: { functionName: 'SUM/AVERAGE/MAX/MIN/COUNT', chineseName: '五大基础统计', formula: '=SUM()求和 =AVERAGE()平均 =MAX()最大 =MIN()最小 =COUNTA()计数', scenario: '日报核心：销售额、客单价、订单数', commonMistake: 'COUNT 和 COUNTA 搞混——COUNT 只统计数字' },
    detailContent: `## 五函数一张表

| 函数 | 做什么 | 例子 |
|---|---|---|
| =SUM(列) | 求和 | 日销售额 |
| =AVERAGE(列) | 平均 | 客单价 |
| =MAX(列) | 最大值 | 最高单笔 |
| =MIN(列) | 最小值 | 最低售价 |
| =COUNTA(列) | 计数 | 订单总数 |`,
  },
  {
    id: 6,
    title: 'IF 逻辑判断',
    subtitle: '让 Excel 自动判断和打标签',
    category: 'function', difficulty: '基础', duration: '12分钟',
    description: 'IF 函数让 Excel 自动判断——库存不足自动标"缺货"，利润高自动标"优质"。告别手动逐行标注。',
    scenario: '利润率 > 30% 标"高利润"，> 10% 标"正常"，亏损标"亏损"——IFS 一个公式搞定三种判断。',
    bilibiliUrl: 'https://www.bilibili.com/video/BV1LbdVBTEQr/', bilibiliBvid: 'BV1LbdVBTEQr',
    practiceFile: '', answerFile: '',
    steps: [
      { title: 'IF 基础', instruction: '=IF(条件, 条件成立的结果, 不成立的结果)。如 =IF(C2=0,"缺货","有货")', keywords: ['IF', '条件', '判断'] },
      { title: 'IFS 多条件', instruction: '=IFS(条件1,结果1, 条件2,结果2, TRUE,兜底)。如 =IFS(E2>10000,"A",E2>5000,"B",TRUE,"C")', keywords: ['IFS', '多条件', '兜底'] },
      { title: 'AND/OR 组合', instruction: '=IF(AND(C2<10,C2>0),"需补货","") 两条件都满足才触发。OR 是任一满足。', keywords: ['AND', 'OR', '组合'] },
    ],
    cheatsheet: { functionName: 'IF / IFS', chineseName: '逻辑判断函数', formula: '=IF(条件, 真, 假)  =IFS(条件1,值1, 条件2,值2, TRUE,兜底)', scenario: '自动标记订单类型、库存状态、利润等级', commonMistake: 'IF 嵌套超过 2 层改用 IFS；忘记 TRUE 兜底导致 #N/A' },
    detailContent: `## IF 的电商场景

| 场景 | 公式 |
|---|---|
| 库存判断 | =IF(C2=0,"缺货","有货") |
| 大额标记 | =IF(E2>10000,"大额","普通") |
| 利润分级 | =IFS(率>0.3,"高",率>0.1,"中",TRUE,"低") |
| 双条件 | =IF(AND(库存<10,库存>0),"需补货","") |

📺 IFS 专题：BV1FRCFYEEqX`,
  },
  {
    id: 7,
    title: '公式引用方式',
    subtitle: '相对引用 vs 绝对引用，F4 一键切换',
    category: 'function', difficulty: '基础', duration: '10分钟',
    description: '公式拖动后地址变还是不变？搞懂 $A$1 和 A1 的区别，F4 键一键切换。',
    scenario: '全店商品打折，折扣率写在一个格子里。公式拖动时折扣率格必须"钉住"不动——这就是绝对引用。',
    bilibiliUrl: 'https://www.bilibili.com/video/BV14dGa6ME4o/', bilibiliBvid: 'BV14dGa6ME4o',
    practiceFile: '', answerFile: '',
    steps: [
      { title: '相对引用 A1', instruction: '拖动时行列跟着变。=B2*C2 拖到下一行变成 =B3*C3。', keywords: ['相对引用', 'A1', '拖动变化'] },
      { title: '绝对引用 $A$1', instruction: '拖动时完全不变。=B2*$C$2 拖到哪都引用 C2。按 F4 循环切换。', keywords: ['绝对引用', '$A$1', 'F4', '锁定'] },
    ],
    cheatsheet: { functionName: '引用方式', chineseName: '$符号与F4键', formula: 'A1 相对(变) · $A$1 绝对(不变) · F4 循环切换', scenario: '固定参数（折扣率/税率）必须用绝对引用', commonMistake: '固定参数忘记加$，拖动后引用错误单元格' },
    detailContent: `## 三种引用

| 类型 | 写法 | 拖动后 | 场景 |
|---|---|---|---|
| 相对 | A1 | 全变 | 各行用各行的数据 |
| 绝对 | $A$1 | 不变 | 折扣率、税率等固定值 |
| 混合 | $A1 或 A$1 | 锁一边 | 特殊表格 |

编辑公式时按 **F4** 键循环切换。`,
  },
  {
    id: 8,
    title: 'VLOOKUP 跨表匹配',
    subtitle: '根据编码从另一张表获取数据',
    category: 'function', difficulty: '进阶', duration: '20分钟',
    description: '电商运营最重要的函数。把成本表的成本价按商品编码匹配到销售表——30 秒替代一天的手工复制。',
    scenario: '成本表有 200 条，全店商品表有 1000 条。你需要把成本价按编码匹配过去，算每个款的利润。',
    bilibiliUrl: 'https://www.bilibili.com/video/BV1M34y1C7HZ/', bilibiliBvid: 'BV1M34y1C7HZ',
    practiceFile: `${YUQUE}/1773546330406-427251e3-ca08-47d7-9f91-e7ef38852a14.xlsx`,
    answerFile: `${YUQUE}/1773546330447-bf3a2d0c-ab53-4436-bb24-070b853e4dbf.xlsx`,
    steps: [
      { title: '四个参数', instruction: '=VLOOKUP(找什么, 在哪找, 第几列, 0)。类比超市找洗发水：商品名、货架区、价格列、必须一模一样。', keywords: ['VLOOKUP', '四个参数', '找什么'] },
      { title: '选查找值', instruction: '第一参数：当前表的商品编码——两张表的"桥梁"。', keywords: ['商品编码', '桥梁'] },
      { title: '选查找范围', instruction: '第二参数：切到成本表，从编码列开始选到成本列。编码列必须在最左边。', keywords: ['查找范围', '成本表', '最左侧'] },
      { title: '返回列+匹配方式+填充', instruction: '第三参数：成本在第几列。第四参数：0（精确）。回车后双击填充柄，最后粘贴转值。', keywords: ['返回列号', '0', '精确', '填充柄', '粘贴转值'] },
    ],
    cheatsheet: { functionName: 'VLOOKUP', chineseName: '垂直查找函数', formula: '=VLOOKUP(找什么, 在哪找, 第几列, 0)', scenario: '成本/库存/竞品价格匹配', commonMistake: '查找范围首列必须含查找值；忘写0；匹配前未清空格 → #N/A' },
    detailContent: `## VLOOKUP = 电商第一函数

场景：成本匹配、库存匹配、竞品价格匹配、物流运费匹配。

## 常见错误

| 错误 | 原因 | 解决 |
|---|---|---|
| #N/A | 找不到 | 检查空格、数据格式 |
| #REF! | 列号超了 | 核对区域有几列 |
| 结果不对 | 第4参数写 TRUE | 改 FALSE |`,
  },
  {
    id: 9,
    title: 'SUMIF 条件求和',
    subtitle: '符合条件的才求和，一个公式替代筛选',
    category: 'function', difficulty: '进阶', duration: '15分钟',
    description: 'SUMIF 按条件汇总——已发货订单总金额、某 SKU 近7天销量、某品类销售额，一个公式搞定。',
    scenario: '订单报表几万行，每个 SKU 卖了 N 次。你要把每个 SKU 的销量汇总到货盘表——手工一天，SUMIF 三秒。',
    bilibiliUrl: 'https://www.bilibili.com/video/BV1k54y1G7SG/', bilibiliBvid: 'BV1k54y1G7SG',
    practiceFile: `${YUQUE}/1773546330501-fef6e12c-3219-4968-b3fd-006f6be18625.xlsx`,
    answerFile: `${YUQUE}/1773546330653-158853c3-4ff1-44c2-b57d-cef0d7e15d2e.xlsx`,
    steps: [
      { title: '三个参数', instruction: '=SUMIF(在哪找条件, 条件是什么, 对哪列求和)。', keywords: ['SUMIF', '三个参数'] },
      { title: '选条件区域', instruction: '第一参数：切到订单报表，选 SKU 编码列。', keywords: ['条件区域', 'SKU'] },
      { title: '定条件', instruction: '第二参数：回到货盘表，选当前行 SKU 编码。意思是"编码等于这个的"。', keywords: ['条件', '等于'] },
      { title: '选求和区域+填充', instruction: '第三参数：订单报表的销量列。回车 → 双击填充柄 → 粘贴转值。', keywords: ['求和区域', '填充柄', '粘贴转值'] },
    ],
    cheatsheet: { functionName: 'SUMIF', chineseName: '条件求和', formula: '=SUMIF(条件区域, 条件, 求和区域)', scenario: '汇总某个 SKU/品类/状态的总销量或总额', commonMistake: '条件区和求和区行数必须一致；忘记粘贴转值' },
    detailContent: `## SUM vs SUMIF

| 函数 | 用法 |
|---|---|
| =SUM() | 全部求和 |
| =SUMIF() | 符合条件才求和 |
| =SUMIFS() | 多条件求和 |

## SUMIF 八种用法

| 用法 | 示例 |
|---|---|
| 精确 | =SUMIF(A:A,"手机壳",B:B) |
| 排除 | =SUMIF(A:A,"<>已取消",B:B) |
| 大于 | =SUMIF(C:C,">100") |
| 模糊 | =SUMIF(A:A,"手机*",B:B) |

📺 专题图文：https://www.bilibili.com/opus/1013963691803017225`,
  },
  {
    id: 10,
    title: 'COUNTIF 条件计数',
    subtitle: '数一数符合条件的单元格有几个',
    category: 'function', difficulty: '基础', duration: '8分钟',
    description: '退款了多少单？缺货了几个品？销量 > 100 的有几个？COUNTIF 一个函数回答所有"有几个"的问题。',
    scenario: '老板问"退了多少单""缺了几个品"——你不需要手动数，COUNTIF 一秒出结果。',
    bilibiliUrl: 'https://www.bilibili.com/video/BV12z4y1W73e/', bilibiliBvid: 'BV12z4y1W73e',
    practiceFile: '', answerFile: '',
    steps: [
      { title: '基础用法', instruction: '=COUNTIF(区域, 条件)。如 =COUNTIF(B:B,"退款成功") 统计退款单数。', keywords: ['COUNTIF', '计数', '条件'] },
      { title: '数值条件', instruction: '=COUNTIF(C:C,">100") 销量 > 100 的商品数。=COUNTIF(D:D,0) 缺货商品数。', keywords: ['大于', '等于', '数值'] },
      { title: 'COUNTIFS 多条件', instruction: '=COUNTIFS(区1,条件1, 区2,条件2)。如统计某店已退款订单数。', keywords: ['COUNTIFS', '多条件'] },
    ],
    cheatsheet: { functionName: 'COUNTIF / COUNTIFS', chineseName: '条件计数', formula: '=COUNTIF(区域, 条件)  =COUNTIFS(区1,条件1, 区2,条件2)', scenario: '统计退款单数、缺货品数、各状态订单数', commonMistake: 'COUNTIF 不区分大小写；文本条件要加引号' },
    detailContent: `## COUNTIF 就是"符合条件的数一数"

| 问题 | 公式 |
|---|---|
| 退款了多少单 | =COUNTIF(状态列,"退款成功") |
| 几个商品缺货 | =COUNTIF(库存列,0) |
| 销量>100的 | =COUNTIF(销量列,">100") |
| 某店已退款 | =COUNTIFS(店列,"旗舰店",状态列,"退款成功") |`,
  },
  {
    id: 11,
    title: '文本拼接与日期函数',
    subtitle: '& 连接 + DATEDIF 日期计算',
    category: 'function', difficulty: '基础', duration: '12分钟',
    description: '用 & 拼接条件做 VLOOKUP，用 DATEDIF 算发货天数——两个小而实用的函数。',
    scenario: 'VLOOKUP 需要"商品编码-规格编码"作为查找条件，两个分开的列用 & 秒拼。DATEDIF 算从下单到发货用了几天。',
    bilibiliUrl: 'https://www.bilibili.com/video/BV14L411Q7xr/', bilibiliBvid: 'BV14L411Q7xr',
    practiceFile: '', answerFile: '',
    steps: [
      { title: '& 拼接', instruction: '=A2 & "-" & B2 把编码和规格拼成完整 SKU，作为 VLOOKUP 查找值。', keywords: ['&', '拼接', 'SKU'] },
      { title: 'DATEDIF 算天数', instruction: '=DATEDIF(下单日期, 发货日期, "D") 算出几天发的货。"M"算月，"Y"算年。', keywords: ['DATEDIF', '天数', '日期'] },
      { title: 'MONTH/YEAR 提取', instruction: '=MONTH(日期) 提取月份做月度汇总。=TODAY() 自动取今天日期。', keywords: ['MONTH', 'YEAR', 'TODAY'] },
    ],
    cheatsheet: { functionName: '& / DATEDIF', chineseName: '文本拼接与日期计算', formula: '=A1&"-"&B1  =DATEDIF(开始,结束,"D")  =TODAY()', scenario: '拼接 VLOOKUP 条件 + 计算发货时效', commonMistake: 'DATEDIF 结束日期必须 ≥ 开始日期；单位参数要加引号' },
    detailContent: `## & 拼接

假设 A2 单元格是"KTM2025"（商品编码），B2 单元格是"RD-XL"（规格编码）。

| 公式 | 含义 | 结果 |
|---|---|---|---|
| =A2 & "-" & B2 | A2的内容 + 横线 + B2的内容 | KTM2025-RD-XL |
| ="订单" & C2 | 固定文字"订单" + C2的内容 | 订单-001 |

拼接结果可以直接用作 VLOOKUP 的查找值。

## 日期函数

| 函数 | 用途 | 示例 |
|---|---|---|
| =TODAY() | 今天日期（自动更新） | 2026-06-03 |
| =DATEDIF(起,止,"D") | 计算两个日期间隔天数 | =DATEDIF(A2,B2,"D") |
| =MONTH(日期) | 提取月份数字 | =MONTH(A2) → 6 |
| =YEAR(日期) | 提取年份数字 | =YEAR(A2) → 2026 |

📺 DATEDIF 专题：BV17zVJ6sE9V`,
  },

  // ========== 分析篇 ==========
  {
    id: 12,
    title: '数据透视表',
    subtitle: '拖拽 3 秒完成多维分析，不写公式',
    category: 'analysis', difficulty: '进阶', duration: '20分钟',
    description: '按品类、按月份、按店铺做交叉分析——用函数要写几十个 SUMIF，透视表拖拽 3 秒搞定。',
    scenario: '想知道每个月各品类卖了多少钱？每个店铺的 Top 10 商品？退款最多的品类？——透视表就是答案。',
    bilibiliUrl: 'https://www.bilibili.com/video/BV1Uf4y1S7XL/', bilibiliBvid: 'BV1Uf4y1S7XL',
    practiceFile: '', answerFile: '',
    steps: [
      { title: '创建透视表', instruction: '点数据区域 → 插入 → 数据透视表 → 确定。', keywords: ['插入', '数据透视表', '创建'] },
      { title: '拖拽字段', instruction: '行=商品类别，值=销售额(求和)。立刻看到各品类汇总。', keywords: ['行', '值', '拖拽', '求和'] },
      { title: '日期分组', instruction: '右键日期 → 组合 → 选"月"→ 按月分析趋势。', keywords: ['组合', '日期分组', '按月'] },
      { title: '值显示切换', instruction: '点值下拉 → 值显示方式 → 总计的百分比 → 看占比。', keywords: ['百分比', '值显示方式', '占比'] },
    ],
    cheatsheet: { functionName: '数据透视表', chineseName: '交互式多维分析', formula: '插入→透视表→行(维度)→值(指标)→排序/分组/百分比', scenario: '月度趋势、品类排名、店铺对比、退款分析', commonMistake: '数据变化后忘刷新（右键→刷新）；数据源有空行空列 → 选不全' },
    detailContent: `## 透视表 vs 函数

| 需求 | 函数做法 | 透视表做法 |
|---|---|---|
| 每月各品类销售额 | 12×N 个 SUMIFS | 拖"月份"到列，拖"品类"到行 |
| 品类占比 | 每个品类/总计 | 值显示→总计的百分比 |
| Top 10 商品 | 排序+筛选 | 值筛选→前 10 项 |

## 四大区域

| 区域 | 放什么 |
|---|---|
| 筛选器 | 全局过滤（年份、平台） |
| 行 | 纵向分组（品类、日期） |
| 列 | 横向分组（月份、地区） |
| 值 | 计算的数（销售额、订单数） |`,
  },
  {
    id: 13,
    title: '条件格式与图表',
    subtitle: '让数据自己说话——颜色预警 + 可视化',
    category: 'analysis', difficulty: '基础', duration: '15分钟',
    description: '库存不足自动标红、销量用数据条对比、趋势用折线图展示——不写公式，让 Excel 自己画。',
    scenario: '几百行数据，哪个库存不够了？哪个退款率异常？销售额趋势是涨是跌？——条件格式 + 图表，一眼看清。',
    bilibiliUrl: 'https://www.bilibili.com/video/BV1vPLa69EAU/', bilibiliBvid: 'BV1vPLa69EAU',
    practiceFile: '', answerFile: '',
    steps: [
      { title: '条件格式-数据条', instruction: '选中销量列 → 条件格式 → 数据条 → 大小一目了然。', keywords: ['条件格式', '数据条'] },
      { title: '条件格式-色阶与图标', instruction: '色阶：颜色深浅表大小。图标集：箭头↑↓显示涨跌。', keywords: ['色阶', '图标集', '箭头'] },
      { title: '图表制作', instruction: '选中数据 → 插入 → 折线图(趋势)/柱形图(对比)/饼图(占比)/组合图(双指标)。', keywords: ['折线图', '柱形图', '饼图', '组合图'] },
    ],
    cheatsheet: { functionName: '条件格式 + 图表', chineseName: '数据可视化', formula: '条件格式：数据条/色阶/图标集  图表：插入→选类型→美化', scenario: '库存预警、销量对比、趋势分析、汇报看板', commonMistake: '图表选错类型（趋势用饼图）；数据标签太多导致看不清' },
    detailContent: `## 条件格式速查

| 效果 | 操作 |
|---|---|
| 数据条 | 条件格式→数据条 |
| 库存<10标红 | 条件格式→小于→10→红色 |
| Top 10 标绿 | 条件格式→前10项 |
| 箭头涨跌 | 条件格式→图标集→箭头 |

## 图表选择

| 目的 | 图表 |
|---|---|
| 趋势 | 折线图 |
| 对比 | 柱形图 |
| 占比 | 饼图 |
| 双指标 | 组合图(柱+折) |

📺 组合图教程：BV1bRoNBgEE5`,
  },

  // ========== 实战篇 ==========
  {
    id: 14,
    title: '毛利润与退款率计算',
    subtitle: '电商核心指标一站式计算',
    category: 'practice', difficulty: '进阶', duration: '25分钟',
    description: '综合运用 VLOOKUP + SUMIF + IF + DATEDIF，计算毛利润、退款率、客单价等核心指标。',
    scenario: '老板每天两问："赚了多少？退了多少？"——你需要在一个表里把所有指标算出来。',
    bilibiliUrl: 'https://www.bilibili.com/video/BV1LbdVBTEQr/', bilibiliBvid: 'BV1LbdVBTEQr',
    practiceFile: `${YUQUE}/1773546330734-5a43504d-7912-4494-a929-4ef3cf9269fb.xlsx`,
    answerFile: `${YUQUE}/1773546330844-4a25e783-1797-41e7-a5ef-ae6197c76084.xlsx`,
    steps: [
      { title: '算毛利润', instruction: '=售价 - 成本 - 退款 - 运费。每列用单元格引用。', keywords: ['毛利润', '售价', '成本'] },
      { title: 'IF 打标签', instruction: '=IF(利润<0,"亏损",IF(利润率>0.3,"高利润","正常")) 自动分级。', keywords: ['IF', '标签', '分级'] },
      { title: '算退款率', instruction: '=COUNTIF(状态列,"退款成功")/COUNTA(订单号列)。设置百分比格式。', keywords: ['退款率', 'COUNTIF', 'COUNTA'] },
      { title: '汇总输出', instruction: '双击填充柄 → 粘贴转值 → 底部 SUM 汇总 → 完成。', keywords: ['填充柄', '粘贴转值', 'SUM', '汇总'] },
    ],
    cheatsheet: { functionName: '电商核心指标', chineseName: '利润+退款率+客单价', formula: '毛利润=售价-成本-退款-运费  退款率=退款单/总单  客单价=总额/总单', scenario: '每日核算盈亏，制作经营周报', commonMistake: '退款含仅退款和退货退款两种；日期格式不统一致 DATEDIF 报错' },
    detailContent: `## 指标速查

| 指标 | 公式 |
|---|---|
| 毛利润 | 售价 - 成本 - 退款 - 运费 |
| 毛利率 | 毛利润 ÷ 售价 |
| 退款率 | COUNTIF(状态,"退款成功") ÷ COUNTA(订单号) |
| 客单价 | SUM(销售额) ÷ COUNTA(订单号) |
| 环比增长 | (本期 - 上期) ÷ 上期 |`,
  },
  {
    id: 15,
    title: '日报、周报与月报制作',
    subtitle: '从原始数据到汇报看板的完整流程',
    category: 'practice', difficulty: '进阶', duration: '20分钟',
    description: '每天重复的数据处理流程——清洗→汇总→可视化→存档。做好模板后，每天只需替换源数据。',
    scenario: '每天下班前 10 分钟出日报：销售额、订单数、客单价、退款率，再加一张趋势图。模板做好，每天自动算。',
    bilibiliUrl: 'https://www.bilibili.com/video/BV1bAfAYyEWz/', bilibiliBvid: 'BV1bAfAYyEWz',
    practiceFile: '', answerFile: '',
    steps: [
      { title: '日报模板', instruction: '固定区域放 KPI（SUM/COUNTA 公式），下方放趋势图和数据透视表。每天只换源数据。', keywords: ['日报', '模板', 'KPI'] },
      { title: '周报汇总', instruction: '用 SUMIF 按周汇总每日数据，折线图展示趋势。柱形图对比各品类。', keywords: ['周报', 'SUMIF', '趋势图'] },
      { title: '月报分析', instruction: '数据透视表按月分组 → 计算环比 → 条件格式标记异常 → 组合图展示双指标。', keywords: ['月报', '环比', '组合图'] },
    ],
    cheatsheet: { functionName: '日报/周报/月报', chineseName: '运营报表体系', formula: '日报=KPI卡片+趋势图  周报=SUMIF汇总+柱形图  月报=透视表+环比+组合图', scenario: '日报/周报/月报三件套，模板化自动化', commonMistake: '日报不粘贴转值导致历史数据变化；月报忘记刷新透视表' },
    detailContent: `## 报表三件套

| 类型 | 核心操作 | 工具 |
|---|---|---|
| 日报 | KPI卡片+趋势图 | SUM/COUNTA+折线图 |
| 周报 | 按周汇总+对比 | SUMIF+柱形图 |
| 月报 | 多维分析+环比 | 透视表+组合图 |

## 模板化思维

做好一次模板 → 每天只需替换源数据 → 公式自动刷新 → 粘贴转值存档。`,
  },
  {
    id: 16,
    title: '大作业1：订单数据分析',
    subtitle: '综合运用全部所学技能',
    category: 'practice', difficulty: '进阶', duration: '45分钟',
    description: '给定三张原始报表，独立完成清洗→匹配→汇总→指标计算的全流程。检验你的真实水平。',
    scenario: '模拟真实场景：从三张原始报表出发，最终输出包含毛利润、退款率、销量排名的分析报告。',
    bilibiliUrl: 'https://www.bilibili.com/video/BV13FsJzHEch/', bilibiliBvid: 'BV13FsJzHEch',
    practiceFile: `${YUQUE}/1773546331002-33535461-11aa-481e-9257-554c10bd56c8.xlsx`,
    answerFile: `${YUQUE}/1773546331114-07f3ff6c-bc00-4ba4-94f6-cfaf0ddcca30.xlsx`,
    steps: [
      { title: '数据清洗', instruction: '三张表各自：筛选删无效行、TRIM 去空格、文本转数字、统一日期格式。', keywords: ['数据清洗', '筛选', 'TRIM', '转数字'] },
      { title: '跨表匹配', instruction: 'VLOOKUP 匹配关键字段。匹配前 TRIM 清理查找列。', keywords: ['VLOOKUP', '跨表', 'TRIM'] },
      { title: '条件汇总', instruction: 'SUMIF 按 SKU 汇总销量金额。COUNTIF 统计各状态订单数。', keywords: ['SUMIF', 'COUNTIF', '汇总'] },
      { title: '指标呈现', instruction: '算毛利润/退款率/客单价，条件格式标异常，透视表做多维分析。', keywords: ['毛利润', '退款率', '条件格式', '透视表'] },
    ],
    cheatsheet: { functionName: '综合大作业1', chineseName: '全流程数据分析', formula: '清洗→TRIM→VLOOKUP→SUMIF→COUNTIF→指标计算→条件格式→透视表', scenario: '从原始报表到分析报告', commonMistake: '跳过清洗直接匹配 → 大量 #N/A；忘粘贴转值 → 数据不准' },
    detailContent: `## 作业流程

1. 打开三张原始表
2. 清洗：筛选无效、去空格、转数字、统一格式
3. 匹配：VLOOKUP 跨表关联
4. 汇总：SUMIF/COUNTIF 按维度统计
5. 分析：计算指标、条件格式标记、透视表分析
6. 对照答案自查

## 评分

- 清洗完整 30 分
- 匹配正确 25 分
- 汇总正确 25 分
- 指标正确 20 分`,
  },
  {
    id: 17,
    title: '大作业2：全店商品成本分析',
    subtitle: '商品维度利润核算 + 数据透视表实战',
    category: 'practice', difficulty: '进阶', duration: '40分钟',
    description: '从全店商品表和成本表出发，完成利润计算、亏损识别和品类利润分析。VLOOKUP + 透视表综合实战。',
    scenario: '找出店铺里哪些款在亏钱、哪些最赚钱、哪个品类利润最高——为选品和定价提供数据支撑。',
    bilibiliUrl: 'https://www.bilibili.com/video/BV1bAfAYyEWz/', bilibiliBvid: 'BV1bAfAYyEWz',
    practiceFile: `${YUQUE}/1773546331069-0504034c-92a9-4511-822b-1f5b41a661e8.xlsx`,
    answerFile: `${YUQUE}/1773546331088-7072da1a-e53b-4b75-846c-60857a1ab9d6.xlsx`,
    steps: [
      { title: 'VLOOKUP 匹配成本', instruction: '=VLOOKUP(编码, 成本表!A:C, 3, 0)。用 IFERROR 处理新品：#N/A → "新品待录入"。', keywords: ['VLOOKUP', 'IFERROR', '成本'] },
      { title: '计算利润与利润率', instruction: '利润=售价-成本-运费。利润率=利润÷售价。双击填充到底。', keywords: ['利润', '利润率', '售价'] },
      { title: '条件格式识别亏损', instruction: '条件格式 → 小于 0 → 红色填充。筛选亏损行，按利润率排序。', keywords: ['条件格式', '亏损', '排序'] },
      { title: '透视表品类分析', instruction: '插入透视表：行=品类，值=利润(求和)+利润率(平均)。组合图展示双指标对比。', keywords: ['透视表', '品类', '组合图'] },
    ],
    cheatsheet: { functionName: '全店利润分析', chineseName: '商品维度利润核算', formula: '利润=售价-VLOOKUP成本-运费  IFERROR(,"新品")  透视表按品类汇总', scenario: '识别亏损商品，优化选品和定价策略', commonMistake: '新品编码在成本表中不存在→#N/A，需用 IFERROR 兜底' },
    detailContent: `## 作业流程

1. VLOOKUP 匹配成本（IFERROR 处理新品）
2. 计算单品利润和利润率
3. 条件格式标红亏损商品
4. 透视表按品类汇总利润结构
5. 输出：亏损商品清单 + 品类利润排名

## 自查清单

- □ 所有行有利润值（无 #N/A）
- □ 亏损商品已标红
- □ 透视表品类分析正确
- □ 与答案表核对一致`,
  },
]

export const cheatsheets: CheatItem[] = courses.map((c) => c.cheatsheet)
