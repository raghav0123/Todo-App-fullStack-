import React, { useState } from 'react'
import { useTodo } from './TodoContext.jsx'
const SearchBar = () => {
    const { todos, handleTodo } = useTodo();
    const [inputTask, setInputTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputTask.trim() === '') {
            return;
        }
        const todoObject = {
            id: Date.now(),
            task: inputTask,
            isCompleted: false
        }

        //Handle submisson logic here
        handleTodo(todoObject)
    }
    return (
        <>
            <form onSubmit={handleSubmit} className="flex gap-2 w-200 cursor-pointer">
                <input
                    type="text"
                    placeholder="Add a new task..."
                    value={inputTask}
                    onChange={(e) => setInputTask(e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-800 placeholder-gray-400 bg-white"
                />
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-400 active:bg-blue-800 text-white font-medium px-4 py-2 rounded-lg transition-colors text-sm shadow-sm cursor-pointer "
                >
                    Add
                
                </button>
            </form>
        </>
    )
}

export default SearchBar