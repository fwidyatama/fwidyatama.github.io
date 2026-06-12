import { Github, Linkedin, Mail, MapPin, Clock } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'home', href: '#', active: true },
  { label: 'about', href: '#about' },
  { label: 'experience', href: '#experience' },
  { label: 'projects', href: '#projects' },
  { label: 'writing', href: '#' },
  { label: 'til', href: '#' },
  { label: 'uses', href: '#' },
  { label: 'resume', href: '#' },
]

export default function LeftSidebar() {
  return (
    <aside className="sidebar-left">
      <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'hsl(var(--foreground))' }}>
        fwidyatama
      </div>

      <nav style={{ marginTop: '1.5rem' }}>
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
        fontSize: '0.75rem',
        color: 'hsl(var(--muted-foreground))',
        marginTop: '1.5rem',
        lineHeight: 1.5,
      }}>
        Backend engineer building systems and learning in public.
      </p>

      <div style={{ marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.72rem', color: 'hsl(var(--muted-foreground))' }}>
          <MapPin size={12} />
          Jakarta, Indonesia
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.72rem', color: 'hsl(var(--muted-foreground))' }}>
          <Clock size={12} />
          UTC+7
        </div>
      </div>

      <div style={{ marginTop: 'auto', paddingTop: '1.5rem', display: 'flex', gap: '0.75rem' }}>
        <a
          href="https://github.com/fwidyatama"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          style={{ color: 'hsl(var(--muted-foreground))', transition: 'color 0.15s' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'hsl(var(--foreground))')}
          onMouseLeave={e => (e.currentTarget.style.color = 'hsl(var(--muted-foreground))')}
        >
          <Github size={15} />
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
          <Linkedin size={15} />
        </a>
        <a
          href="mailto:faridwidyatama12@gmail.com"
          aria-label="Email"
          style={{ color: 'hsl(var(--muted-foreground))', transition: 'color 0.15s' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'hsl(var(--foreground))')}
          onMouseLeave={e => (e.currentTarget.style.color = 'hsl(var(--muted-foreground))')}
        >
          <Mail size={15} />
        </a>
      </div>
    </aside>
  )
}
