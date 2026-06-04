import { NavLink, Outlet } from 'react-router-dom'
import { useProgress } from '../hooks/useProgress'

export default function Layout() {
  const { getCompletionRate } = useProgress()
  const rate = getCompletionRate()

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2.5 no-underline">
            <span className="w-8 h-8 bg-excel-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              E
            </span>
            <span className="font-semibold text-gray-800 text-lg hidden sm:block">
              电商Excel训练营
            </span>
          </NavLink>

          <nav className="flex items-center gap-1">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-excel-50 text-excel-700'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              课程
            </NavLink>
            <NavLink
              to="/cheatsheet"
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-excel-50 text-excel-700'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              速查卡片
            </NavLink>
            <NavLink
              to="/progress"
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-excel-50 text-excel-700'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              进度
            </NavLink>
          </nav>

          <div className="hidden sm:flex items-center gap-2 text-xs text-gray-400">
            <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-excel-400 rounded-full progress-fill"
                style={{ width: `${rate}%` }}
              />
            </div>
            <span>{rate}%</span>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-white border-t border-gray-200 py-6 text-center text-sm text-gray-400">
        电商Excel训练营 — 把技能拆成一个个动作，学完就能用
      </footer>
    </div>
  )
}
