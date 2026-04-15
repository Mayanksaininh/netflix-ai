import { useEffect } from "react"
import { API_Option } from "../utils/Constant"
import { useDispatch, useSelector } from "react-redux"
import { addUpcoming } from "../utils/MoviesSlice"

const useUpcoming = () =>{
       const dispatch = useDispatch()

       const upcomingMovie = useSelector((store) => store.movies.upcomingMovies)
    const getUpcoming = async() =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming', API_Option)

        const json = await data.json() 
        console.log(json.results)
        dispatch(addUpcoming(json.results))

    }
 useEffect(() =>{
   if(!upcomingMovie) getUpcoming()
 } ,[])
 
}

export default useUpcoming