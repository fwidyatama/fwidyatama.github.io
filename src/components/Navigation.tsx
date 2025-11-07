import { useState } from 'react'
import { ThemeToggle } from './theme-toggle'

interface NavigationProps {
  isScrolled: boolean
}

const Navigation = ({ isScrolled }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-sm border-b border-border py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Minimal logo - just initials or name */}
          <a
            href="#"
            className="font-mono text-sm font-semibold text-foreground hover:text-primary transition-colors tracking-wider"
          >
            FW
          </a>

          {/* Desktop Navigation - minimal, brutalist */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs text-muted-foreground hover:text-foreground font-medium uppercase tracking-widest transition-colors underline-custom"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button - brutalist style */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              className="p-2 text-foreground border border-border hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="square"
                strokeLinejoin="miter"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation - full width, brutalist */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-border pt-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-sm text-muted-foreground hover:text-foreground uppercase tracking-widest font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
