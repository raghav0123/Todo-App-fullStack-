import React from 'react'
import Navbar from './Navbar.jsx'
import { useTheme } from '../themeContext.jsx'
import SearchBar from '../SearchBar.jsx'
import TodoCard from '../TodoCard.jsx'
import { useTodo } from '../TodoContext.jsx'
import CustomLoader from '../CustomLoader.jsx'
import heroImg from '../assets/hero.png'

const Home = () => {
  const { theme } = useTheme()
  const { todos, loading } = useTodo()

  return (
    <div
      className={`min-h-screen ${
        theme === 'light'
          ? 'bg-white text-black'
          : 'bg-gray-800 text-white'
      }`}
    >
      <Navbar />

      <div className="flex flex-col w-full">
        <div className="flex w-full mt-5 p-5 justify-center">
          <SearchBar />
        </div>

        <div className="mt-10 flex flex-col gap-4 justify-start items-center">
          {loading ? (
            <CustomLoader />
          ) : todos?.length > 0 ? (
            todos.map((todo, index) => (
              <TodoCard
                key={todo._id || todo.id || `todo-${index}`}
                task={todo.name || todo.task}
                id={todo._id || todo.id}
              />
            ))
          ) : (
            <div className="flex flex-col justify-center items-center gap-2">
              <img
                src={heroImg}
                alt="Hero"
                className="w-40 h-40"
              />

              <p className="text-gray-400 text-sm">
                No tasks yet. Add a new task to get started!
              </p>
            </div>
          )}
        </div>
      </div>

    </div>
  )
}

export default Home