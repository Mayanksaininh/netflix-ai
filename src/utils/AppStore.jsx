import { configureStore } from '@reduxjs/toolkit'
import UserReducer from "./UserSlice"
import moviesReducre from "./MoviesSlice"
import gptReducer from "./GPTSlice"
import configReducer from "./configSlice"

const AppStore = configureStore({
  reducer: {
    user : UserReducer,
    movies: moviesReducre,
    GPT  : gptReducer ,
    config : configReducer,
  },
})

export default AppStore
