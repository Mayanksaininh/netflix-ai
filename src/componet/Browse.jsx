
import Header from "./Header"
import useNowplayingmoives  from "../hooks/useNowplayingmovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import usePopularMovies from "../hooks/usePopularMovies"
import useTopRated from "../hooks/useTopRated"
import useUpcoming from "../hooks/useUpcomingMovies"

const Browse = () =>{

   useNowplayingmoives()
   usePopularMovies()
   useTopRated()
   useUpcoming()

    return <div>
        <Header/>
        <MainContainer/>
        <SecondaryContainer/>
    </div>
}

export default Browse