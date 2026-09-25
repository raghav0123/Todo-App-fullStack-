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
import CustomLoader from './CustomLoader.jsx'

function MainContent() {
  const { theme, toggleTheme } = useTheme()
  const { todos, setTodos, loading, setLoading } = useTodo()
  // console.log('This is the ',theme)
  return (
    <>
      <div className={`flex flex-col w-full h-screen ${theme === 'light' ? 'bg-white text-white' : 'bg-gray-800 '} `}>
        <ThemeButton />
        <div className='flex w-full  mt-5 p-5 justify-center'>
          <SearchBar />
        </div>
        
        <div className={`cont  mt-10  flex flex-col gap-4 justify-start items-center `} >
          
          {loading ? (
            <CustomLoader />
          ) : (todos?.length > 0 ? (
            todos.map((todo, index) => (
              <TodoCard
                className=""
                task={todo.name || todo.task}
                key={todo._id || todo.id || `todo-${index}`}
                id={todo._id || todo.id}
              />
            ))
          ) : (
            <div className="flex flex-col justify-center items-center gap-2">
              <img src={heroImg} alt="Hero" className="w-40 h-40" />
              <p className="text-gray-400 text-sm">No tasks yet. Add a new task to get started!</p>
            </div>
          ))
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
