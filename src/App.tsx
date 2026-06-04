import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Course from './pages/Course'
import CheatSheet from './pages/CheatSheet'
import Progress from './pages/Progress'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/course/:id" element={<Course />} />
          <Route path="/cheatsheet" element={<CheatSheet />} />
          <Route path="/progress" element={<Progress />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
