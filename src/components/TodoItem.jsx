import React from 'react'

export default function TodoItem({ todo, todos, setTodos, theme }) {

  const deleteTodo = () => {
    setTodos(todos.filter(t => t.id !== todo.id))
  }

  const toggleComplete = () => {
    setTodos(
      todos.map(t =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      )
    )
  }

  return (
    <div className={`todo ${theme}-todo ${todo.completed ? 'completed' : ''}`}>
      <li className="todo-item">{todo.text}</li>

      <button className="check-btn" onClick={toggleComplete}>
        ✔
      </button>

      <button className="delete-btn" onClick={deleteTodo}>
        🗑
      </button>
    </div>
  )
}