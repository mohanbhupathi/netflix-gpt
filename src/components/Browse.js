import { useSelector } from 'react-redux'
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import GptSearch from './GptSearch'

const Browse = () => {
  const gptFlag = useSelector(store => store.gpt.showGPTSearch)
  useNowPlayingMovies()
  return (
    <div>
        <Header/>
        {
          gptFlag ? <GptSearch/> :
          <>
            <MainContainer/>
            <SecondaryContainer/>
          </>
        }
        
    </div>
  )
}

export default Browse