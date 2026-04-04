import React, { useState } from 'react'

export default function TodoForm({ setTodos }) {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!input.trim()) {
      alert('You must write something!')
      return
    }

    setTodos(prev => [
      ...prev,
      {
        id: Date.now(),
        text: input,
        completed: false,
        createdAt: new Date().toISOString(),
        completedAt: null
      }
    ])

    setInput('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a task"
      />
      <button type="submit">I Got This!</button>
    </form>
  )
}