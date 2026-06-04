import { cheatsheets, courses } from '../data/courses'
import { Link } from 'react-router-dom'

export default function CheatSheet() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">速查卡片</h1>
        <p className="text-gray-500">
          所有函数和操作要点的精华汇总。学完后把这一页存下来，工作时随时翻看。
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course, i) => {
          const cs = cheatsheets[i]
          return (
            <div
              key={course.id}
              className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="text-xs text-gray-400">第 {course.id} 课</span>
                  <h3 className="font-bold text-gray-800">{cs.functionName}</h3>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">
                  {course.category === 'basic' ? '基础篇' : course.category === 'function' ? '函数篇' : course.category === 'analysis' ? '分析篇' : '实战篇'}
                </span>
              </div>

              <p className="text-xs text-gray-500 mb-3">{cs.chineseName}</p>

              <div className="bg-gray-50 rounded-lg p-3 mb-3">
                <p className="text-[11px] text-gray-400 mb-1">公式模板</p>
                <code className="text-sm text-excel-700 font-medium whitespace-pre-wrap">
                  {cs.formula}
                </code>
              </div>

              <div className="mb-3">
                <p className="text-[11px] text-gray-400 mb-1">电商场景</p>
                <p className="text-xs text-gray-600">{cs.scenario}</p>
              </div>

              <div className="bg-orange-50 rounded-lg p-3">
                <p className="text-[11px] text-orange-400 mb-1">常见错误</p>
                <p className="text-xs text-orange-700">{cs.commonMistake}</p>
              </div>

              <Link
                to={`/course/${course.id}`}
                className="inline-block mt-4 text-xs text-excel-600 hover:text-excel-700 font-medium"
              >
                查看完整课程 →
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
