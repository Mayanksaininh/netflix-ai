import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () =>{

    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    if(!movies) return 
    const mainMovie = movies[4]
    

    const {original_title , overview ,id} = mainMovie

    return(
        <div className="relative h-screen w-full pt-6">
            <VideoTitle title = {original_title} overview = {overview}/>
            <VideoBackground movieID = {id}/>
        </div>
    )
}

export default MainContainer