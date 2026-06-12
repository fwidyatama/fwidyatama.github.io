import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'

interface Note {
  id: string
  title: string
  content: string
  tags: string[]
  created_at: string
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'transparent',
  borderBottom: '1px solid hsl(var(--border))',
  color: 'hsl(var(--foreground))',
  fontSize: '0.875rem',
  padding: '0.5rem 0',
  outline: 'none',
  fontFamily: 'inherit',
  transition: 'border-color 0.15s',
}

export default function NotesPage() {
  const [session, setSession] = useState<any>(null)
  const [notes, setNotes] = useState<Note[]>([])
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tags, setTags] = useState('')
  const [loading, setLoading] = useState(false)
  const [authLoading, setAuthLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setAuthLoading(false)
    })
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
    return () => subscription.unsubscribe()
  }, [])

  useEffect(() => {
    if (session) fetchNotes()
  }, [session])

  const fetchNotes = async () => {
    const { data } = await supabase
      .from('notes')
      .select('*')
      .order('created_at', { ascending: false })
    if (data) setNotes(data)
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) alert(error.message)
    setLoading(false)
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    setNotes([])
  }

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!content.trim()) return
    setLoading(true)
    const parsedTags = tags
      .split(',')
      .map(t => t.trim().replace(/^#/, ''))
      .filter(Boolean)

    const { error } = await supabase.from('notes').insert([{
      title: title.trim(),
      content: content.trim(),
      tags: parsedTags,
      user_id: session?.user?.id,
    }])

    if (!error) {
      setTitle('')
      setContent('')
      setTags('')
      fetchNotes()
    } else {
      alert(error.message)
    }
    setLoading(false)
  }

  if (authLoading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'hsl(var(--background))' }}>
        <div style={{ width: 4, height: 4, background: 'hsl(var(--muted-foreground))', borderRadius: '50%', animation: 'pulse 1.5s infinite' }} />
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: 'hsl(var(--background))', color: 'hsl(var(--foreground))' }}>
      <AnimatePresence mode="wait">
        {!session ? (
          <motion.div key="login"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}
          >
            <form onSubmit={handleLogin} style={{ width: '100%', maxWidth: 280, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <input type="email" autoComplete="email" placeholder="—" value={email}
                onChange={e => setEmail(e.target.value)} style={inputStyle} />
              <input type="password" autoComplete="current-password" placeholder="—" value={password}
                onChange={e => setPassword(e.target.value)} style={inputStyle} />
              <button type="submit" disabled={loading}
                style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'monospace', fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))', paddingTop: '0.5rem', opacity: loading ? 0.3 : 1, transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'hsl(var(--foreground))')}
                onMouseLeave={e => (e.currentTarget.style.color = 'hsl(var(--muted-foreground))')}>
                {loading ? '...' : '→'}
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div key="notes"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ maxWidth: 680, margin: '0 auto', padding: '4rem 1.5rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3rem' }}>
              <div>
                <h1 style={{ fontWeight: 500, fontSize: '1.1rem', margin: 0 }}>notes</h1>
                <p className="mono" style={{ fontSize: '0.72rem', color: 'hsl(var(--muted-foreground))', margin: '0.2rem 0 0', textTransform: 'uppercase', letterSpacing: '0.08em' }}>private</p>
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                <Link to="/notes" className="mono" style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))', textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'hsl(var(--foreground))')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'hsl(var(--muted-foreground))')}>
                  public view
                </Link>
                <button onClick={handleSignOut}
                  className="mono"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))', transition: 'color 0.15s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'hsl(var(--foreground))')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'hsl(var(--muted-foreground))')}>
                  exit
                </button>
              </div>
            </div>

            {/* New note form */}
            <form onSubmit={handleAdd} style={{ border: '1px solid hsl(var(--border))', padding: '1rem', marginBottom: '2.5rem' }}>
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                style={{ ...inputStyle, fontSize: '0.95rem', fontWeight: 500, marginBottom: '0.75rem', borderBottom: 'none' }}
              />
              <textarea
                placeholder="What did you learn today?"
                value={content}
                onChange={e => setContent(e.target.value)}
                rows={4}
                style={{ ...inputStyle, resize: 'none', borderBottom: 'none', lineHeight: 1.7, display: 'block', marginBottom: '0.5rem' }}
              />
              <input
                type="text"
                placeholder="tags, comma separated"
                value={tags}
                onChange={e => setTags(e.target.value)}
                style={{ ...inputStyle, fontSize: '0.78rem', fontFamily: 'monospace', color: 'hsl(var(--muted-foreground))', marginBottom: '0.75rem' }}
              />
              <div style={{ borderTop: '1px solid hsl(var(--border))', paddingTop: '0.75rem', display: 'flex', justifyContent: 'flex-end' }}>
                <button type="submit" disabled={loading || !content.trim()}
                  className="mono"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))', opacity: (loading || !content.trim()) ? 0.3 : 1, transition: 'color 0.15s' }}
                  onMouseEnter={e => { if (!loading && content.trim()) e.currentTarget.style.color = 'hsl(var(--foreground))' }}
                  onMouseLeave={e => (e.currentTarget.style.color = 'hsl(var(--muted-foreground))')}>
                  {loading ? '...' : 'post →'}
                </button>
              </div>
            </form>

            {/* Notes list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
              {notes.length === 0 && (
                <p className="mono" style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))', textAlign: 'center', padding: '2rem 0' }}>
                  nothing yet.
                </p>
              )}
              {notes.map((note, i) => (
                <motion.div key={note.id}
                  initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  style={{ border: '1px solid hsl(var(--border))', padding: '1rem', transition: 'border-color 0.15s' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'hsl(var(--muted-foreground))')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'hsl(var(--border))')}
                >
                  {note.title && (
                    <p style={{ fontWeight: 500, fontSize: '0.9rem', margin: '0 0 0.4rem' }}>{note.title}</p>
                  )}
                  <p style={{ fontSize: '0.875rem', lineHeight: 1.65, margin: '0 0 0.75rem', whiteSpace: 'pre-wrap', color: 'hsl(var(--foreground))' }}>
                    {note.content}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <time className="mono" style={{ fontSize: '0.72rem', color: 'hsl(var(--muted-foreground))' }}>
                      {new Date(note.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </time>
                    {note.tags?.length > 0 && (
                      <span className="mono" style={{ fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))' }}>
                        {note.tags.map(t => `#${t}`).join(' ')}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
