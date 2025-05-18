import React from 'react'
import { Link } from 'react-router'

function NavBar() {
  return (
    <div>
         <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <div className="text-xl font-bold text-blue-600">
        <Link to="/">MyApp</Link>
      </div>
      <div className="space-x-4">
        <Link
          to="/login"
          className="px-4 py-2 bg-transparent border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          Register
        </Link>
      </div>
    </nav>
      
    </div>
  )
}

export default NavBar
