import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () =>{

    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    if(!movies) return 
    const mainMovie = movies[4]
    

    const {original_title , overview ,id} = mainMovie

    return(
        <div className=" relative w-full h-[52vh] md:h-screen overflow-hidden  ">
             <div className="absolute inset-0 flex items-center z-10">
            <VideoTitle title = {original_title} overview = {overview}/>
            </div>
            <VideoBackground movieID = {id}/>
        </div>
    )
}

export default MainContainer