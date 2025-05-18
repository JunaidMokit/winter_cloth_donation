import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider';
import { Link, useNavigate } from 'react-router';

function Login() {
    const {signInWithGoogle,signInUser}=useContext(AuthContext);
    const navigate=useNavigate();

    const handleLogInWIthEmail=e=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;

        signInUser(email,password)
        .then(result=>{
            e.target.reset();
            navigate('/')
        })
        .catch(error=>console.log(error.message))

    }

    const handleLoginWithGoogle=e=>{
      e.preventDefault();

      signInWithGoogle()
      .then(result=>{
        // console.log(result)
        navigate('/')

      })
      .catch(error=>console.log('ERROR',error.message));

    }
  return (
    <div>
        <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
  <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
    <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">User Login</h2>

    <form onSubmit={handleLogInWIthEmail} className="space-y-4">
      <div>
        <label className="block text-blue-900 font-medium mb-1">Email</label>
        <input
          name="email"
          type="email"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label className="block text-blue-900 font-medium mb-1">Password</label>
        <input
          name="password"
          type="password"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your password"
        />
      </div>

      <div className="text-right">
       
        <Link to={"/forget"} className="text-sm text-blue-600 hover:underline">Forgot Password?</Link>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-800 text-white font-semibold py-2 rounded-md hover:bg-blue-900 transition"
      >
        Login
      </button>
    </form>

    <p className="text-center text-sm text-gray-600 mt-4">
      Don't have an account? <Link to={"/register"} className="text-blue-600 hover:underline">Register</Link>
    </p>

    <div className="mt-6">
      <button onClick={handleLoginWithGoogle} className="w-full flex items-center justify-center gap-2 bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition">
        <svg className="w-5 h-5 fill-current" viewBox="0 0 48 48">
          <path d="M44.5 20H24v8.5h11.7C34.4 33.2 29.7 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l6-6C34.4 6.3 29.5 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11.1 0 19.9-9 19.9-20 0-1.3-.1-2.1-.4-4z"/>
        </svg>
        Login with Google
      </button>
    </div>
  </div>
</div>

      
    </div>
  )
}

export default Login
