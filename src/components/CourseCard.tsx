import { Link } from 'react-router-dom'
import type { Course } from '../data/courses'
import { useProgress } from '../hooks/useProgress'

interface Props {
  course: Course
}

const difficultyColor: Record<string, string> = {
  '入门': 'bg-green-100 text-green-700',
  '基础': 'bg-blue-100 text-blue-700',
  '进阶': 'bg-orange-100 text-orange-700',
}

const categoryLabel: Record<string, string> = {
  basic: '基础篇',
  function: '函数篇',
  analysis: '分析篇',
  practice: '实战篇',
}

const categoryColor: Record<string, string> = {
  basic: 'bg-green-50 border-green-200',
  function: 'bg-blue-50 border-blue-200',
  analysis: 'bg-purple-50 border-purple-200',
  practice: 'bg-orange-50 border-orange-200',
}

export default function CourseCard({ course }: Props) {
  const { getCourseCompletion } = useProgress()
  const completed = getCourseCompletion(course.id)

  return (
    <Link
      to={`/course/${course.id}`}
      className={`block rounded-xl border-2 p-5 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 no-underline ${categoryColor[course.category]}`}
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-2xl font-bold text-gray-300 tabular-nums">
          {String(course.id).padStart(2, '0')}
        </span>
        <div className="flex gap-1.5">
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-white border border-gray-200 text-gray-500">
            {categoryLabel[course.category]}
          </span>
          <span className={`text-[10px] px-2 py-0.5 rounded-full ${difficultyColor[course.difficulty]}`}>
            {course.difficulty}
          </span>
        </div>
      </div>

      <h3 className="font-semibold text-gray-800 mb-1">{course.title}</h3>
      <p className="text-sm text-gray-500 mb-3 line-clamp-2">{course.subtitle}</p>

      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-400">{course.duration}</span>
        <div className="flex gap-0.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`w-2.5 h-2.5 rounded-sm transition-colors ${
                i < completed ? 'bg-excel-400' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>
    </Link>
  )
}
