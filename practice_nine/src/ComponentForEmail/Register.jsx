import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import React, { useState } from 'react'
import auth from '../firebase.init';

function Register() {
    const [errorMessage,setErrorMessage]=useState('')
    const [showPassword,setShowPassword]=useState(false)
    const handleRegister=(event)=>{
        event.preventDefault();

        const email=event.target.email.value;
        const password=event.target.password.value;
        const name=event.target.name.value;
        const photo=event.target.photoUrl.value;
        if(password.length<6){
            setErrorMessage("Password Length Must be 6 characters");
            return
        }

        setErrorMessage('')

        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            console.log(result.user);

            sendEmailVerification(auth.currentUser)
            .then(()=>{
              console.log('Verification email is sent')
            })
            // update profile
            const profile={
              displayName:name,
              photoUrl:photo
            }

            updateProfile(auth.currentUser,profile)
            .then(()=>{
              console.log('user profile updated')
            })
            .catch(error=>console.log('User profile updated error'))

        })
        .catch(error=>{
            console.log('ERROR',error.message);
            setErrorMessage(error.message)
        })

        console.log(email,password)
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleRegister} className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input type="text" name='name' placeholder='Name' />
          <input type="text" name='photoUrl' placeholder='Photo' />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            Password
          </label>
          <input
            type={showPassword?'text':'password'}
            id="password"
            name="password"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required  
          />
          <button onClick={()=>setShowPassword(!showPassword)}>E</button>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-200"
        >
          Register
        </button>
        {
            errorMessage && <p className='text-red-600'>{errorMessage}</p>
        }
      </form>
    </div>
  )
}

export default Register
