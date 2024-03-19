import { createContext, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

const AuthenticadorContext = createContext()

export const AuthenticationContextProvider = ({ children }) => {
     const [ user, setUser] = useState(null)
     const [ acessToken, setAcessToken] = useState(null)
     const [ error, setError ] = useState(null)

     const router = useRouter()

     //Login User
     const Login = async ({username, password}) => {
        console.log('login context')
        console.log({username, password})
     }
     return (
        <AuthenticadorContext.Provider value={{ user, acessToken, error, login }}>
             {children}
        </AuthenticadorContext.Provider>

     )
}