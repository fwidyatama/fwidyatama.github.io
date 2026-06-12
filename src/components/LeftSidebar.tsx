import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Github, Linkedin, Mail, MapPin, Clock } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'home', href: '/' },
  { label: 'experience', href: '/#experience' },
  { label: 'writing', href: '/notes' },
  { label: 'til', href: '#' },
  { label: 'uses', href: '#' },
  { label: 'resume', href: '#' },
]

function useTheme() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false
    const stored = localStorage.getItem('theme')
    if (stored) return stored === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return { dark, toggle: () => setDark(d => !d) }
}

const muted = 'hsl(var(--muted-foreground))'
const fg = 'hsl(var(--foreground))'
const accent = 'hsl(var(--accent))'

export default function LeftSidebar() {
  const { dark, toggle } = useTheme()
  const location = useLocation()

  function isActive(href: string) {
    if (href === '/') return location.pathname === '/'
    return location.pathname.startsWith(href.replace('/#', '/'))
  }

  return (
    <aside className="sidebar-left">
      <Link to="/" style={{ fontWeight: 600, fontSize: '0.95rem', color: fg, letterSpacing: '-0.01em', textDecoration: 'none' }}>
        fwidyatama
      </Link>

      <nav style={{ marginTop: '1.75rem' }}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                className="nav-item"
                style={{ color: isActive(item.href) ? accent : muted }}
                onMouseEnter={e => { if (!isActive(item.href)) e.currentTarget.style.color = fg }}
                onMouseLeave={e => { e.currentTarget.style.color = isActive(item.href) ? accent : muted }}
              >
                /{item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <p style={{ fontSize: '0.82rem', color: muted, marginTop: '1.75rem', lineHeight: 1.6 }}>
        Backend engineer building systems and learning in public.
      </p>

      <div style={{ marginTop: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.8rem', color: muted }}>
          <MapPin size={13} />
          Bandung, Indonesia
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.8rem', color: muted }}>
          <Clock size={13} />
          UTC+7
        </div>
      </div>

      <div style={{ marginTop: 'auto', paddingTop: '1.75rem', display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
        <a href="https://github.com/fwidyatama" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
          style={{ color: muted, transition: 'color 0.15s' }}
          onMouseEnter={e => (e.currentTarget.style.color = fg)}
          onMouseLeave={e => (e.currentTarget.style.color = muted)}>
          <Github size={16} />
        </a>
        <a href="https://linkedin.com/in/faridwidyatama" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
          style={{ color: muted, transition: 'color 0.15s' }}
          onMouseEnter={e => (e.currentTarget.style.color = fg)}
          onMouseLeave={e => (e.currentTarget.style.color = muted)}>
          <Linkedin size={16} />
        </a>
        <a href="mailto:faridwidyatama12@gmail.com" aria-label="Email"
          style={{ color: muted, transition: 'color 0.15s' }}
          onMouseEnter={e => (e.currentTarget.style.color = fg)}
          onMouseLeave={e => (e.currentTarget.style.color = muted)}>
          <Mail size={16} />
        </a>
        <button onClick={toggle} className="theme-toggle mono" aria-label="Toggle theme"
          style={{ marginLeft: 'auto' }}>
          {dark ? 'light' : 'dark'}
        </button>
      </div>
    </aside>
  )
}
