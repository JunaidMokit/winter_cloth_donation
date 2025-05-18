import React, { useContext } from 'react'
import logo from '../assets/lantern.png'
import { Link } from 'react-router'
import { AuthContext } from './Authentication/AuthProvider'
import { IoIosLogOut } from "react-icons/io";

function NavBar() {
  const {name,user,signOutUser}=useContext(AuthContext)
  const handleSignOut=()=>{
    signOutUser()
    .then(()=>{

    })
    .catch(error=>console.log('ERROR',error.message))
  }
  return (
    <div className=' w-7xl m-auto'>
        <nav className="bg-sky-500 text-white shadow-md p-4 flex justify-between items-center">
      {/* Left: Logo and Title */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-10 w-10 rounded-full bg-transparent" />
        
        <span className="text-xl font-semibold">Sunnah Winter Donation</span>
      </div>

      {/* Center: Navigation Links */}
      <div className="hidden md:flex space-x-6 font-medium">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/campaigns" className="hover:underline">Donation Campaigns</Link>
        <Link to="/help" className="hover:underline">How to Help</Link>
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
      </div>

      {/* <FontAwesomeIcon */}
      <div className="flex items-center space-x-4">
        
        {
          user?
          <div className='flex gap-x-1'>
             <img src={user?.photoURL} alt="User" className="h-10 w-10 rounded-full border-2 border-white" />
             <button onClick={handleSignOut} className="bg-white text-sky-500 px-1 py-.5 rounded hover:bg-sky-100 font-semibold">Logout</button>
             <button><IoIosLogOut /></button>
           
          </div>
          :
          <Link to="/login"><button className="bg-white text-sky-500 px-4 py-1 rounded hover:bg-sky-100 font-semibold">Login</button></Link>
        }
        
        
      </div>
    </nav>
      
    </div>
  )
}

export default NavBar
