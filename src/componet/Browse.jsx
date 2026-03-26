
import Header from "./Header"
import useNowplayingmoives  from "../hooks/useNowplayingmovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import usePopularMovies from "../hooks/usePopularMovies"
import useTopRated from "../hooks/useTopRated"
import useUpcoming from "../hooks/useUpcomingMovies"
import GPTsearch from "./GPTsearch"
import { useSelector } from "react-redux"

const Browse = () =>{

   const Show_GTP =  useSelector(store => store.GPT.showGPTsearch)
   useNowplayingmoives()
   usePopularMovies()
   useTopRated()
   useUpcoming()

    return <div>
        <Header/>
        {
            Show_GTP ? (<GPTsearch/>) :
            (
                <>
                      <MainContainer/>
                     <SecondaryContainer/>
                </>
            ) 
        }
    </div>
}

export default Browse