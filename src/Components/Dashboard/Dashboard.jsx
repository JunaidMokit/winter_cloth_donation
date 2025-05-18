import React, { useContext } from 'react'
import { AuthContext } from '../Authentication/AuthProvider'
import { Link } from 'react-router'

function Dashboard() {
    const {user}=useContext(AuthContext)
  return (
    <div>
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center px-4">
  <div className="bg-white shadow-xl rounded-2xl p-10 max-w-md w-full text-center">
    <h2 className="text-3xl font-extrabold text-blue-800 mb-8">Welcome, <span className="text-blue-600">{user.displayName}</span>!</h2>

    <div className="flex flex-col items-center space-y-6">
      <img
        src={user.photoURL}
        alt="User Profile"
        className="w-32 h-32 rounded-full object-cover border-4 border-blue-300 shadow-sm"
      />

      <div className="text-left w-full space-y-2">
        <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
          <p className="text-blue-900 font-semibold">Name:</p>
          <p className="text-gray-800 text-lg">{user.displayName}</p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
          <p className="text-blue-900 font-semibold">Email:</p>
          <p className="text-gray-800 text-lg">{user.email}</p>
        </div>
      </div>

      <Link
        to={'/update'}
        className="inline-block mt-6 bg-blue-800 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-900 transition"
      >
        Update Profile
      </Link>
    </div>
  </div>
</div>

      
    </div>
  )
}

export default Dashboard
