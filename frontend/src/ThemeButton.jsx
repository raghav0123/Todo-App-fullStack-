import React from 'react'
import { useTheme } from './themeContext.jsx'

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
      className={`p-2 rounded-full cursor-pointer ${
        theme === 'light'
          ? 'bg-gray-800 text-white'
          : 'bg-white text-black'
      } hover:scale-110 transition`}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  )
}

export default ThemeButton