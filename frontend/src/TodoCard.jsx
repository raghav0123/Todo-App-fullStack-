import React, { useEffect, useState} from 'react'
import { useTodo } from './TodoContext.jsx'
const TodoCard = ({task, id}) => {
    const [isChecked, setIsChecked] = useState('')
    const {todos, setTodos} = useTodo()
    const [isEditing, setIsEditing] = useState(false)
    const [ input, setInput] = useState(task)

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)

    }
    const handleEdit = () => {
        setIsEditing(!isEditing)
        // const newTodos = todos.map((item) => {
        //     item.id === id ? item.task = input : item.task = item.task
        // })
        if (isEditing){
        setTodos((prev) => (
            prev.map((item) => (
                item.id === id ? {...item, task: input} : item
            ))
        ))
    }
    }

    const handleDelete = () => {
        setTodos ((prev) => (
            prev.filter((item) => item.id !== id)
        ))
        
    }

    // }, [isChecked])
    return (
        <>
            <div className={`flex items-center justify-between gap-3 p-3 w-150 
                 border border-gray-200 rounded-lg shadow-sm hover:border-blue-300 transition-all
                 ${isChecked ? 'bg-green-300' : 'bg-white' }`}>
                {/*CHECKBOX*/}
                <input
                    type="checkbox"
                    checked = {isChecked}
                    onChange = {handleCheckboxChange}
                    className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer"
                />

                {!isEditing ? (<span className={`flex-1 text-sm text-gray-800 truncate select-none ${isChecked ? ' decoration-green-700 line-through' : 'bg-white' }`}>
                    {input}
                </span>) :
                (
                    <input
                    type="text"
                   
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-800 placeholder-gray-400 bg-white"
                />
                )
                }
                

               {/*Action*/}
                <div className="flex items-center gap-1 shrink-0">
                    <button 
                    disabled = {isChecked}
                    className={`px-2 py-1 text-xs font-medium text-gray-600 
                        ${!isChecked ? ' hover:text-blue-600 hover:bg-gray-100 ' : 'line-through' }
                        rounded transition-colors cursor-pointer`}
                    onClick={handleEdit}
                    >
                        {isEditing ? 'Save' : 'Edit'}
                    </button>
                    <button 
                    onClick={handleDelete}
                    className="px-2 py-1 text-xs font-medium text-red-500 hover:text-red-700 hover:bg-red-50 rounded transition-colors cursor-pointer">
                        Delete
                    </button>
                </div>
            </div>
        </>
    )
}

export default TodoCard