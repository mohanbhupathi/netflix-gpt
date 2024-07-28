import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movie)
  if(movies.nowPlayingMovies === null) return
  return (
    <div className=' bg-black'>
        <div className='-mt-64 z-20 relative'>
            <MovieList title="Now Playing" movies={movies.nowPlayingMovies}/>
            <MovieList title="Trending" movies={movies.nowPlayingMovies}/>
            <MovieList title="Popular Movies" movies={movies.nowPlayingMovies}/>
            <MovieList title="Upcoming Movies" movies={movies.nowPlayingMovies}/>
        </div>  
    </div>
  )
}

export default SecondaryContainer