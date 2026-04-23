import { useEffect } from "react"
import { API_Option } from "../utils/Constant"
import { useDispatch, useSelector } from "react-redux"
import { addNowPlayingMovies } from "../utils/MoviesSlice"

const useNowplayingmoives = () =>{
       const dispatch = useDispatch()

       const nowPlayingMovie = useSelector((store) => store.movies.nowPlayingMovies)
    const getNowPlayingMovies = async() =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing', API_Option)

        const json = await data.json() 
        // console.log(json.results)
        dispatch(addNowPlayingMovies(json.results))

    }
 useEffect(() =>{
   if(!nowPlayingMovie) getNowPlayingMovies()
 } ,[])
 
}

export default useNowplayingmoives