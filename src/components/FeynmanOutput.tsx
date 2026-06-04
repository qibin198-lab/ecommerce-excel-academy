import { useState } from 'react'
import { useProgress } from '../hooks/useProgress'

interface Props {
  courseId: number
  keywords: string[]
}

export default function FeynmanOutput({ courseId, keywords }: Props) {
  const { getProgress, markExplained } = useProgress()
  const progress = getProgress(courseId)
  const [input, setInput] = useState('')
  const [passed, setPassed] = useState(progress.explained)
  const [submitted, setSubmitted] = useState(false)

  const checkKeywords = (text: string): string[] => {
    return keywords.filter((kw) => text.includes(kw))
  }

  const handleSubmit = () => {
    setSubmitted(true)
    const matched = checkKeywords(input)
    if (matched.length >= 2) {
      setPassed(true)
      markExplained(courseId)
    }
  }

  if (passed) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-5 mt-6">
        <div className="flex items-center gap-2 mb-2">
          <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="font-medium text-green-700">费曼检验通过</span>
        </div>
        <p className="text-sm text-green-600">
          你已经能用自己的话解释这个操作了——这意味着你真的理解了。
        </p>
      </div>
    )
  }

  const matched = submitted ? checkKeywords(input) : []

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mt-6">
      <h3 className="font-semibold text-gray-800 mb-1">
        用你自己的话复述操作步骤
      </h3>
      <p className="text-sm text-gray-500 mb-3">
        包含至少 2 个关键词即可通过（不要求逐字精确）
      </p>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {keywords.map((kw) => (
          <span
            key={kw}
            className={`text-[11px] px-2 py-0.5 rounded-full transition-colors ${
              submitted && matched.includes(kw)
                ? 'bg-green-100 text-green-700'
                : 'bg-gray-200 text-gray-500'
            }`}
          >
            {kw}
          </span>
        ))}
      </div>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="例如：先选中要复制的单元格，然后按Ctrl+C复制，再右键选择粘贴为数值..."
        className="w-full h-24 px-3 py-2 text-sm border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-excel-300 focus:border-transparent"
        disabled={passed}
      />

      <div className="flex items-center justify-between mt-3">
        {submitted && !passed && (
          <p className="text-sm text-orange-500">
            已匹配 {matched.length}/{keywords.length} 个关键词，再试试
          </p>
        )}
        {!submitted && <span />}
        <button
          onClick={handleSubmit}
          disabled={input.trim().length < 5}
          className="px-4 py-1.5 bg-excel-500 text-white text-sm font-medium rounded-lg hover:bg-excel-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          提交验证
        </button>
      </div>
    </div>
  )
}
