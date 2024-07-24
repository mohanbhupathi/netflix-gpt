import React, {useState} from 'react'
import Header from './Header'

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true)
  const toggle = () => {
    setIsSignIn(!isSignIn)
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
        <form className='w-3/12 absolute p-10 bg-opacity-80 bg-black mx-auto right-0 left-0 my-36 rounded-lg' >
          <h1 className='font-bold text-3xl p-4 text-white'>{isSignIn ? "Sign In" : "Register"}</h1>
          {
            !isSignIn ? 
              <input 
              type="text" 
              placeholder='Full Name' 
              className='p-2 m-2 w-full bg-gray-500 text-white border-none'/> 
            : null
          }
          <input 
            type="text" 
            placeholder='Email Address' 
            className='p-2 m-2 w-full bg-gray-500 text-white border-none'/>
          <input 
            type='password' 
            placeholder='password' 
            className='p-2 m-2 w-full bg-gray-500 text-white'/>

          <button className='p-2 m-2 bg-red-700 w-full text-white rounded-md'>
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