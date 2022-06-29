import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAboutSectionVisible: false,
};

const uiSlice = createSlice({
    name: "ui",
    initialState: initialState,
    reducers: {
      toggleAboutSection(state) {
        state.isAboutSectionVisible = !state.isAboutSectionVisible;
      },
    },
  });

  export const uiActions = uiSlice.actions;
  export default uiSlice.reducer;