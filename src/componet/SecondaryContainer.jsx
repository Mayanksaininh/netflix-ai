
import MovieCard from "./MovieCard"
import MovieList from "./MovieList"
import { useSelector } from "react-redux"


const SecondaryContainer = () =>{
    const movies = useSelector(store => store.movies)
    return (
        <div >
            <MovieList title = {"Now Playing"} movies = {movies.nowPlayingMovies}/>
            <MovieCard/>
        </div>
    )
}

export default SecondaryContainer 