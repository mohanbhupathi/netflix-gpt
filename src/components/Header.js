import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { signOut } from "firebase/auth";
import { useSelector } from 'react-redux';
import {auth} from "../utils/firebase"
import { useDispatch } from 'react-redux'
import { onAuthStateChanged } from "firebase/auth"
import { addUser, deleteUser } from '../utils/userSlice';


const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user)
  useEffect(() => {
      onAuthStateChanged(auth, (user) => {
      if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid, email, displayName, photoURL} = user
          dispatch(addUser({uid, email, displayName, photoURL}))
          navigate("/browse")
      } else {
          // User is signed out
          console.log("user is signed out body use effect")
          dispatch(deleteUser())
          navigate("/")
      }
      })
  },[])
  const handleSignOut = () => {
    console.log("handle signout")
    signOut(auth).then(() => {
      console.log("User Signout")
      // Sign-out successful.
    }).catch((error) => {
      console.log("Error while signing out")
      navigate("./error") //error page to be build
      // An error happened.
    })
  }
  return (
    <div className="header absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex w-full justify-between">
        <img
         className='w-44'
         src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
         alt='logo'
         />
         {
          user ?
            <button 
              className='font-bold text-white' 
              onClick={handleSignOut}>
              Sign Out
            </button> 
          : null
         }
    </div>
  )
}

export default Header