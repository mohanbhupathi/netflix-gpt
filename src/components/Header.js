import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { signOut } from "firebase/auth";
import { useSelector } from 'react-redux';
import {auth} from "../utils/firebase"
import { useDispatch } from 'react-redux'
import { onAuthStateChanged } from "firebase/auth"
import { addUser, deleteUser } from '../utils/userSlice';
import { bgImage } from '../utils/constants';
import { toggleGPTSearchView } from '../utils/gptSlice';


const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user)
  const gptFlag = useSelector(store => store.gpt.showGPTSearch)
  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
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

      //unsubscribes when my component unmounts
      return () => unsubscribe()
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

  const handleGPTSearch = () => {
    dispatch(toggleGPTSearchView())
  }
  return (
    <div className="header absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex w-screen justify-between">
        <img
         className='w-44'
         src={bgImage}
         alt='logo'
         />
         {
          user ?
            <div className='p-2 m-2'>
            <button 
              className='font-bold text-white bg-purple-600 rounded-md px-4 py-2' 
              onClick={handleGPTSearch}>
              {!gptFlag ? "GPT Search" : "Home"}
            </button> 
            <button 
              className='font-bold text-white p-2' 
              onClick={handleSignOut}>
              Sign Out
            </button> 
            </div>
          : null
         }
    </div>
  )
}

export default Header