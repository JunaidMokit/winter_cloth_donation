import React, { useContext } from 'react'
import AuthProvider, { AuthContext } from './AuthProvider'
import { Navigate, useNavigate } from 'react-router';

function PrivateRoute({children}) {
    const {user,loading}=useContext(AuthContext);
    const navigate=useNavigate();
    if(loading){
        //  return <h1 className='text-orange-500 text-5xl'>Loading</h1>
         navigate('/login')
    }
     if(user){
        return children;
    }
  return (
    <div>
      <Navigate to={'/login'}></Navigate>
    </div>
  )
}

export default PrivateRoute
