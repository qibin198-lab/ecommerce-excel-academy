interface Props {
  percent: number
  label?: string
}

export default function ProgressBar({ percent, label }: Props) {
  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-500">{label}</span>
          <span className="text-gray-700 font-medium">{percent}%</span>
        </div>
      )}
      <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-excel-400 rounded-full progress-fill"
          style={{ width: `${Math.min(percent, 100)}%` }}
        />
      </div>
    </div>
  )
}
