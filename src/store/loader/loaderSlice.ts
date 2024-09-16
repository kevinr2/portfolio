import { createSlice} from "@reduxjs/toolkit";

interface loaderState {
  loader:boolean
  
}

const initialState:loaderState = {
  loader:true
};

const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
   reset:(state)=>{
    state.loader=false
   }
  },
});

export const {reset} = loaderSlice.actions;

export default loaderSlice.reducer;