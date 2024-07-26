import {useEffect} from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import {addNowPlayingMovies} from '../utils/movieSlice'

export const useNowPlayingMovies = () => {
 //Fetch data from tmdb API and update the store
  console.log("into usenowplayingmov")
  const dispatch = useDispatch()
  const getNowPlayingMovies = async () => {
    console.log("about to call api")
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', API_OPTIONS)
    const json = await data.json()
    dispatch(addNowPlayingMovies(json.results))
    console.log("No Playing movies data", json) //you'll see this couple of times that's because of React make sure there are no inconsistencies
  }

  useEffect(() => {
    getNowPlayingMovies()
  },[])
}
