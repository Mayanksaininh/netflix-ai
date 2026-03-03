import { createSlice } from '@reduxjs/toolkit' 

const UserSlice = createSlice({
    name : 'user',
    initialState: null,
     reducers: {
         addUSer: (state, action) => {
      return action.payload
    },
    removeUser : (state , action)=>{
        return null
    }

     }
})
export const { addUSer, removeUser} = UserSlice.actions
export default UserSlice.reducer