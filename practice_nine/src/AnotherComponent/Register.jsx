import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider';
import { useNavigate } from 'react-router';


function Register() {
    const {createUser,signOutUser}=useContext(AuthContext);
    const navigate=useNavigate()

    const handleSignUp=e=>{
        e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value;
        const password=e.target.password.value;

        createUser(email,password)
        .then(result=>{
            console.log(result.user)
            e.target.reset();
            signOutUser()
            .then(()=>{
                  navigate('/login')
            })
           
        })
        .catch(error=>{
            console.log('ERROR',error.message)
        })

    }

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="w-full max-w-md bg-white p-8 rounded shadow">
    <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>
    <form onSubmit={handleSignUp} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your password"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Sign Up
      </button>
    </form>
  </div>
</div>

    </div>
  )
}

export default Register
