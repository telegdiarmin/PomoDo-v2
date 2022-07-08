import { createSlice } from "@reduxjs/toolkit";

//Default timer duration for testing, minutes * seconds * milliseconds
const TIMER_DEFAULT_DURATION = 25 * 60 * 1000;
const SHORT_BREAK_DEFAULT_DURATION = 5 * 60 * 1000;
const LONG_BREAK_DEFAULT_DURATION = 10 * 60 * 1000;
// const TIMER_DEFAULT_DURATION = 5 * 1000;

export const TIMER_MODES = {
  timer: "timer",
  shortBreak: "shortBreak",
  longBreak: "longBreak",
};

export const ALARMS = [
  { key: 0, value: "leapfrog", label: "Leapfrog" },
  { key: 1, value: "marimba", label: "Marimba" },
  { key: 2, value: "twinBell", label: "Twin Bell" },
];

const initialCounterState = {
  isRunning: false,
  mode: TIMER_MODES.timer,
  timerDuration: TIMER_DEFAULT_DURATION,
  shortBreakDuration: SHORT_BREAK_DEFAULT_DURATION,
  longBreakDuration: LONG_BREAK_DEFAULT_DURATION,
  startTime: undefined,
  stopTime: undefined,
  remainingTime: null,
  alarm: ALARMS[2],
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    changeIsRunning(state) {
      state.isRunning = !state.isRunning;
    },
    increaseTimerDuration(state) {
      state.timerDuration = state.timerDuration + 5 * 60 * 1000;
    },
    decreaseTimerDuration(state) {
      state.timerDuration = state.timerDuration - 5 * 60 * 1000;
    },
    increaseShortBreakDuration(state) {
      state.shortBreakDuration = state.shortBreakDuration + 5 * 60 * 1000;
    },
    decreaseShortBreakDuration(state) {
      state.shortBreakDuration = state.shortBreakDuration - 5 * 60 * 1000;
    },
    increaseLongBreakDuration(state) {
      state.longBreakDuration = state.longBreakDuration + 5 * 60 * 1000;
    },
    decreaseLongBreakDuration(state) {
      state.longBreakDuration = state.longBreakDuration - 5 * 60 * 1000;
    },
    setStartTime(state, action) {
      state.startTime = action.payload;
    },
    updateRemainingTime(state, action) {
      state.remainingTime = action.payload;
    },
    setTimerMode(state, action) {
      switch (action.payload) {
        case "shortBreak":
          state.mode = TIMER_MODES.shortBreak;
          break;
        case "longBreak":
          state.mode = TIMER_MODES.longBreak;
          break;

        default:
          state.mode = TIMER_MODES.timer;
          break;
      }
    },
    setAlarm(state, action) {
      state.alarm = action.payload;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
