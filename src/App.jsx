import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './styles/main.css'

function App() {
  const [todos, setTodos] = useState([])
  const [theme, setTheme] = useState('standard')

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || []
    const savedTheme = localStorage.getItem('savedTheme') || 'standard'

    setTodos(savedTodos)
    setTheme(savedTheme)
    document.body.className = savedTheme
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  useEffect(() => {
    localStorage.setItem('savedTheme', theme)
    document.body.className = theme
  }, [theme])

  return (
    <div>
      <Header theme={theme} setTheme={setTheme} />

      <TodoForm setTodos={setTodos} />

      <div className="todo-box">
        <TodoList
          todos={todos}
          setTodos={setTodos}
          theme={theme}
        />
      </div>
    </div>
  )
}

export default App