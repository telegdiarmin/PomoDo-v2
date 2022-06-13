import { createSlice, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";

const aboutSectionSlice = createSlice({
  name: "about",
  initialState: { isVisible: false },
  reducers: {
    toggleAboutSection(state) {
      state.isVisible = !state.isVisible;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterReducer, about: aboutSectionSlice.reducer },
});

export const aboutSectionActions = aboutSectionSlice.actions;
export default store;
