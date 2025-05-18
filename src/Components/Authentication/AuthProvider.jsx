import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import auth from '../../firebase.init';

export const AuthContext=createContext(null);
const googleProvider=new GoogleAuthProvider;
function AuthProvider({children}) {

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signInWithGoogle=()=>{
        return signInWithPopup(auth,googleProvider)

    }
    const signInUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const signOutUser=()=>{
        setLoading(true);
        return signOut(auth)
    }

    const resetPassword = (email) => {
  setLoading(true);
  return sendPasswordResetEmail(auth, email);
};

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
          setUser(currentUser)
        })
        return ()=>{
            unSubscribe();
        }
    },[])
    const authInfo={
        name:"Mokit",
        user,
        createUser,
        signInUser,
        signInWithGoogle,
        signOutUser,
        resetPassword,
        loading,
    }
    console.log(user)
  return (
    <div>
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
      
    </div>
  )
}

export default AuthProvider
