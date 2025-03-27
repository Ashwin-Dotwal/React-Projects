import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pastes: localStorage.getItem("pastes")
?  JSON.parse(localStorage.getItem("pastes"))
  :[]
}

export const pasteSlice = createSlice({
  name: 'pastes',
  initialState,
  reducers: {
    aaToPastes: (state,action) => {
     
      
    },
    updateToPastes: (state,action) => {
      
    },
    resetAllPastes: (state, action) => {
   
    },
    removeFromPastes: (state,action) => {

    },
  },
})

// Action creators are generated for each case reducer function
export const { aaToPastes,updateToPastes, resetAllPastes,removeFromPastes } = counterSlice.actions

export default pasteSlice.reducer