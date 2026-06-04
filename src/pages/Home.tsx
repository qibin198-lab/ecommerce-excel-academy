import { courses } from '../data/courses'
import CourseCard from '../components/CourseCard'
import { useProgress } from '../hooks/useProgress'
import ProgressBar from '../components/ProgressBar'

const phases = [
  {
    label: '基础篇',
    desc: 'WPS操作、数据清洗——零基础入门',
    ids: [1, 2, 3, 4],
    color: 'border-green-400 bg-green-50',
  },
  {
    label: '函数篇',
    desc: 'VLOOKUP、SUMIF、IF、COUNTIF 等 7 大核心函数',
    ids: [5, 6, 7, 8, 9, 10, 11],
    color: 'border-blue-400 bg-blue-50',
  },
  {
    label: '分析篇',
    desc: '数据透视表、条件格式、图表——不写公式做分析',
    ids: [12, 13],
    color: 'border-purple-400 bg-purple-50',
  },
  {
    label: '实战篇',
    desc: '日报月报、利润核算、两个大作业——真实场景实战',
    ids: [14, 15, 16, 17],
    color: 'border-orange-400 bg-orange-50',
  },
]

export default function Home() {
  const { getCompletionRate } = useProgress()
  const rate = getCompletionRate()

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-excel-600 via-excel-700 to-excel-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:py-24">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            把电商Excel技能拆成
            <span className="block text-excel-200">一个个动作，学完就能用</span>
          </h1>
          <p className="text-excel-100/80 text-lg max-w-lg mb-8">
            专为电商运营人员设计的 Excel 训练平台。17 节课覆盖从界面操作到数据透视表，
            每节课配 B 站视频 + 分步操作 + 费曼输出 + 实战练习。
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#courses"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-excel-700 font-semibold rounded-xl hover:bg-excel-50 transition-colors no-underline"
            >
              开始学习
            </a>
            <a
              href="/cheatsheet"
              className="inline-flex items-center justify-center px-6 py-3 bg-excel-800/50 text-white font-medium rounded-xl hover:bg-excel-800/70 transition-colors no-underline border border-excel-400/30"
            >
              速查卡片
            </a>
          </div>
        </div>
      </section>

      {/* Progress overview */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1 w-full">
            <ProgressBar percent={rate} label="整体进度" />
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500 shrink-0">
            <span>17 节课 · 22 个视频 · 8 个练习</span>
          </div>
        </div>
      </section>

      {/* Learning path */}
      <section className="max-w-6xl mx-auto px-4 pb-10">
        <h2 className="text-xl font-bold text-gray-800 mb-6">学习路径</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {phases.map((phase) => (
            <div
              key={phase.label}
              className={`rounded-xl border-l-4 p-5 ${phase.color}`}
            >
              <h3 className="font-bold text-gray-800 mb-1">{phase.label}</h3>
              <p className="text-sm text-gray-500 mb-3">{phase.desc}</p>
              <div className="flex gap-1 flex-wrap">
                {phase.ids.map((id) => (
                  <span
                    key={id}
                    className="w-6 h-6 rounded-full bg-white border border-gray-200 text-[11px] font-bold text-gray-400 flex items-center justify-center"
                  >
                    {id}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Course grid */}
        <h2 id="courses" className="text-xl font-bold text-gray-800 mb-6">
          全部课程（17 节）
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </div>
  )
}
