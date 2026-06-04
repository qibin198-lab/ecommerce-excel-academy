import { courses } from '../data/courses'
import { useProgress } from '../hooks/useProgress'
import ProgressBar from '../components/ProgressBar'
import { Link } from 'react-router-dom'

export default function Progress() {
  const { getProgress, getCompletionRate, getCourseCompletion } = useProgress()
  const rate = getCompletionRate()

  const totalChecks = courses.length * 3
  const completedChecks = Math.round((rate / 100) * totalChecks)

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">学习进度看板</h1>
        <p className="text-gray-500">
          追踪你在每个模块的学习、练习和费曼检验进度。
        </p>
      </div>

      {/* Overall progress */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
          <div className="w-24 h-24 rounded-full border-4 border-excel-100 flex items-center justify-center shrink-0">
            <span className="text-2xl font-bold text-excel-600">{rate}%</span>
          </div>
          <div className="flex-1">
            <h2 className="font-semibold text-gray-800 mb-1">总体进度</h2>
            <p className="text-sm text-gray-500 mb-3">
              已完成 {completedChecks} / {totalChecks} 项检查点
            </p>
            <ProgressBar percent={rate} />
          </div>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm bg-green-300" />
            <span className="text-gray-500">完成</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm bg-gray-200" />
            <span className="text-gray-500">未完成</span>
          </div>
        </div>
      </div>

      {/* Per-course progress */}
      <h2 className="text-lg font-bold text-gray-800 mb-4">各模块详情</h2>
      <div className="space-y-3">
        {courses.map((course) => {
          const p = getProgress(course.id)
          const comp = getCourseCompletion(course.id)
          return (
            <Link
              key={course.id}
              to={`/course/${course.id}`}
              className="block bg-white rounded-xl border border-gray-200 p-4 hover:border-excel-300 hover:shadow-sm transition-all no-underline"
            >
              <div className="flex items-center gap-4">
                <span className="text-xl font-bold text-gray-300 tabular-nums w-8 text-center shrink-0">
                  {String(course.id).padStart(2, '0')}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-800 text-sm">{course.title}</h3>
                  <p className="text-xs text-gray-400 truncate">{course.subtitle}</p>
                </div>
                <div className="flex items-center gap-3 text-xs shrink-0">
                  <span
                    className={
                      p.learned ? 'text-green-600' : 'text-gray-300'
                    }
                  >
                    学习
                  </span>
                  <span
                    className={
                      p.practiced ? 'text-green-600' : 'text-gray-300'
                    }
                  >
                    练习
                  </span>
                  <span
                    className={
                      p.explained ? 'text-green-600' : 'text-gray-300'
                    }
                  >
                    复述
                  </span>
                  <div className="flex gap-0.5 ml-2">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className={`w-2 h-5 rounded-sm ${
                          i < comp ? 'bg-excel-400' : 'bg-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
