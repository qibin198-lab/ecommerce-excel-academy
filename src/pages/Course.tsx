import { useParams, Link } from 'react-router-dom'
import { courses } from '../data/courses'
import { useProgress } from '../hooks/useProgress'
import StepAccordion from '../components/StepAccordion'
import FeynmanOutput from '../components/FeynmanOutput'
import ProgressBar from '../components/ProgressBar'

export default function Course() {
  const { id } = useParams<{ id: string }>()
  const courseId = Number(id)
  const course = courses.find((c) => c.id === courseId)

  const { getProgress, getCompletionRate, toggleLearned, togglePracticed } = useProgress()
  const progress = courseId ? getProgress(courseId) : { learned: false, practiced: false, explained: false }
  const rate = getCompletionRate()

  if (!course) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">课程未找到</h2>
        <Link to="/" className="text-excel-600 hover:text-excel-700">
          返回课程列表
        </Link>
      </div>
    )
  }

  const prevCourse = courses.find((c) => c.id === courseId - 1)
  const nextCourse = courses.find((c) => c.id === courseId + 1)

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link to="/" className="hover:text-gray-600 transition-colors">
          课程
        </Link>
        <span>/</span>
        <span className="text-gray-600">{course.title}</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left: tutorial content */}
        <div className="flex-1 min-w-0">
          {/* Video section */}
          {course.bilibiliBvid && (
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-6">
              <div className="aspect-video">
                <iframe
                  src={`https://player.bilibili.com/player.html?bvid=${course.bilibiliBvid}&autoplay=0&page=1`}
                  className="w-full h-full"
                  allowFullScreen
                  title={`${course.title} 教程视频`}
                />
              </div>
            </div>
          )}

          {/* Course header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs px-2 py-0.5 rounded-full bg-excel-50 text-excel-600 font-medium">
                第 {course.id} 课
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">
                {course.difficulty} · {course.duration}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
              {course.title}
            </h1>
            <p className="text-lg text-gray-500">{course.subtitle}</p>
          </div>

          {/* Scenario hook */}
          <div className="bg-excel-50 border border-excel-200 rounded-xl p-4 mb-6">
            <div className="flex items-start gap-3">
              <span className="text-lg shrink-0">💡</span>
              <div>
                <h3 className="font-semibold text-excel-800 text-sm mb-1">
                  电商场景
                </h3>
                <p className="text-sm text-excel-700/80">{course.scenario}</p>
              </div>
            </div>
          </div>

          {/* Detail content */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6 course-content">
            <div
              className="prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{
                __html: (() => {
                  let html = course.detailContent
                    .replace(/## ([^\n]+)/g, '<h2>$1</h2>')
                    .replace(/### ([^\n]+)/g, '<h3>$1</h3>')
                    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
                    .replace(/`([^`]+)`/g, '<code>$1</code>')
                  // handle markdown tables: split by \n\n, process table blocks
                  const blocks = html.split(/\n\n/)
                  const result = blocks.map(block => {
                    const lines = block.trim().split('\n')
                    if (lines.length >= 2 && lines[0].startsWith('|') && lines[1].includes('---')) {
                      // it's a table
                      const headerCells = lines[0].split('|').filter(c => c.trim())
                      const headerRow = `<tr>${headerCells.map(c => `<th>${c.trim()}</th>`).join('')}</tr>`
                      const bodyRows = lines.slice(2)
                        .filter(l => l.startsWith('|'))
                        .map(l => {
                          const cells = l.split('|').filter(c => c.trim())
                          // match the header column count
                          const paddedCells = [...cells, ...Array(Math.max(0, headerCells.length - cells.length)).fill('')]
                          return `<tr>${paddedCells.slice(0, headerCells.length).map(c => `<td>${c.trim()}</td>`).join('')}</tr>`
                        }).join('')
                      return `<table>${headerRow}${bodyRows}</table>`
                    }
                    // regular text block
                    const lines2 = block.trim().split('\n')
                    const withLists = lines2.map(l => {
                      if (/^[-*] (.+)$/.test(l)) return `<li>${l.replace(/^[-*] /, '')}</li>`
                      if (/^\d+\. (.+)$/.test(l)) return `<li>${l.replace(/^\d+\. /, '')}</li>`
                      return l
                    })
                    let text = withLists.join('\n')
                    // wrap consecutive <li> in <ul> or <ol>
                    text = text.replace(/((?:<li>.*?<\/li>\n?)+)/g, '<ul>$1</ul>')
                    return '<p>' + text.replace(/\n/g, '<br/>') + '</p>'
                  })
                  return result.join('')
                })(),
              }}
            />
          </div>

          {/* Step accordion */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-800 mb-3">分步操作指南</h2>
            <StepAccordion steps={course.steps} />
          </div>

          {/* Practice file download */}
          {(course.practiceFile || course.answerFile) && (
          <div className="bg-white rounded-xl border border-gray-200 p-5 mb-6">
            <h3 className="font-semibold text-gray-800 mb-2">练习文件</h3>
            <p className="text-sm text-gray-500 mb-3">
              {course.practiceFile ? '下载练习文件，打开 Excel 跟着操作。完成后再下载答案对照检查。' : '下载答案文件对照检查你的结果。'}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              {course.practiceFile && (
              <a
                href={course.practiceFile}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => togglePracticed(course.id)}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-excel-500 text-white text-sm font-medium rounded-lg hover:bg-excel-600 transition-colors no-underline"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                下载练习文件
              </a>
              )}
              {course.answerFile && (
              <a
                href={course.answerFile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors no-underline"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                下载答案文件
              </a>
              )}
            </div>
          </div>
          )}

          {/* Feynman output */}
          <FeynmanOutput
            courseId={course.id}
            keywords={course.steps.flatMap((s) => s.keywords)}
          />

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
            {prevCourse ? (
              <Link
                to={`/course/${prevCourse.id}`}
                className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
              >
                ← {prevCourse.title}
              </Link>
            ) : (
              <span />
            )}
            {nextCourse ? (
              <Link
                to={`/course/${nextCourse.id}`}
                className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
              >
                {nextCourse.title} →
              </Link>
            ) : (
              <span />
            )}
          </div>
        </div>

        {/* Right: sidebar */}
        <div className="lg:w-72 shrink-0">
          <div className="sticky top-20 space-y-4">
            {/* Progress check */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-800 mb-3">学习进度</h3>
              <ProgressBar
                percent={rate}
                label={`第 ${course.id} / ${courses.length} 课`}
              />
              <div className="mt-4 space-y-2">
                <button
                  onClick={() => toggleLearned(course.id)}
                  className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                    progress.learned
                      ? 'bg-green-50 text-green-700'
                      : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={progress.learned}
                    readOnly
                    className="w-4 h-4 accent-excel-500"
                  />
                  已学完教程
                </button>
                <button
                  onClick={() => togglePracticed(course.id)}
                  className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                    progress.practiced
                      ? 'bg-green-50 text-green-700'
                      : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={progress.practiced}
                    readOnly
                    className="w-4 h-4 accent-excel-500"
                  />
                  已完成练习
                </button>
                <div
                  className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${
                    progress.explained
                      ? 'bg-green-50 text-green-700'
                      : 'bg-gray-50 text-gray-400'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={progress.explained}
                    readOnly
                    className="w-4 h-4 accent-excel-500"
                  />
                  已通过费曼检验
                </div>
              </div>
            </div>

            {/* Cheatsheet mini */}
            <div className="bg-excel-50 border border-excel-200 rounded-xl p-5">
              <h3 className="font-semibold text-excel-800 mb-2 text-sm">
                速查卡片
              </h3>
              <p className="text-xs text-excel-700/70 mb-1">
                {course.cheatsheet.functionName}
              </p>
              <code className="block text-xs bg-white rounded p-2 text-excel-700 mb-2">
                {course.cheatsheet.formula}
              </code>
              <p className="text-xs text-excel-700/70">
                {course.cheatsheet.commonMistake}
              </p>
            </div>

            {/* Bilibili link */}
            {course.bilibiliUrl && (
              <a
                href={course.bilibiliUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-pink-50 border border-pink-200 rounded-xl p-4 hover:bg-pink-100 transition-colors no-underline"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">📺</span>
                  <div>
                    <p className="text-sm font-medium text-pink-700">在B站观看</p>
                    <p className="text-xs text-pink-500">全屏播放体验更佳</p>
                  </div>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
