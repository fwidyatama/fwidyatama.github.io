import { Routes, Route } from 'react-router-dom'
import LeftSidebar from './components/LeftSidebar'
import MainContent from './components/MainContent'
import RightSidebar from './components/RightSidebar'
import NotesPage from './components/Notes'

function HomePage() {
  return (
    <div className="layout-shell">
      <LeftSidebar />
      <main className="main-scroll">
        <MainContent />
      </main>
      <RightSidebar />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/w" element={<NotesPage />} />
    </Routes>
  )
}

export default App
