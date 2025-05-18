import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider'
import { Navigate } from 'react-router';

function PrivateRoute({children}) {
    const {user,loading}=useContext(AuthContext)
    if(loading){
        return <h1 className='text-orange-500 text-5xl'>Loading</h1>
    }
    if(user){
        return children;
    }
  return (
    <Navigate to={'/login'}></Navigate>
  )
}

export default PrivateRoute
