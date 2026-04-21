import { useDispatch, useSelector } from "react-redux"
import lang from "../utils/languageConstant"
import { useRef } from "react"
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_Option } from "../utils/Constant";
import { addgptMoviesResult } from "../utils/GPTSlice";


const SearchBar = ()=>{

  const dispatch = useDispatch()
    const searchText = useRef(null)

    const langkey = useSelector(
        (store) => store.config.lang
    )


    const genAI = new GoogleGenerativeAI( import.meta.env.VITE_GEMINI_API_KEY);

    // serach movies in TMDB 
    const searchMoviesTMDB = async(movie) =>{
      const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1&api_key` , API_Option)

      const json = await data.json()
      return json.results
    }

    const handleGPTserachClick = async() =>{
     try {
    const query = searchText.current.value;
    // console.log(query);

    const model = genAI.getGenerativeModel({
      model: "gemini-3-flash-preview"
    });
     const prompt = `
    Act as a movie recommendation system.
    Suggest 5 movies for: "${query}"
    Only return movie names separated by commas.
    Example: Inception, Interstellar, Avatar
    `;

         const result = await model.generateContent(prompt);
    const response = await result.response;
    const gptMovies =
      result?.response?.candidates?.[0]?.content?.parts?.[0]?.text.split(",");

    // console.log("AI Response:", text);

    // for each movie I will search for TMDB API
    const PromiseArray = gptMovies.map((movie) => searchMoviesTMDB(movie))

    // this promisearray return array of promise and wait for resolve all promises 

    const TMDBResult = await Promise.all(PromiseArray)
    console.log("AI Response:" , TMDBResult)

    dispatch(addgptMoviesResult({movieName : gptMovies, movieResult : TMDBResult}))

  } catch (error) {
    console.error("Error:", error);
  }
};
    return(
        <div >
           <form
           onSubmit={(e) => e.preventDefault()}
           className="px-3  mt-[9%] flex gap-2 justify-center  bg-black text-white w-full md:w-1/2 mx-auto">
            <input
            ref = {searchText}
            type = "text" 
            className="pt-2px w-1/1 rounded  mb-[2.4%] mt-[2.4%] bg-white text-black pl-2" 
            placeholder={lang[langkey].GPTsearchplaceholder}></input>
            <button className="text-white bg-red-500 rounded px-4 py-2 mt-[2.4%] mb-[2.4%] hover:bg-red-700 " 
            onClick={handleGPTserachClick}>{lang[langkey].search}</button>  
           </form>
        </div>
    )
}

export default SearchBar