import React, { useContext } from 'react'
import { Link } from 'react-router'
import {AuthContext} from '../AnotherComponent/AuthProvider'

function Navbar() {
const {name,user,signOutUser}=useContext(AuthContext)

const handleSignOut=()=>{
    signOutUser()
    .then(()=>{
        console.log('User sign out success')
    })
    .catch(error=>console.log('ERROR',error.message))
}

  return (
    <div>
      <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Logo / Title */}
      <div className="text-2xl font-bold text-blue-600">
        <Link to="/">MyApp</Link>
        {
            user?
             <div>
             <h3 className='text-orange-600 font-bold'>{user?.email}</h3>
             <button onClick={handleSignOut}>Sign Out</button>

            </div>
            :
            <Link className='ml-2 text-amber-400' to={'/login'}>Login</Link>

        }
        
       
      </div>

      {/* Nav Links */}
      <div className="flex items-center gap-4">
        <Link
          to="/login"
          className="text-blue-600 font-medium hover:underline"
        >
          Login
        </Link>
        <Link  className="text-blue-600 font-medium hover:underline" to={'/order'}>Order</Link>
        <Link
          to="/signup"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Signup
        </Link>
        <button>{name}</button>

        {/* Profile Image Placeholder */}
        <Link to="/profile" className="ml-4">
          <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden border-2 border-blue-600">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
