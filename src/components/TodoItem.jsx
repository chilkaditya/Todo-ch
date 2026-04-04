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

      <button className={`check-btn ${theme}-button`} onClick={toggleComplete}>
        <i className="fas fa-check"></i>
      </button>

      <button className={`delete-btn ${theme}-button`} onClick={deleteTodo}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  )
}