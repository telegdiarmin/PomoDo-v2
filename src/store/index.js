import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter-slice";
import uiReducer from "./ui-slice"

const store = configureStore({
  reducer: { counter: counterReducer, ui: uiReducer },
});

export default store;
