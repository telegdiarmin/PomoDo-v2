import { createSlice } from "@reduxjs/toolkit";

//Default timer duration for testing, minutes * seconds * milliseconds
const TIMER_DEFAULT_DURATION = 5 * 60 * 1000;

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
    increaseTimerDuration(state) {
      state.timerDuration = state.timerDuration + (5 * 60 * 1000);
    },
    decreaseTimerDuration(state) {
      state.timerDuration = state.timerDuration - (5 * 60 * 1000);
    },
    setStartTime(state, action) {
      state.startTime = action.payload;
    },
    // setStopTime(state, action) {
    //   state.stopTime = action.payload;
    // },
    updateRemainingTime(state, action) {
      state.remainingTime = action.payload;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
