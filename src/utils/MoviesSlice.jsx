import { createSlice } from "@reduxjs/toolkit";


const MovieSlice = createSlice({
    name :"movies",
    initialState : {
        nowPlayingMovies : null,
        trailerVideo : null,
        PopularMovies: null,
        TopRatedMovies: null,
    },
    reducers: {
      addNowPlayingMovies: (state , action) =>{
        state.nowPlayingMovies = action.payload 
      },
      addtrailerVideo : (state , action) =>{
        state.trailerVideo = action.payload
      }, 
      addPopularMovies: (state , action) =>{
        state.PopularMovies = action.payload 
      },
      addTopRated: (state , action) =>{
        state.TopRatedMovies = action.payload 
      },
      addUpcoming: (state , action) =>{
        state.UpcomingMovies = action.payload 
      },
    },
})


export const {addNowPlayingMovies , addtrailerVideo , addPopularMovies , addTopRated , addUpcoming} = MovieSlice.actions
export default MovieSlice.reducer