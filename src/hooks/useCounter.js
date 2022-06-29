import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/counter-slice";

export const useCounter = () => {
  const dispatch = useDispatch();
  // const isRunning = useSelector((state) => state.counter.isRunning);
  // const startTime = useSelector((state) => state.counter.startTime);
  // const timerDuration = useSelector((state) => state.counter.timerDuration);
  const {isRunning, startTime, timerDuration} = useSelector((state) => state.counter);
  const counterInterval = useRef();

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
    console.log("Finished!");
  };

  const resetTimer = () => {
    setRemainingTime(timerDuration);
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
    return timerDuration - elapsedTime;
  };

  const saveTimer = (updatedRemainingTime) => {
    setRemainingTime(updatedRemainingTime);
  };

  return {
    remainingTime,
    calculateCurrentTime,
  };
};
