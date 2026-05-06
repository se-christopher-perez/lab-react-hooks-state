import React, { useState } from 'react'

const DarkModeToggle = () => {
  // TODO: Implement dark mode toggle logic

  const [mode, setMode] = useState("Toggle Dark Mode")

  function handleMode() {

    if (mode === "Toggle Dark Mode") {

      setMode("Toggle Light Mode")

    } else {

      setMode("Toggle Dark Mode")

    }

  }

  return (
    <button onClick={handleMode}>{mode}</button>
  )
}

export default DarkModeToggle
