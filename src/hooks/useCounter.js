import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/counter-slice";

import { useAlarm } from "./useAlarm";

export const useCounter = () => {
  const dispatch = useDispatch();
  const {
    isRunning,
    mode,
    startTime,
    timerDuration,
    shortBreakDuration,
    longBreakDuration,
    alarm,
  } = useSelector((state) => state.counter);

  const { selectedAlarm } = useAlarm(alarm);

  const counterInterval = useRef();

  const [duration, setDuration] = useState(timerDuration);
  const [remainingTime, setRemainingTime] = useState(timerDuration);

  useEffect(() => {
    if (!isRunning) {
      stopTimer();
      return;
    }
    startTimer();
  }, [isRunning, dispatch]);

  useEffect(() => {
    if (remainingTime <= 0) {
      dispatch(counterActions.changeIsRunning());
      finishTimer();
      return;
    }
    console.log("Remaining time: " + remainingTime);
  }, [remainingTime, dispatch]);

  useEffect(() => {
    dispatch(counterActions.updateRemainingTime(remainingTime));
    console.log("Remaining time updated!");
  }, [remainingTime, dispatch]);

  useEffect(() => {
    switch (mode) {
      case "timer":
        setDuration(timerDuration);
        console.log("Kutya!");
        break;
      case "shortBreak":
        setDuration(shortBreakDuration);
        console.log("Cica!");
        break;
      case "longBreak":
        setDuration(longBreakDuration);
        console.log("Mérési hiba!");
        break;
    }
    if (isRunning) {
      dispatch(counterActions.changeIsRunning());
    }
    stopTimer();
  }, [mode]);

  useEffect(() => {
    setRemainingTime(duration);
  }, [duration]);

  const startTimer = () => {
    counterInterval.current = setInterval(runTimer, 1000);
    console.log("Started!");
  };

  const stopTimer = () => {
    resetTimer();
    console.log("Stopped!");
  };

  const runTimer = () => {
    const updatedRemainingTime = calculateRemainingTime();
    console.log("Updated remaining time: " + updatedRemainingTime);
    saveTimer(updatedRemainingTime);
  };

  const finishTimer = () => {
    resetTimer();
    selectedAlarm.play();
    console.log("Finished!");
  };

  const resetTimer = () => {
    // setRemainingTime(timerDuration);
    setRemainingTime(duration);
    dispatch(counterActions.updateRemainingTime(remainingTime));
    clearInterval(counterInterval.current);
  };

  const calculateCurrentTime = () => {
    const currentTime = new Date(Date.now()).getTime();
    return currentTime;
  };

  const calculateRemainingTime = () => {
    const currentTime = calculateCurrentTime();
    const elapsedTime = currentTime - startTime;
    console.log("Elapsed time: " + elapsedTime);
    // return timerDuration - elapsedTime;
    return duration - elapsedTime;
  };

  const saveTimer = (updatedRemainingTime) => {
    setRemainingTime(updatedRemainingTime);
  };

  return {
    remainingTime,
    calculateCurrentTime,
  };
};
