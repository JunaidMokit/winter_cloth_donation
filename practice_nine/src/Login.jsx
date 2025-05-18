import { GithubAuthProvider, GoogleAuthProvider, signOut } from 'firebase/auth'
import React, { useState } from 'react'
import auth from './firebase.init';
import { signInWithPopup } from 'firebase/auth';

function Login() {
   const [user,setUser]=useState(null);

  const googleProvider =new GoogleAuthProvider();
  const guthubProvider=new  GithubAuthProvider();
  
  // lOGIN WITH GOOGLE ACCOUNT
    const handleGoogleSignIn=()=>{
       signInWithPopup(auth,googleProvider)
       .then((result)=>{
        console.log(result);
        setUser(result.user)
       })
       .catch(error=>{
        console.log('ERROR',error);
        setUser(null)
       })
    }
    // LOGIN WITH GITHUB ACCOUNT
    const handleGithubSignIn=()=>{
      signInWithPopup(auth, guthubProvider)
      .then((result)=>{
        console.log(result.user)
        setUser(result)
      })
      .catch(error=>{
        setUser(null)
      })

    }

//  SIGNOUT 
    const handleSignOut=()=>{
      signOut(auth)
      .then(()=>{
        console.log("Sign Out done");
        setUser(null)
      })
      .catch(error=>console.log(error))
    }
  return (
    <div>
      <h1>Its login page</h1>
      
      
      {
        user?<button onClick={handleSignOut}>Sign Out</button>:<>
        <button onClick={handleGoogleSignIn}>Login with Google</button>
        <button onClick={handleGithubSignIn}>Login With Github</button>
        </>
      }
      {
        user && <div>
        <h3>{user.displayName}</h3>
        <img  src={user.photoURL} alt="" />
        <h5>{user.email}</h5>
        
      </div>
      }
      

    </div>
  )
}

export default Login
