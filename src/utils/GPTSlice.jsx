import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : "GPT" ,
    initialState : {
        showGPTsearch : false,
    },
    reducers : {
        toggleGPTSearchView : (state ) =>{
            state.showGPTsearch = !state.showGPTsearch
        }
    }
})

export const {toggleGPTSearchView} = gptSlice.actions

export default gptSlice.reducer