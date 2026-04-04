import { useSelector } from "react-redux"
import lang from "../utils/languageConstant"
import { useRef } from "react"
import { GoogleGenerativeAI } from "@google/generative-ai";
// import { gemini_APIkey } from "../utils/Constant";


const SearchBar = ()=>{

    const searchText = useRef(null)

    const langkey = useSelector(
        (store) => store.config.lang
    )


    const genAI = new GoogleGenerativeAI( import.meta.env.VITE_GEMINI_API_KEY);

    const handleGPTserachClick = async() =>{
     try {
    const query = searchText.current.value;
    console.log(query);

    const model = genAI.getGenerativeModel({
      model: "gemini-3-flash-preview"
    });
         const result = await model.generateContent(query);
    const response = await result.response;
    const text =
      result?.response?.candidates?.[0]?.content?.parts?.[0]?.text;

    console.log("AI Response:", text);
  } catch (error) {
    console.error("Error:", error);
  }
};
    return(
        <div >
           <form
           onSubmit={(e) => e.preventDefault()}
           className="px-3  mt-[9%] flex gap-3 justify-center  bg-black text-white ml-[30%] mr-[30%] pl-3">
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