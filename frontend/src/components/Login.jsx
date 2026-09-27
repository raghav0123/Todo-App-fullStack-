import React, { useState, useReducer } from 'react'
import Navbar from './Navbar'
import { useUser } from '../context/UserContext'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate()
    const { user, setUser, login, register, logout } = useUser()
    const userReducer = (state, action) => {
        switch (action.type) {

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
            console.log('before login', user)
            await login(userForm)
            console.log(user)
            alert('User Login Succesfully!')
            navigate('/home')
        } catch (error) {
            if (error.response.data.message) {
                alert('User does not  Exists!')
            }
           
        }
        

    }
    console.log(user)
    return (
        <div>
            <Navbar />

            <div className="flex justify-center items-center mt-20 text-white" >
                <div className="w-96 p-6 border rounded-lg shadow-md h-80  bg-gray-800">
                    <h2 className="text-2xl font-bold mb-6 text-center">
                        Login
                    </h2>

                    <form className="flex flex-col gap-4"
                        onSubmit={handleSubmit}
                    >
                        <input
                            type="email"
                            placeholder="Email"
                            className="border p-2 rounded  bg-white text-black"
                            onChange={(e) => (dispatchUser(
                                {
                                    type: 'email',
                                    email: e.target.value
                                }
                            ))}
                        />

                        <input
                            type="password"
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
                            className="bg-blue-500 text-white p-2 rounded cursor-pointer hover:bg-blue-600 cursor:pointer"
                        >
                            Login
                        </button>
                    </form>

                    <p className="text-center mt-4 text-gray-600">
                        New user?{' '}
                        <a href="/signup" className="text-blue-500 hover:underline">
                            Register
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login