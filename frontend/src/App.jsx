import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { ThemeProvider } from './themeContext.jsx'
import ThemeButton from './ThemeButton'
import { useTheme } from './themeContext.jsx'
import SearchBar from './SearchBar.jsx'
import { TodoProvider } from './TodoContext.jsx'
import TodoCard from './TodoCard.jsx'
import { useTodo } from './TodoContext.jsx'

function MainContent() {
  const { theme, toggleTheme } = useTheme()
  const { todos, setTodos } = useTodo()
  // console.log('This is the ',theme)
  return (
    <>
      <div className={`flex flex-col w-full h-screen ${theme === 'light' ? 'bg-white text-white' : 'bg-gray-800 '} `}>
        <ThemeButton />
        <div className={`cont h-full m-10 flex flex-col gap-4 justify-center items-center `} >
          <SearchBar />
          {(todos.length > 0) ? todos.map((todo) => (
            <TodoCard className= '' task={todo.task} key={todo.id} id = {todo.id}></TodoCard>
          )):
          
          (
          <div className='flex flex-col justify-center items-center gap-2'>
            <img src={heroImg} alt="Hero" className='w-40 h-40' />
            <p className='text-gray-400 text-sm'>No tasks yet. Add a new task to get started!</p>
          </div>

          )
          }
        </div>


      </div>
    </>
  )
}

function App() {


  return (
    <>

      <TodoProvider>
        <ThemeProvider>
          <MainContent />
        </ThemeProvider>
      </TodoProvider>
    </>
  )
}

export default App
