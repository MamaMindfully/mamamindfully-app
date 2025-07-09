// src/pages/Gratitude.jsx
import React, { useState, useEffect } from 'react'
import { db, auth } from '../firebase'
import {
  collection, query, where, orderBy,
  onSnapshot, addDoc, serverTimestamp
} from 'firebase/firestore'
import useApiStatus from '../hooks/useApiStatus'

export default function Gratitude() {
  const { loading, setLoading, error, setError } = useApiStatus()
  const [notes, setNotes] = useState([])
  const [text,  setText]  = useState('')
  const userId = auth.currentUser?.uid

  useEffect(() => {
    if (!userId) return
    setError('')
    setLoading(true)
    const q = query(
      collection(db, 'gratitude'),
      where('userId','==',userId),
      orderBy('createdAt','desc')
    )
    return onSnapshot(
      q,
      snap => {
        setNotes(snap.docs.map(d => ({ id: d.id, ...d.data() })))
        setLoading(false)
      },
      err => {
        setError(err.message)
        setLoading(false)
      }
    )
  }, [userId])

  const addNote = async () => {
    if (!text.trim()) return
    setError('')
    setLoading(true)
    try {
      await addDoc(collection(db, 'gratitude'), {
        userId,
        content: text,
        createdAt: serverTimestamp()
      })
      setText('')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-serif text-muted-rose mb-4">Gratitude Log</h1>
      <div className="flex space-x-2 mb-4">
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="What are you grateful for?"
          className="flex-1 p-2 border border-muted-rose rounded focus:outline-none focus:ring-2 focus:ring-muted-rose"
        />
        <button
          onClick={addNote}
          disabled={loading}
          className="px-4 py-2 bg-muted-rose text-cream-bg rounded hover:bg-opacity-90"
        >
          {loading ? 'Saving…' : 'Add'}
        </button>
      </div>
      {loading && <p className="text-sm">Loading…</p>}
      {error   && <p className="text-red-600">{error}</p>}
      <ul className="space-y-2 mt-4">
        {notes.map(n => (
          <li key={n.id} className="p-3 bg-white rounded shadow-sm">
            {n.content}
          </li>
        ))}
      </ul>
    </div>
  )
}
