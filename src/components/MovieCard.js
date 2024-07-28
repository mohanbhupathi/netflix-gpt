import React from 'react'
import { IMAGE_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
 console.log("path", IMAGE_CDN+posterPath)
  return (
    <div className='w-52 pr-4'>
        <img alt='Movie Card' src={IMAGE_CDN + posterPath}/>
    </div>
  )
}

export default MovieCard