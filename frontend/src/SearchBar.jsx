import React, { useState } from 'react';
import { useTodo } from './TodoContext.jsx';

const SearchBar = () => {
    const { handlePost } = useTodo();
    const [inputTask, setInputTask] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (inputTask.trim() === '' || isSubmitting) {
            console.log('no task')
            return;
        }

        const todoObject = {
            name: inputTask,
            description:'default',
            completed: false
        };

        try {
            setIsSubmitting(true);
            await handlePost(todoObject);
            setInputTask(''); // Clear input on successful post
        } catch (error) {
            console.error("Submission failed:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-xl">
            <input
                type="text"
                placeholder="Add a new task..."
                value={inputTask}
                disabled={isSubmitting}
                onChange={(e) => setInputTask(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-800 placeholder-gray-400 bg-white disabled:opacity-50"
            />
            <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg transition-colors text-sm shadow-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
                {isSubmitting ? (
                    <>
                        {/* Mini Inline Spinner */}
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Adding...</span>
                    </>
                ) : (
                    'Add'
                )}
            </button>
        </form>
    );
};

export default SearchBar;