import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import auth from '../firebase.init'

export const AuthContext=createContext(null)
const googleProvider=new GoogleAuthProvider()



function AuthProvider({children}) {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true);

    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }
    const signInWithGoogle=()=>{
      return signInWithPopup(auth,googleProvider);
    }

    const signOutUser=()=>{
        setLoading(true)
        return signOut(auth)
    }

    // onAuthStateChanged(auth,currentUser=>{
    //     if(currentUser){
    //         console.log('Currently logged in',currentUser);
    //         setUser(currentUser)
    //     }
    //     else{
    //         console.log('No user logged in');
    //         setUser(null)
    //     }
    // })

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            console.log('Current User',currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe();
        }
    },[])

    const authInfo={
      name:'UIU',
      user,
      loading,
      createUser,
      signInUser,
      signInWithGoogle,
      signOutUser
    }
  return (
    <div>
      <AuthContext.Provider value={authInfo}>
           {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
