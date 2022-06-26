import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mainButtonText: "START",
  isAboutSectionVisible: false,
};

const uiSlice = createSlice({
    name: "ui",
    initialState: initialState,
    reducers: {
      toggleMainButtonText(state, action){
        state.mainButtonText = action.payload;
      },
      toggleAboutSection(state) {
        state.isAboutSectionVisible = !state.isAboutSectionVisible;
      },
    },
  });

  export const uiActions = uiSlice.actions;
  export default uiSlice.reducer;