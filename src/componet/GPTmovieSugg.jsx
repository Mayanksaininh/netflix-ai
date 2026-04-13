import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const GPTMovieSugg = () =>{

    const { movieResult , movieName} = useSelector((store) => store.GPT)
    if(!movieName || !movieResult) return null
    return (
        <div className="p-3 m-4 bg-black opacity-90 text-white ">
          <div>
        {movieName.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResult[index] }
          />
        ))}
          </div>
        </div>
    )
}

export default GPTMovieSugg