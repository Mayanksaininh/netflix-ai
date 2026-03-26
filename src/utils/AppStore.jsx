import { configureStore } from '@reduxjs/toolkit'
import UserReducer from "./UserSlice"
import moviesReducre from "./MoviesSlice"
import gptReducer from "./GPTSlice"


const AppStore = configureStore({
  reducer: {
    user : UserReducer,
    movies: moviesReducre,
    GPT  : gptReducer ,
  },
})

export default AppStore
