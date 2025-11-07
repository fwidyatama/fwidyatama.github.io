import { useState, useEffect } from 'react'
import { ThemeProvider } from './components/theme-provider'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Navigation isScrolled={isScrolled} />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </ThemeProvider>
  )
}

export default App

