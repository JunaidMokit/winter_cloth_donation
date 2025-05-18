import { sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react'
import auth from '../firebase.init';

function Login() {
  const [loginErrorMessage,setLoginErrorMessage]=useState(null)
  const [success,setSuccess]=useState(false)
  const emailRef=useRef()

  
  const handleLogin=e=>{
    e.preventDefault()
    const email=e.target.email.value;
    const password=e.target.password.value;

    setLoginErrorMessage('')
    setSuccess(false)
     
    signInWithEmailAndPassword(auth,email,password)
    .then(result=>{
      console.log(result.user)
      setSuccess(true)
    })
    .catch(error=>{
      console.log('ERROR',error.message)
      setLoginErrorMessage(error.message)
    })
  }

  const handleForgetPassword=()=>{
    console.log('Get EMAIL aDREES',emailRef)
    const email=emailRef.current.value;
    if(!email){
      console.log("provide email")
    }
    else{
      sendPasswordResetEmail(auth,email)
      .then(()=>{
        alert("Rest email sent")
      })
    }

  }
  return (
    <div>
       <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name='email'
              ref={emailRef}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name='password'
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-300"
          >
            Sign In
          </button>
          <button onClick={handleForgetPassword}>Forget Password</button>
          {
            success &&<p className='text-green-600'>Your account has been Login</p>
          }
          {
            loginErrorMessage && <p>{loginErrorMessage}</p>
          }
        </form>
      </div>
    </div>
        
    </div>
  )
}

export default Login
