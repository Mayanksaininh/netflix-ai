import { GoogleGenAI } from "@google/genai";
import { gemini_APIkey } from "./Constant";


// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({
    apiKey  : "gemini_APIkey"
});

export default ai
