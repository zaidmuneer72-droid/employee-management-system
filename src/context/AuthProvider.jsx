/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  // localStorage.clear();
    const [userData, setuserData] = useState(null)
    useEffect(() => {
      const existing = localStorage.getItem('Employees')
      if (!existing) {
        setLocalStorage()
      }
      const { employees } = getLocalStorage();
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setuserData(employees)
    }, [])

  return (
    <AuthContext.Provider value={[userData, setuserData]}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider