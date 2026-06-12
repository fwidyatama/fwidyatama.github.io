import { CURRENTLY, TECH_STACK } from '../data/content'

export default function RightSidebar() {
  return (
    <aside className="sidebar-right">
      <span className="section-label">Currently</span>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {CURRENTLY.map((item) => (
          <li key={item} style={{ fontSize: '0.75rem', color: 'hsl(var(--foreground))', lineHeight: 1.8 }}>
            → {item}
          </li>
        ))}
      </ul>

      <hr className="divider" />

      <span className="section-label">Tech Stack</span>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {TECH_STACK.map((line) => (
          <li key={line} style={{ fontSize: '0.72rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.9 }}>
            {line}
          </li>
        ))}
      </ul>
    </aside>
  )
}
