import MovieCard from "./MovieCard"

const MovieList = ({title , movies}) =>{

     if (!movies || movies.length === 0) return null;
    console.log(movies)
    return (
        <div className="flex overflow-x-scroll gap-4">
            <div>
                <h1>{title}</h1>
            </div>
            <div>
                {movies.map((movie) => (
                    <MovieCard key = {movie.id} poster_path={movie.poster_path}/>
                ))}
                
            </div>
        </div>
    )
}

export default MovieList