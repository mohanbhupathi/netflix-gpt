import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-12 absolute bg-gradient-to-r from-black text-white'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='py-12 text-lg w-5/12'>{overview}</p>
        <div className='flex'>
            <button className='bg-white text-black w-auto py-2 px-10 mx-2 rounded-md text-lg hover:bg-opacity-50'>▶️ Play</button>
            <button className='bg-gray-500 text-white w-auto py-2 px-10 mx-2 rounded-md text-lg bg-opacity-25'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle