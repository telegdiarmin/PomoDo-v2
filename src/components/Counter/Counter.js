import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import MainButton from "../MainButton/MainButton";
import MainButtonBgr from "../MainButton/MainButtonBgr";
import MainButtonSettings from "../MainButton/MainButtonSettings";
import ArrowDropdown from "../UI/ArrowDropdown";
import CounterFrame from "./CounterFrame";
import ModeSelector from "../ModeSelector/ModeSelector";

import { counterActions } from "../../store/counter-slice";
import { uiActions } from "../../store/ui-slice";

import { useCounter } from "../../hooks/useCounter";

import classes from "./Counter.module.css";

const Counter = () => {
  const { calculateCurrentTime } = useCounter();

  const dispatch = useDispatch();
  const counterRef = useRef();

  const isRunning = useSelector((state) => state.counter.isRunning);
  const mode = useSelector((state) => state.counter.mode);
  const isAboutSectionVisible = useSelector(
    (state) => state.ui.isAboutSectionVisible
  );

  // const [timerMode, setTimerMode] = useState(mode);

  console.log("Component loaded!");
  console.log("Counter is running: " + isRunning);

  const mainButtonClickHandler = () => {
    if (!isRunning) {
      dispatch(counterActions.setStartTime(calculateCurrentTime()));
    }
    dispatch(counterActions.changeIsRunning());
  };

  const toggleAboutSectionHandler = () => {
    dispatch(uiActions.toggleAboutSection());
    console.log("Visibility switched!");
  };

  const settingsButtonClickHandler = () => {
    dispatch(uiActions.toggleSettingsModal());
  };

  // useEffect(() => {
  //   setTimerMode(mode);
  //   // console.log(timerMode);
  // }, [mode]);

  return (
    <section
      className={`${classes.counter} ${
        mode === "timer" ? classes.modeBackgroundTimer : ""
      } ${mode === "shortBreak" ? classes.modeBackgroundShortBreak : ""} ${
        mode === "longBreak" ? classes.modeBackgroundLongBreak : ""
      }`}
    >
      <div ref={counterRef} />
      <ModeSelector />
      <CounterFrame />
      <MainButtonBgr>
        <MainButton
          className={`${
            mode === "timer" ? classes.modeMainButtonTimer : ""
          } ${
            mode === "shortBreak" ? classes.modeMainButtonShortBreak : ""
          } ${
            mode === "longBreak" ? classes.modeMainButtonLongBreak : ""
          }`}
          onClick={mainButtonClickHandler}
          mainButtonText={isRunning ? "STOP" : "START"}
        ></MainButton>
        <MainButtonSettings onClick={settingsButtonClickHandler} />
      </MainButtonBgr>
      <ArrowDropdown
        onClick={toggleAboutSectionHandler}
        className={isAboutSectionVisible ? classes.arrowDropdownActive : ""}
      />
    </section>
  );
};

export default Counter;
