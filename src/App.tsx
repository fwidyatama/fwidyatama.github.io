import LeftSidebar from './components/LeftSidebar'
import MainContent from './components/MainContent'
import RightSidebar from './components/RightSidebar'

function App() {
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

export default App
