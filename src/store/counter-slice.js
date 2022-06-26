import { createSlice } from "@reduxjs/toolkit";
import store from "./index";

const initialCounterState = {
  isRunning: false,
  isTimer: true,
  isShortBreak: false,
  isLongBreak: false,
  timerDuration: 10000, //10 másodperc
  startTime: undefined,
  stopTime: undefined,
  remainingTime: null,
  intervalId: undefined,
  dummyMessage: "Lorem ipsum",
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    changeIsRunning(state) {
      state.isRunning = !state.isRunning;
      log(state);
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
    initiateRemainingTime(state, action) {
      state.remainingTime = action.payload.timerDuration;
    },
    updateRemainingTime(state, action) {
      state.remainingTime = action.payload.updatedRemainingTime;
    },
    setIntervalId(state, action) {
      state.intervalId = action.payload;
    },
    clearIntervalId(state, action) {
      state.intervalId = clearInterval(action.payload.intervalId);
    },
    startTimer(state) {
      state.isRunning = !state.isRunning;
      state.startTime = calculateCurrentTime();
      state.remainingTime = state.timerDuration;
      // state.intervalId = setInterval(runTimer.bind("kutya"), 1000);
      state.intervalId = setInterval(runTimer, 1000);

    },
    stopTimer(state) {
      state.isRunning = !state.isRunning;
      resetTimer(state);
    },
  },
});

const log = (state) => {
  console.log(state.dummyMessage);
};

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
