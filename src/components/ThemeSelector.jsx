import React from 'react'

export default function ThemeSelector({ setTheme }) {
  return (
    <div className="flexrow-container">
      <div className="standard-theme theme-selector" onClick={() => setTheme('standard')} />
      <div className="light-theme theme-selector" onClick={() => setTheme('light')} />
      <div className="darker-theme theme-selector" onClick={() => setTheme('darker')} />
    </div>
  )
}