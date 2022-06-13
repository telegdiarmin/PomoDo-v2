import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {};

const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterState,
    reducers: {

    }
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;