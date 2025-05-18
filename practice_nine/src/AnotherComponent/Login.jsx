import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider'
import { useNavigate } from 'react-router';

function Login() {

    const {signInUser,signInWithGoogle}=useContext(AuthContext);
    const navigate=useNavigate();

    const handleLogin=e=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        
        signInUser(email,password)
        .then(result=>{
            console.log(result.user)
            e.target.reset();
            navigate('/order')
        })
        .catch(error=>{
            console.log('ERROR',error.message)
        })

    }

    const handleLoginWithGoogle=()=>{
      signInWithGoogle()
      .then(result=>{
        navigate('/order')
      })
      .catch(error=>console.log('ERROR',error.message))
    }

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form onSubmit={handleLogin} className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Login</h2>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name='email'
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name='password'
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>

           <button onClick={handleLoginWithGoogle} className='bg-amber-600'>Login With Google</button>
        </form>
      </div>
    </div>
  )
}

export default Login
