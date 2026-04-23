import { useEffect } from "react"
import { API_Option } from "../utils/Constant"
import { useDispatch, useSelector } from "react-redux"
import { addTopRated } from "../utils/MoviesSlice"

const useTopRated = () =>{
       const dispatch = useDispatch()

       const Toprated = useSelector((store) => store.movies.Toprated)
    const getTopRated = async() =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated', API_Option)

        const json = await data.json() 
        // console.log(json.results)
        dispatch(addTopRated(json.results))

    }
 useEffect(() =>{
   if(!Toprated) getTopRated()
 } ,[])
 
}

export default useTopRated