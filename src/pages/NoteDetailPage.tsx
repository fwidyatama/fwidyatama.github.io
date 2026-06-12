import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import LeftSidebar from '../components/LeftSidebar'

interface Note {
  id: string
  title: string
  content: string
  tags: string[]
  created_at: string
}

const muted = 'hsl(var(--muted-foreground))'
const fg = 'hsl(var(--foreground))'

export default function NoteDetailPage() {
  const { id } = useParams<{ id: string }>()
  const [note, setNote] = useState<Note | null>(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    if (!id) return
    supabase
      .from('notes')
      .select('*')
      .eq('id', id)
      .single()
      .then(({ data, error }) => {
        if (error || !data) setNotFound(true)
        else setNote(data)
        setLoading(false)
      })
  }, [id])

  return (
    <div className="layout-shell">
      <LeftSidebar />
      <main className="main-scroll">
        <div style={{ maxWidth: '680px' }}>
          <Link
            to="/notes"
            className="mono"
            style={{ fontSize: '0.8rem', color: muted, textDecoration: 'none', display: 'inline-block', marginBottom: '2.5rem', transition: 'color 0.15s' }}
            onMouseEnter={e => (e.currentTarget.style.color = fg)}
            onMouseLeave={e => (e.currentTarget.style.color = muted)}
          >
            ← notes
          </Link>

          {loading && (
            <p className="mono" style={{ color: muted, fontSize: '0.8rem' }}>—</p>
          )}

          {!loading && notFound && (
            <p style={{ color: muted }}>Note not found.</p>
          )}

          {!loading && note && (
            <>
              <div className="mono" style={{ fontSize: '0.78rem', color: muted, marginBottom: '0.6rem' }}>
                {new Date(note.created_at).toLocaleDateString('en-US', {
                  year: 'numeric', month: 'long', day: 'numeric',
                })}
              </div>

              <h1 style={{ fontSize: '1.75rem', fontWeight: 500, color: fg, margin: '0 0 0.75rem', lineHeight: 1.25, letterSpacing: '-0.01em' }}>
                {note.title || '(untitled)'}
              </h1>

              {note.tags?.length > 0 && (
                <div className="mono" style={{ fontSize: '0.78rem', color: muted, marginBottom: '0' }}>
                  {note.tags.map(t => `#${t}`).join(' ')}
                </div>
              )}

              <hr className="divider" />

              <div style={{
                fontSize: '0.975rem',
                lineHeight: 1.85,
                color: fg,
                whiteSpace: 'pre-wrap',
                letterSpacing: '0.005em',
              }}>
                {note.content}
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  )
}
