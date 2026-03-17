import { useDispatch } from "react-redux"
import { API_Option } from "../utils/Constant"
import { addtrailerVideo } from "../utils/MoviesSlice"
import { useEffect } from "react"

const useMovieTrailer = (movieID) =>{
    const dispatch = useDispatch()
     const getMovieVideo = async ()=>{
            const data = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/videos`, API_Option )
    
            const json = await data.json()
            console.log(json)
            
            const filterData = json.results.filter((video) => video.type === "Trailer") 
            const trailer = filterData.length ? filterData[0] : json.results[0]
            console.log(trailer)
            dispatch(addtrailerVideo(trailer))
        }
    
        useEffect(() => {
              if (!movieID) return null
            getMovieVideo()
        } ,[])
    

}

export default useMovieTrailer