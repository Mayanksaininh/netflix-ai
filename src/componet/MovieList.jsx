import MovieCard from "./MovieCard"

const MovieList = ({title , movies}) =>{

     if (!movies || movies.length === 0) return null;
    // console.log(movies)
    return (
        <div className="px-4 px-4 bg-black">
              <style>
                {`
                .custom-scroll::-webkit-scrollbar {
                    height: 8px;
                }
                .custom-scroll::-webkit-scrollbar-track {
                    background: black;
                }
                .custom-scroll::-webkit-scrollbar-thumb {
                    background: #222;
                    border-radius: 10px;
                }
                `}
            </style>
            <div className="text-xl font-bold mb-2 py-2 text-white">
                <h1>{title}</h1>
            </div>
            <div className="flex overflow-x-scroll gap-4 scrollbar-hide" >
              {movies?.map((movie) => (
                    <div key={movie.id} className="min-w-[130px] flex-shrink-0">
                        <MovieCard poster_path={movie.poster_path} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MovieList