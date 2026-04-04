import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([])
  const [theme, setTheme] = useState('standard')

  // Load from localStorage
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || []
    const savedTheme = localStorage.getItem('savedTheme') || 'standard'

    setTodos(savedTodos)
    setTheme(savedTheme)
    document.body.className = savedTheme
  }, [])

  // Save todos
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  // Save theme
  useEffect(() => {
    localStorage.setItem('savedTheme', theme)
    document.body.className = theme
  }, [theme])

  return (
    <div>
      <Header theme={theme} setTheme={setTheme} />
      <TodoForm setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} theme={theme} />
    </div>
  )
}

export default App