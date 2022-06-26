import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import MainButton from "../MainButton/MainButton";
import MainButtonBgr from "../MainButton/MainButtonBgr";
import MainButtonSettings from "../MainButton/MainButtonSettings";
import ArrowDropdown from "../UI/ArrowDropdown";
import CounterFrame from "./CounterFrame";

import { counterActions } from "../../store/counter-slice";
import { uiActions } from "../../store/ui-slice";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counterRef = useRef();
  let counterInterval = useRef();

  const isRunning = useSelector((state) => state.counter.isRunning);
  // const counterState = useSelector((state) => state.counter);
  const startTime = useSelector((state) => state.counter.startTime);
  const remainingTime = useSelector((state) => state.counter.remainingTime);
  const timerDuration = useSelector((state) => state.counter.timerDuration);
  const mainButtonText = useSelector((state) => state.ui.mainButtonText);

  console.log("Component loaded!");
  console.log("Counter is running: " + isRunning);

  //Main button actions
  const mainButtonClickHandler = () => {
    console.log("Main button clicked!");
    if (isRunning) {
      dispatch(counterActions.stopTimer());
      dispatch(uiActions.toggleMainButtonText("START"));
    }
    if (!isRunning) {
      dispatch(counterActions.startTimer());
      dispatch(uiActions.toggleMainButtonText("STOP"));
    }
  };

  //Toggling About section visibility
  const toggleAboutSectionHandler = () => {
    dispatch(uiActions.toggleAboutSection());
    console.log("Visibility switched!");
  };

  //Timer functionality
  const startTimer = () => {
    dispatch(counterActions.changeIsRunning());
    dispatch(counterActions.setStartTime(calculateCurrentTime()));
    console.log("Start time: " + startTime);
    // dispatch(counterActions.updateRemainingTime(counterState.timerDuration));
    dispatch(counterActions.initiateRemainingTime(timerDuration));
    // dispatch(counterActions.initiateRemainingTime(15000));
    console.log("Remainig time: " + remainingTime + " (startTimer)");
    // dispatch(counterState.setIntervalId(setInterval(runTimer(), 1000)));
    counterInterval.current = setInterval(runTimer, 1000);
  };

  const stopTimer = () => {
    dispatch(counterActions.changeIsRunning());
    dispatch(counterActions.setStopTime(calculateCurrentTime()));
    resetTimer();
  };

  const calculateCurrentTime = () => {
    const currentTime = new Date(Date.now()).getTime();
    console.log("Current time: " + currentTime);
    return currentTime;
  };

  const calculateRemainingTime = () => {
    const currentTime = calculateCurrentTime();
    const elapsedTime = currentTime - startTime;
    console.log("Elapsed time: " + elapsedTime);
    return timerDuration - elapsedTime;
  };

  const runTimer = () => {
    console.log("Remainig time: " + remainingTime + " (runTimer)");
    if (remainingTime >= 1000) {
      const updatedRemainingTime = calculateRemainingTime();
      saveTimer(updatedRemainingTime);
    } else {
      finishTimer();
    }
  };

  const saveTimer = (updatedRemainingTime) => {
    dispatch(counterActions.updateRemainingTime(updatedRemainingTime));
  };

  const finishTimer = () => {
    resetTimer();
    console.log("Finished!");
  };

  const resetTimer = () => {
    dispatch(counterActions.changeIsRunning());
    dispatch(counterActions.updateRemainingTime(undefined));
    // clearInterval(counterState.intervalId);
    clearInterval(counterInterval.current);
    console.log("Stopped!");
  };

  return (
    <section className={classes.counter} ref={counterRef}>
      <CounterFrame />
      <MainButtonBgr>
        <MainButton
          onClick={mainButtonClickHandler}
          mainButtonText={mainButtonText}
        ></MainButton>
        <MainButtonSettings />
      </MainButtonBgr>
      <ArrowDropdown onClick={toggleAboutSectionHandler} />
    </section>
  );
};

export default Counter;
