import { useContext, createContext, useState, useEffect } from 'react'
const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
const [todos, setTodos] = useState(() => {
        try {
            const saved = localStorage.getItem('todoList')
            if (saved) {
                return JSON.parse(saved)
            }
        }
        catch (err) {
            console.log('Can not fetch from localStorage', err)
        }

        return []
    })
    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(todos))
    }, [todos])

    const handleTodo = (newTodo) => {
        return setTodos((prev) => [...prev, newTodo])
    }
    return (
        <TodoContext.Provider value={{ todos, handleTodo, setTodos }}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodo = () => {
    return useContext(TodoContext)
}