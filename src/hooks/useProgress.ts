import { useState, useEffect, useCallback } from 'react'

export interface CourseProgress {
  learned: boolean
  practiced: boolean
  explained: boolean
}

export interface AllProgress {
  [courseId: number]: CourseProgress
}

const STORAGE_KEY = 'excel-academy-progress'

function loadProgress(): AllProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function saveProgress(progress: AllProgress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
}

export function useProgress() {
  const [progress, setProgress] = useState<AllProgress>(loadProgress)

  useEffect(() => {
    saveProgress(progress)
  }, [progress])

  const getProgress = useCallback(
    (courseId: number): CourseProgress => {
      return progress[courseId] || { learned: false, practiced: false, explained: false }
    },
    [progress]
  )

  const toggleLearned = useCallback((courseId: number) => {
    setProgress((prev) => {
      const cur = prev[courseId] || { practiced: false, explained: false }
      return { ...prev, [courseId]: { ...cur, learned: !cur.learned } }
    })
  }, [])

  const togglePracticed = useCallback((courseId: number) => {
    setProgress((prev) => {
      const cur = prev[courseId] || { learned: false, explained: false }
      return { ...prev, [courseId]: { ...cur, practiced: !cur.practiced } }
    })
  }, [])

  const markExplained = useCallback((courseId: number) => {
    setProgress((prev) => ({
      ...prev,
      [courseId]: { ...(prev[courseId] || { learned: false, practiced: false }), explained: true },
    }))
  }, [])

  const getCompletionRate = useCallback(() => {
    const entries = Object.values(progress)
    if (entries.length === 0) return 0
    let totalChecks = 0
    let completedChecks = 0
    for (const p of entries) {
      totalChecks += 3
      if (p.learned) completedChecks++
      if (p.practiced) completedChecks++
      if (p.explained) completedChecks++
    }
    return Math.round((completedChecks / Math.max(totalChecks, 1)) * 100)
  }, [progress])

  const getCourseCompletion = useCallback((courseId: number) => {
    const p = getProgress(courseId)
    let count = 0
    if (p.learned) count++
    if (p.practiced) count++
    if (p.explained) count++
    return count
  }, [getProgress])

  return {
    progress,
    getProgress,
    toggleLearned,
    togglePracticed,
    markExplained,
    getCompletionRate,
    getCourseCompletion,
  }
}
