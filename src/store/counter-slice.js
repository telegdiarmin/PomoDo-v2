import { createSlice } from "@reduxjs/toolkit";
import store from "./index";

const initialCounterState = {
  startTime: undefined,
  intervalId: undefined,
  isAboutSectionVisible: false
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    setStartTime(state, action) {
      state.startTime = action.payload;
    },
    setIntervalId(state, action) {
      state.intervalId = action.payload;
    },
    toggleAboutSection(state) {
      state.isAboutSectionVisible = !state.isAboutSectionVisible;
    },
  },
});

//Experimental!!!

const calculateCurrentTime = () => {
  const currentTime = new Date(Date.now()).getTime();
  console.log("Current time: " + currentTime);
  return currentTime;
};

const calculateRemainingTime = (state) => {
  const currentTime = calculateCurrentTime();
  const elapsedTime = currentTime - state.startTime;
  console.log("Elapsed time: " + elapsedTime);
  return state.timerDuration - elapsedTime;
};

// const runTimer = async () => {
//   const state = store.getState();
//   console.log("Remainig time: " + state.counter.remainingTime + " (runTimer)");
//   if (state.counter.remainingTime >= 1000) {
//     const updatedRemainingTime = await calculateRemainingTime(state.counter);
//     saveTimer(state, updatedRemainingTime);
//   }
//   if (state.remainingTime < 1000) {
//     finishTimer();
//   }
// };

const runTimer = (mainState) => {
  const state = store.getState();
  console.log("Remainig time: " + state.counter.remainingTime + " (runTimer)");
  if (state.counter.remainingTime >= 1000) {
    const updatedRemainingTime = calculateRemainingTime(state.counter);
    saveTimer(state, updatedRemainingTime);
  }
  if (state.remainingTime < 1000) {
    finishTimer(mainState);
  }
};

const saveTimer = (state, updatedRemainingTime) => {
  state.remainingTime = updatedRemainingTime;
};

const finishTimer = (state) => {
  resetTimer(state);
  console.log("Finished!");
};

const resetTimer = (state) => {
  state.remainingTime = undefined;
  clearInterval(state.intervalId);
  console.log("Stopped!");
};

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
