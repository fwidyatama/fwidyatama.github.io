import { EXPERIENCE, NOTES_PREVIEW } from '../data/content'

const muted = 'hsl(var(--muted-foreground))'
const fg = 'hsl(var(--foreground))'

function SectionHeader({ title }: { title: string }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.25rem' }}>
      <span className="section-label" style={{ marginBottom: 0 }}>{title}</span>
      <a href="#" style={{ fontSize: '0.75rem', color: muted, textDecoration: 'none' }}
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
    <div style={{ maxWidth: '860px' }}>
      <h1 style={{ fontSize: '1.8rem', fontWeight: 500, color: fg, margin: 0 }}>
        Hi, I'm Farid.
      </h1>
      <p style={{ fontSize: '0.88rem', color: muted, maxWidth: '580px', marginTop: '0.6rem', lineHeight: 1.65 }}>
        Backend engineer with 6 years of experience across cybersecurity, fintech, and media.
        Strong in Go-based microservices, distributed systems, and integrating AI/LLMs and blockchain.
      </p>

      <hr className="divider" />

      {/* Recent Notes */}
      <SectionHeader title="Recent Notes" />
      <div>
        {NOTES_PREVIEW.map((note) => (
          <div key={note.title} className="table-row" style={{ gridTemplateColumns: '120px 1fr auto' }}>
            <span className="mono" style={{ color: muted, whiteSpace: 'nowrap', fontSize: '0.8rem' }}>{note.date}</span>
            <span style={{ color: fg }}>{note.title}</span>
            <span className="mono" style={{ color: muted, fontSize: '0.8rem' }}>{note.tags.map(t => `#${t}`).join(' ')}</span>
          </div>
        ))}
      </div>

      <hr className="divider" />

      {/* Experience */}
      <SectionHeader title="Experience" />
      <div id="experience">
        {EXPERIENCE.map((exp) => (
          <div key={`${exp.company}-${exp.yearRange}`} className="table-row" style={{ gridTemplateColumns: '90px 130px 1fr' }}>
            <span className="mono" style={{ color: muted, whiteSpace: 'nowrap', fontSize: '0.8rem' }}>{exp.yearRange}</span>
            <span style={{ fontWeight: 600, color: fg }}>{exp.company}</span>
            <span style={{ color: muted }}>{exp.role} — {exp.description}</span>
          </div>
        ))}
      </div>

      <hr className="divider" />

      <footer style={{ marginTop: '0.5rem' }}>
        <p style={{ fontSize: '0.7rem', color: muted }}>© 2026 Farid Widyatama</p>
      </footer>
    </div>
  )
}
