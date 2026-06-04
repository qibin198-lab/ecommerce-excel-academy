import { useState } from 'react'
import type { CourseStep } from '../data/courses'

interface Props {
  steps: CourseStep[]
}

export default function StepAccordion({ steps }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-2">
      {steps.map((step, i) => {
        const isOpen = openIndex === i
        return (
          <div
            key={i}
            className="border border-gray-200 rounded-lg overflow-hidden bg-white"
          >
            <button
              onClick={() => toggle(i)}
              className="w-full px-4 py-3 flex items-center gap-3 text-left hover:bg-gray-50 transition-colors"
            >
              <span className="w-6 h-6 rounded-full bg-excel-100 text-excel-700 text-xs font-bold flex items-center justify-center shrink-0">
                {i + 1}
              </span>
              <span className="font-medium text-gray-800 text-sm flex-1">
                {step.title}
              </span>
              <svg
                className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isOpen && (
              <div className="px-4 pb-4 pt-0 border-t border-gray-100">
                <p className="text-sm text-gray-600 leading-relaxed mt-3">
                  {step.instruction}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {step.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="text-[11px] px-2 py-0.5 rounded-full bg-excel-50 text-excel-600"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  )
}
