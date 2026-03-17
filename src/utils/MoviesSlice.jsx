import { createSlice } from "@reduxjs/toolkit";


const MovieSlice = createSlice({
    name :"movies",
    initialState : {
        nowPlayingMovies : null,
        trailerVideo : null
    },
    reducers: {
      addNowPlayingMovies: (state , action) =>{
        state.nowPlayingMovies = action.payload 
      },
      addtrailerVideo : (state , action) =>{
        state.trailerVideo = action.payload
      }
    },
})


export const {addNowPlayingMovies , addtrailerVideo} = MovieSlice.actions
export default MovieSlice.reducer