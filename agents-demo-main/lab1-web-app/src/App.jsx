import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ fontFamily: 'system-ui', maxWidth: 600, margin: '4rem auto', padding: '0 1rem' }}>
      <h1>🚀 Lab 1 — Your App Starts Here</h1>
      <p style={{ fontSize: '1.1rem', color: '#555' }}>
        This is a minimal React app. Ask Copilot to transform it into something useful!
      </p>
      <button
        onClick={() => setCount(c => c + 1)}
        style={{ fontSize: '1rem', padding: '0.5rem 1.5rem', cursor: 'pointer' }}
      >
        Clicked {count} times
      </button>
      <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#999' }}>
        💡 Try: "Turn this into a todo app with a modern UI"
      </p>
    </div>
  )
}
