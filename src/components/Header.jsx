import React from 'react'
import ThemeSelector from './ThemeSelector'

export default function Header({ theme, setTheme }) {
  return (
    <div id="header">
      <ThemeSelector setTheme={setTheme} />
      <h1 id="title">Just do it.</h1>
      <p>{new Date().toLocaleString()}</p>
    </div>
  )
}