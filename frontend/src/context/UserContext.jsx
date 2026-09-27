import { Children } from 'react';
import { useContext, createContext, useState, useEffect } from 'react'
import axios from 'axios'
const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});


    const register = async (data) => {
        try {
            console.log(data)
            const res = await axios.post('http://localhost:3000/users/auth/signup', data)

        } catch (error) {


            throw error;

        }
    }
    const login = async (data) => {
        try {
            const res = await axios.post('http://localhost:3000/users/auth/login', data)
            console.log('user is loginging', res.data.data)
            setUser(res.data.data)
            localStorage.setItem('token', res.data.data.token)
        } catch (error) {
            throw error
        }
    }
    const logout = () => {
        localStorage.removeItem("token");
        setUser({});
        console.log('user is logout')
    };
    return (
        <UserContext.Provider value={{ user, setUser, register, login, logout }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    return useContext(UserContext)
}