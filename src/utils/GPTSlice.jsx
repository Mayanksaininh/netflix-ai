import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : "GPT" ,
    initialState : {
        showGPTsearch : false,
        movieResult : null,
        movieName: null, 
    },
    reducers : {
        toggleGPTSearchView : (state ) =>{
            state.showGPTsearch = !state.showGPTsearch
        },
        addgptMoviesResult : (state,action) =>{
            const {movieName , movieResult} = action.payload
            state.movieName = movieName
            state.movieResult = movieResult
        }
    }
})

export const {toggleGPTSearchView , addgptMoviesResult} = gptSlice.actions

export default gptSlice.reducer