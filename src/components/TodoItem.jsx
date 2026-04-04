import React from 'react'

export default function TodoItem({ todo, todos, setTodos, theme }) {

  const deleteTodo = () => {
    setTodos(todos.filter(t => t.id !== todo.id))
  }

  const toggleComplete = () => {
    setTodos(
      todos.map(t =>
        t.id === todo.id
          ? {
              ...t,
              completed: !t.completed,
              completedAt: !t.completed ? new Date().toISOString() : null
            }
          : t
      )
    )
  }

  const formatDate = (date) => {
    return new Date(date).toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short'
    })
  }

  return (
    <div className={`todo ${theme}-todo ${todo.completed ? 'completed' : ''}`}>

      <div className="todo-content">
        <li className="todo-item">{todo.text}</li>

        <div className="todo-dates">
          <small>📅 {formatDate(todo.createdAt)}</small>

          {todo.completed && (
            <small>✅ {formatDate(todo.completedAt)}</small>
          )}
        </div>
      </div>

      <button className="check-btn" onClick={toggleComplete}>✔</button>
      <button className="delete-btn" onClick={deleteTodo}>🗑</button>

    </div>
  )
}