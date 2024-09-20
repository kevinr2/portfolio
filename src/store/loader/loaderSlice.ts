import { createSlice } from "@reduxjs/toolkit";


interface loaderState {
  loader: boolean;
  language: boolean;
}

const initialState: loaderState = {
  loader: true,
  language: false,
};

const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    reset: (state) => {
      state.loader = false;
    },
    directEN: (state) => {
      state.language = false;
    },
    directEs: (state)=>{
      state.language = true;
    }
  },
});

export const { reset,directEN,directEs } = loaderSlice.actions;

export default loaderSlice.reducer;
