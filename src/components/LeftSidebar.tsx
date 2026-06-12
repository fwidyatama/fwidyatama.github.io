import { useEffect, useState } from 'react'
import { Github, Linkedin, Mail, MapPin, Clock, Sun, Moon } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'home', href: '#', active: true },
  { label: 'about', href: '#about' },
  { label: 'experience', href: '#experience' },
  { label: 'writing', href: '#' },
  { label: 'til', href: '#' },
  { label: 'uses', href: '#' },
  { label: 'resume', href: '#' },
]

function useTheme() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false
    return localStorage.getItem('theme') === 'dark'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return { dark, toggle: () => setDark(d => !d) }
}

export default function LeftSidebar() {
  const { dark, toggle } = useTheme()

  return (
    <aside className="sidebar-left">
      <div style={{ fontWeight: 700, fontSize: '1rem', color: 'hsl(var(--foreground))' }}>
        fwidyatama
      </div>

      <nav style={{ marginTop: '1.75rem' }}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`nav-item${item.active ? ' active' : ''}`}
              >
                /{item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <p style={{
        fontSize: '0.8rem',
        color: 'hsl(var(--muted-foreground))',
        marginTop: '1.75rem',
        lineHeight: 1.55,
      }}>
        Backend engineer building systems and learning in public.
      </p>

      <div style={{ marginTop: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.78rem', color: 'hsl(var(--muted-foreground))' }}>
          <MapPin size={13} />
          Bandung, Indonesia
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.78rem', color: 'hsl(var(--muted-foreground))' }}>
          <Clock size={13} />
          UTC+7
        </div>
      </div>

      <div style={{ marginTop: 'auto', paddingTop: '1.75rem', display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
        <a
          href="https://github.com/fwidyatama"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          style={{ color: 'hsl(var(--muted-foreground))', transition: 'color 0.15s' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'hsl(var(--foreground))')}
          onMouseLeave={e => (e.currentTarget.style.color = 'hsl(var(--muted-foreground))')}
        >
          <Github size={16} />
        </a>
        <a
          href="https://linkedin.com/in/faridwidyatama"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          style={{ color: 'hsl(var(--muted-foreground))', transition: 'color 0.15s' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'hsl(var(--foreground))')}
          onMouseLeave={e => (e.currentTarget.style.color = 'hsl(var(--muted-foreground))')}
        >
          <Linkedin size={16} />
        </a>
        <a
          href="mailto:faridwidyatama12@gmail.com"
          aria-label="Email"
          style={{ color: 'hsl(var(--muted-foreground))', transition: 'color 0.15s' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'hsl(var(--foreground))')}
          onMouseLeave={e => (e.currentTarget.style.color = 'hsl(var(--muted-foreground))')}
        >
          <Mail size={16} />
        </a>
        <button
          onClick={toggle}
          className="theme-toggle"
          aria-label="Toggle dark mode"
          style={{ marginLeft: 'auto' }}
        >
          {dark ? <Sun size={15} /> : <Moon size={15} />}
        </button>
      </div>
    </aside>
  )
}
