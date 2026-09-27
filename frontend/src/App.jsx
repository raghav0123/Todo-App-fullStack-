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
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {Login, Register} from './components/index.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import { useUser } from './context/UserContext.jsx'
function MainContent() {
  const { theme, toggleTheme } = useTheme()
  const { todos, setTodos, loading, setLoading } = useTodo()
    
  // console.log('This is the ',theme)
  return (
    <>
    <div className=  {`h-screen ${theme === 'light' ? 'bg-white text-white' : 'bg-gray-800 '}`}>
    <Navbar></Navbar>
      <div className={`flex flex-col w-full h-100 ${theme === 'light' ? 'bg-white text-white' : 'bg-gray-800 '} `}>
        
        <div className='flex w-full  mt-5 p-5 justify-center text-8xl text-black'>
          Welcome to Todo App
        </div>

        {/* <div className={`cont  mt-10  flex flex-col gap-4 justify-start items-center `} >

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

        </div> */}


      </div>
      </div>
    </>
  )
}

function App() {
const { user, setUser, login, register, logout } = useUser()
console.log(user)
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {Object.keys(user).length == 0 ? <MainContent />: <Home /> 
      
        } /> 
      <Route path = "/home" element = {<Home />} /> 
      <Route path = "/login" element = {<Login />} /> 
      <Route path = "/signup" element = {<Register />} /> 

    </ Routes>
     </BrowserRouter>
          
  
    
  )
}

export default App
