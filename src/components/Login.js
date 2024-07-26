import React, {useState, useRef, useEffect} from 'react'
import Header from './Header'
import userEvent from '@testing-library/user-event'
import validateData from '../utils/validate'
import {auth} from '../utils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice';

const Login = () => {
  const dispatch = useDispatch()
  const [isSignIn, setIsSignIn] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()
  const email = useRef(null)
  const password = useRef(null)
  const fullName = useRef(null)
  const toggle = () => {
    setIsSignIn(!isSignIn)
  }
  const handleClick = () => {
    const errorMessage = validateData(email.current.value, password.current.value)
    setErrorMessage(errorMessage)
    if(errorMessage) return;
    
    if(isSignIn) {
      console.log("SignIN logic goes here")
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("user", user)
        
      })
      .catch((error) => {
        setErrorMessage("Login Failed")
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    } else {
      console.log("Register logic goes here")
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log("user", user)
        updateProfile(user, {
          displayName: fullName.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(() => {
            const {uid, email, displayName, photoURL} = auth.currentUser
            dispatch(addUser({uid, email, displayName, photoURL}))
            // Profile updated!
        }).catch((error) => {
            console.log("Error while updateing the user")
        });
      })
      .catch((error) => {
        setErrorMessage("Registration Failed")
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error", error)
        // ..
      });
    }
  }
  return (
    <div>
        <Header/>
        <div className='absolute'>
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_medium.jpg"
            alt="bgImage"
          />
        </div>
        <form 
          onSubmit={(e) => e.preventDefault()}
          className='w-3/12 absolute p-10 bg-opacity-80 bg-black mx-auto right-0 left-0 my-36 rounded-lg' >
          <h1 className='font-bold text-3xl p-4 text-white'>{isSignIn ? "Sign In" : "Register"}</h1>
          {
            !isSignIn ? 
              <input 
              ref={fullName}
              type="text" 
              placeholder='Full Name' 
              className='p-2 m-2 w-full bg-gray-500 text-white border-none'/> 
            : null
          }
          <input 
            ref={email}
            type="text" 
            placeholder='Email Address' 
            className='p-2 m-2 w-full bg-gray-500 text-white border-none'/>
          <input 
            ref={password}
            type='password' 
            placeholder='password' 
            className='p-2 m-2 w-full bg-gray-500 text-white'/>
            {
              errorMessage ?
              <p className='text-red-700 p-2 m-2'>{errorMessage}</p> : null
            }

          <button className='p-2 m-2 bg-red-700 w-full text-white rounded-md' onClick={handleClick}>
            {isSignIn ? "Sign In" : "Register"}
          </button>

          <p className='text-white font-bold p-2 m-2 cursor-pointer' onClick={toggle}>
            {isSignIn ? "New to Netflix? Register Now" : "Already a user? Sign In"}
          </p>
        </form>
    </div>
  )
}

export default Login