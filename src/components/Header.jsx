import React from 'react'

export default function Header({ setTheme }) {
  return (
    <div id="header">

      {/* Theme selectors */}
      <div className="theme-container">
        <div className="standard-theme theme-selector" onClick={() => setTheme('standard')} />
        <div className="light-theme theme-selector" onClick={() => setTheme('light')} />
        <div className="darker-theme theme-selector" onClick={() => setTheme('darker')} />
      </div>

      {/* Animated Title */}
      <h1 id="title">
        Just do it.<span className="cursor"></span>
      </h1>

      <p>{new Date().toLocaleString()}</p>

    </div>
  )
}