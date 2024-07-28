import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='pt-[20%] flex justify-center'>
        <form className='bg-black w-1/2'>
            <input type="text" className='p-4 m-4 w-[80%]' placeholder='What would you like to watch today?' />
            <button className='py-2 px-4 bg-red-700 text-white rounded-md'>submit</button>
        </form>
    </div>
  )
}

export default GptSearchBar