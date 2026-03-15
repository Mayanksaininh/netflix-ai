import { configureStore } from '@reduxjs/toolkit'
import UserReducer from "./UserSlice"
import moviesReducre from "./MoviesSlice"

const AppStore = configureStore({
  reducer: {
    user : UserReducer,
    movies: moviesReducre,
  },
})

export default AppStore
