import { createSlice } from "@reduxjs/toolkit";

//Default timer duration for testing, seconds * milliseconds
const TIMER_DEFAULT_DURATION = 10 * 1000;

const initialCounterState = {
  isRunning: false,
  isTimer: true,
  isShortBreak: false,
  isLongBreak: false,
  timerDuration: TIMER_DEFAULT_DURATION,
  startTime: undefined,
  stopTime: undefined,
  remainingTime: null,
  intervalId: undefined,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    changeIsRunning(state) {
      state.isRunning = !state.isRunning;
    },
    setTimerDuration(state, action) {
      state.timerDuration = action.payload;
    },
    setStartTime(state, action) {
      state.startTime = action.payload;
    },
    setStopTime(state, action) {
      state.stopTime = action.payload;
    },
    // initiateRemainingTime(state, action) {
    //   state.remainingTime = action.payload.timerDuration;
    // },
    updateRemainingTime(state, action) {
      state.remainingTime = action.payload;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
