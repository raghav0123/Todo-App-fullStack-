import { useContext, createContext, useState, useEffect } from 'react'
const TodoContext = createContext()
import axios from 'axios';
export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)
const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));
    useEffect(() => {
        const fetchTodos = async () => {
            try {
                await delay(1000);
                const res = await axios.get('http://localhost:3000/todos')
                setTodos(res.data.data)
             
            } catch (error) {
                console.log("Can't get todos", error)
            }
            finally {
                setLoading(false)
            }
        }
        fetchTodos()
    }, [])
    // useEffect(() => {
    //     localStorage.setItem('todoList', JSON.stringify(todos))
    // }, [todos])

    const handlePost = async (newTodo) => {
        await delay(1000)
        try {
            const res = await axios.post('http://localhost:3000/todos',newTodo)
            setTodos((prev) =>[...prev, res.data.data])
        } catch (error) {
            console.log("Can't create todos", error.response)
        }
        
    }
    const handleDelete = async (id) => {
        try {
            console.log(todos)
            await axios.delete(`http://localhost:3000/todos/${id}`)
            
            setTodos((prev) => (prev.filter((item) => (item._id != id )) ))

        } catch (error) {
            console.log("FAILED TO DELTE TODO", error)
        }
    }
    const handleUpdate = async (id, data) => {
        try {
            console.log(todos)
            await axios.put(`http://localhost:3000/todos/${id}`, data)
            
            setTodos((prev) => (prev.map((item) => (item._id == id ? {...item,...data} : item)) ))

        } catch (error) {
            console.log("FAILED TO UPDATE TODO", error)
        }
    }
    return (
        <TodoContext.Provider value={{ todos, handlePost, setTodos, handleDelete ,loading, setLoading, handleUpdate}}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodo = () => {
    return useContext(TodoContext)
}