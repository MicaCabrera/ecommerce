import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'

import { auth } from '../firebase/config'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [error, setError] = useState(null)
  const [user, setUser] = useState(null)

  const registerUser = (valueRegister) => {
    createUserWithEmailAndPassword(
      auth,
      valueRegister.email,
      valueRegister.password
    )
      .then((userCredential) => {
        const user = userCredential.user
        setUser(user)
        console.log(user.email)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        setError(error)
        console.log(errorCode, errorMessage, 'ya esta registrado')
      })
  }

  const signInUser = (userLogin) => {
    signInWithEmailAndPassword(auth, userLogin.email, userLogin.password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log('usuario sesionado :', { user })
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage, 'ya esta sesionado')
      })
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid
        console.log(uid)
        console.log('Usuario ha iniciado sesión')
        setIsLoggedIn(true)
      } else {
        console.log('Usuario no ha iniciado sesión')
        setIsLoggedIn(false)
      }
    })
  }, [])

  const checkout = () => {
    signOut(auth)
      .then(() => {
        setIsLoggedIn(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <AuthContext.Provider
      value={{
        registerUser,
        signInUser,
        isLoggedIn,
        checkout,
        error,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
