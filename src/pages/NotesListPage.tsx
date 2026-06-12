import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import LeftSidebar from '../components/LeftSidebar'

interface Note {
  id: string
  title: string
  tags: string[]
  created_at: string
}

function fmt(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric',
  })
}

function groupByYear(notes: Note[]) {
  const map = new Map<string, Note[]>()
  for (const note of notes) {
    const year = new Date(note.created_at).getFullYear().toString()
    if (!map.has(year)) map.set(year, [])
    map.get(year)!.push(note)
  }
  return Array.from(map.entries()).sort((a, b) => Number(b[0]) - Number(a[0]))
}

const muted = 'hsl(var(--muted-foreground))'
const fg = 'hsl(var(--foreground))'

export default function NotesListPage() {
  const [notes, setNotes] = useState<Note[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase
      .from('notes')
      .select('id, title, tags, created_at')
      .order('created_at', { ascending: false })
      .then(({ data }) => {
        setNotes(data || [])
        setLoading(false)
      })
  }, [])

  const grouped = groupByYear(notes)

  return (
    <div className="layout-shell">
      <LeftSidebar />
      <main className="main-scroll">
        <div style={{ maxWidth: '860px' }}>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 500, color: fg, margin: '0 0 0.5rem 0' }}>
            Notes
          </h1>
          <p style={{ fontSize: '0.875rem', color: muted, marginBottom: '0' }}>
            Things I've learned, figured out, or thought worth writing down.
          </p>

          <hr className="divider" />

          {loading ? (
            <span className="mono" style={{ fontSize: '0.8rem', color: muted }}>—</span>
          ) : notes.length === 0 ? (
            <p style={{ fontSize: '0.875rem', color: muted }}>Nothing published yet.</p>
          ) : (
            grouped.map(([year, yearNotes]) => (
              <div key={year} style={{ marginBottom: '2rem' }}>
                <div className="mono" style={{ fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: muted, marginBottom: '0.5rem' }}>
                  {year}
                </div>
                <div>
                  {yearNotes.map(note => (
                    <Link key={note.id} to={`/notes/${note.id}`} style={{ textDecoration: 'none', display: 'block' }}>
                      <div
                        className="table-row"
                        style={{ gridTemplateColumns: '120px 1fr auto' }}
                      >
                        <span className="mono" style={{ color: muted, fontSize: '0.8rem', whiteSpace: 'nowrap' }}>
                          {fmt(note.created_at)}
                        </span>
                        <span style={{ color: fg }}>
                          {note.title || '—'}
                        </span>
                        <span className="mono" style={{ color: muted, fontSize: '0.78rem' }}>
                          {(note.tags || []).map(t => `#${t}`).join(' ')}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  )
}
