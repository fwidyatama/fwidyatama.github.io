import { EXPERIENCE, NOTES_PREVIEW } from '../data/content'

const muted = 'hsl(var(--muted-foreground))'
const fg = 'hsl(var(--foreground))'

function SectionHeader({ title }: { title: string }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.25rem' }}>
      <span className="section-label" style={{ marginBottom: 0 }}>{title}</span>
      <a href="#" style={{ fontSize: '0.72rem', color: muted, textDecoration: 'none' }}
        onMouseEnter={e => (e.currentTarget.style.textDecoration = 'underline')}
        onMouseLeave={e => (e.currentTarget.style.textDecoration = 'none')}
      >
        View all →
      </a>
    </div>
  )
}

export default function MainContent() {
  return (
    <div style={{ maxWidth: '680px' }}>
      <h1 style={{ fontSize: '1.6rem', fontWeight: 500, color: fg, margin: 0 }}>
        Hi, I'm Farid.
      </h1>
      <p style={{ fontSize: '0.82rem', color: muted, maxWidth: '520px', marginTop: '0.5rem', lineHeight: 1.6 }}>
        I build backend systems that are reliable and make sense.
        Currently exploring AI engineering, observability, and infra.
      </p>

      <hr className="divider" />

      {/* Recent Notes */}
      <SectionHeader title="Recent Notes" />
      <div>
        {NOTES_PREVIEW.map((note) => (
          <div key={note.title} className="table-row" style={{ gridTemplateColumns: '110px 1fr auto' }}>
            <span style={{ color: muted, whiteSpace: 'nowrap' }}>{note.date}</span>
            <span style={{ color: fg }}>{note.title}</span>
            <span style={{ color: muted }}>{note.tags.map(t => `#${t}`).join(' ')}</span>
          </div>
        ))}
      </div>

      <hr className="divider" />

      {/* Experience */}
      <SectionHeader title="Experience" />
      <div id="experience">
        {EXPERIENCE.map((exp) => (
          <div key={`${exp.company}-${exp.yearRange}`} className="table-row" style={{ gridTemplateColumns: '80px 120px 1fr' }}>
            <span style={{ color: muted }}>{exp.yearRange}</span>
            <span style={{ fontWeight: 600, color: fg }}>{exp.company}</span>
            <span style={{ color: muted }}>{exp.role} — {exp.description}</span>
          </div>
        ))}
      </div>

      <hr className="divider" />

      <footer style={{ marginTop: '0.5rem' }}>
        <p style={{ fontSize: '0.65rem', color: muted }}>© 2026 Farid Widyatama</p>
      </footer>
    </div>
  )
}
