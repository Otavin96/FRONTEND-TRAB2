import React, { createContext, useState, useEffect } from 'react'
import { ClientType } from '../features/Clients/types/ClientType'

export const AuthContext = createContext({})

function AuthProvider({ children }) {

  const [auth, setAuth] = useState<boolean>(() => {
    const storedAuth = sessionStorage.getItem("auth")
    return storedAuth === "true"
  })

  const [client, setClient] = useState<ClientType>(() => {
    const storedClient = sessionStorage.getItem("client")
    return storedClient ? JSON.parse(storedClient) : {}
  })

  useEffect(() => {
    sessionStorage.setItem("auth", auth.toString())
  }, [auth])

  useEffect(() => {
    sessionStorage.setItem("client", JSON.stringify(client))
  }, [client])

  return (
    <AuthContext.Provider value={{ auth, setAuth, client, setClient }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider