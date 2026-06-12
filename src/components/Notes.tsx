import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { supabase } from '../lib/supabase'

interface Note {
    id: string
    content: string
    created_at: string
}

export default function NotesPage() {
    const [session, setSession] = useState<any>(null)
    const [notes, setNotes] = useState<Note[]>([])
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [newNote, setNewNote] = useState('')
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
        if (session) {
            fetchNotes()
        }
    }, [session])

    const fetchNotes = async () => {
        const { data, error } = await supabase
            .from('notes')
            .select('*')
            .order('created_at', { ascending: false })

        if (!error) setNotes(data || [])
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

    const handleAddNote = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!newNote.trim()) return
        setLoading(true)
        const { error } = await supabase
            .from('notes')
            .insert([{ content: newNote, user_id: session?.user?.id }])

        if (!error) {
            setNewNote('')
            fetchNotes()
        } else {
            alert(error.message)
        }
        setLoading(false)
    }

    if (authLoading) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="w-1 h-1 bg-muted-foreground animate-pulse rounded-full" />
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-background text-foreground">
            <AnimatePresence mode="wait">
                {!session ? (
                    // Minimal, unmarked login — gives no indication of what this page is
                    <motion.div
                        key="login"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="min-h-screen flex items-center justify-center px-4"
                    >
                        <form onSubmit={handleLogin} className="w-full max-w-xs space-y-3">
                            <input
                                type="email"
                                autoComplete="email"
                                placeholder="—"
                                value={email}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                className="w-full bg-transparent border-b border-border text-foreground text-sm py-2 outline-none placeholder:text-muted-foreground/30 focus:border-foreground transition-colors"
                            />
                            <input
                                type="password"
                                autoComplete="current-password"
                                placeholder="—"
                                value={password}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                className="w-full bg-transparent border-b border-border text-foreground text-sm py-2 outline-none placeholder:text-muted-foreground/30 focus:border-foreground transition-colors"
                            />
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full text-xs text-muted-foreground hover:text-foreground transition-colors pt-2 disabled:opacity-30 text-left font-mono uppercase tracking-widest"
                            >
                                {loading ? '...' : '→'}
                            </button>
                        </form>
                    </motion.div>
                ) : (
                    // Full notes interface for authenticated user
                    <motion.div
                        key="notes"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="max-w-2xl mx-auto px-4 py-16"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between mb-12">
                            <div className="flex items-center gap-3">
                                <span className="signature-dot" />
                                <div>
                                    <h1 className="font-black text-2xl tracking-tight">Today I Learned</h1>
                                    <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Private Notes</p>
                                </div>
                            </div>
                            <button
                                onClick={handleSignOut}
                                className="font-mono text-xs text-muted-foreground hover:text-foreground uppercase tracking-widest transition-colors"
                            >
                                Exit
                            </button>
                        </div>

                        {/* New note form */}
                        <form onSubmit={handleAddNote} className="mb-10 border border-border p-4">
                            <textarea
                                placeholder="What did you learn today?"
                                value={newNote}
                                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setNewNote(e.target.value)}
                                rows={3}
                                className="w-full bg-transparent text-foreground text-sm outline-none resize-none placeholder:text-muted-foreground/40 mb-3"
                            />
                            <div className="border-t border-border pt-3 flex justify-end">
                                <button
                                    type="submit"
                                    disabled={loading || !newNote.trim()}
                                    className="font-mono text-xs text-muted-foreground hover:text-foreground uppercase tracking-widest transition-colors disabled:opacity-30"
                                >
                                    {loading ? '...' : 'Post →'}
                                </button>
                            </div>
                        </form>

                        {/* Notes feed */}
                        <div className="space-y-px">
                            {notes.length === 0 && (
                                <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider py-8 text-center">
                                    Nothing yet.
                                </p>
                            )}
                            {notes.map((note, i) => (
                                <motion.div
                                    key={note.id}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="border border-border p-4 hover:border-foreground/30 transition-colors"
                                >
                                    <p className="text-sm leading-relaxed mb-3 whitespace-pre-wrap">{note.content}</p>
                                    <time className="font-mono text-xs text-muted-foreground">
                                        {new Date(note.created_at).toLocaleDateString(undefined, {
                                            year: 'numeric',
                                            month: 'short',
                                            day: 'numeric',
                                        })}
                                    </time>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
