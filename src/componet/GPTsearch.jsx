import GPTMovieSugg from "./GPTmovieSugg"
import SearchBar from "./GPTsearchbar"
import { BacKGround_Image } from "../utils/Constant";


const GPTsearch= () =>{
   return (
    <div>
       <img
              src={BacKGround_Image}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover -z-10"
      /> 
      
      <SearchBar/>
      <GPTMovieSugg/>
    </div>
   )
}

export default GPTsearch 