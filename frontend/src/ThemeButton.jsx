import React from 'react'
import {useTheme} from './themeContext.jsx'
const ThemeButton = () => {
const {theme, toggleTheme} = useTheme()
  return (
    <button onClick={toggleTheme} className={`p-5 bg-${theme === 'light' ? 'gray-800' : 'white'}  text-red cursor-pointer hover:bg-gray-400`}> Switch to {theme == 'light' ? 'Dark' : 'Light'} Mode</button>
  )
}

export default ThemeButton