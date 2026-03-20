import {  useSelector } from "react-redux"
import useMovieTrailer from "../hooks/useMovieTrailer"


const VideoBackground = ({movieID})=>{

      const trailerVideo = useSelector(store => store.movies.trailerVideo)
      
    useMovieTrailer(movieID)

    return (
        <div>
            <iframe
            className="absolute top-0 left-0 w-full h-full object-cover -z-10 "
            src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1`}
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen></iframe>
        </div>
    )
}

export default VideoBackground