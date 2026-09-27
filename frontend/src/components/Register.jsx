import React, { useState, useReducer } from 'react'
import Navbar from './Navbar'
import { useUser } from '../context/UserContext'
const Register = () => {
    const { user, setUser, login, register, logout } = useUser()
    const userReducer = (state, action) => {
        switch (action.type) {
            case 'name':
                return { ...state, name: action.name }
            case 'email':
                return { ...state, email: action.email }
            case 'password':
                return { ...state, password: action.password }
        }
    }
    const [userForm, dispatchUser] = useReducer(userReducer, {})



    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            console.log('before register', user)
            await register(userForm)
            console.log(user)
            alert('User Registered Succesfully!')
        } catch (error) {
            if(error.response.data.message){
            alert('Email already Exists!')
            }
            console.log(error.response)
            
        }

    }
    return (
        <div>
            <Navbar />

            <div className="flex justify-center items-center mt-20 text-white">
                <div className="w-96 p-6 border rounded-lg shadow-md h-auto bg-gray-800">
                    <h2 className="text-2xl font-bold mb-6 text-center">
                        Register
                    </h2>

                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-4">
                        <input
                            type="text"
                            required
                            placeholder="Name"
                            className="border p-2 rounded bg-white text-black"
                            onChange={(e) => (dispatchUser(
                                {
                                    type: 'name',
                                    name: e.target.value
                                }
                            ))}
                        />

                        <input
                            type="email"
                            required
                            placeholder="Email"
                            className="border p-2 rounded bg-white text-black"
                            onChange={(e) => (dispatchUser(
                                {
                                    type: 'email',
                                    email: e.target.value
                                }
                            ))}

                        />

                        <input
                            type="password"
                            required
                            minLength={6}
                            placeholder="Password"
                            className="border p-2 rounded bg-white text-black"
                            onChange={(e) => (dispatchUser(
                                {
                                    type: 'password',
                                    password: e.target.value
                                }
                            ))}
                        />

                        <button
                            type="submit"
                            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 cursor-pointer"
                        >
                            Register
                        </button>
                    </form>

                    <p className="text-center mt-4 text-gray-600">
                        Already have an account?{' '}
                        <a href="/login" className="text-blue-500 hover:underline">
                            Login
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Register