import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import SelectorBackground from "./SelectorBackground";

import classes from "./ModeSelector.module.css";

import { counterActions } from "../../store/counter-slice";

const ModeSelector = () => {
  const mode = useSelector((state) => state.counter.mode);
  const dispatch = useDispatch();

  // const [mode, setMode] = useState(timerMode);
  const selectorButtonClickHandler = (event) => {
    dispatch(counterActions.setTimerMode(event.target.value));
  };

  // useEffect(() => {
  //   setMode(timerMode);
  // }, [timerMode]);

  return (
    <SelectorBackground className={classes.modeSelector}>
      <button
        value={"timer"}
        onClick={selectorButtonClickHandler}
        className={`${
          mode === "timer"
            ? (`${classes.buttonActive} ${classes.buttonActiveTimer}`)
            : ""
        } ${
          mode === "shortBreak"
            ? (`${classes.buttonInactive} ${classes.buttonInactiveShortBreak}`)
            : ""
        } ${
          mode === "longBreak"
            ? (`${classes.buttonInactive} ${classes.buttonInactiveLongBreak}`)
            : ""
        }`}
      >
        Pomodoro
      </button>
      <button
        value={"shortBreak"}
        onClick={selectorButtonClickHandler}
        className={`${
          mode === "timer"
            ? (`${classes.buttonInactive} ${classes.buttonInactiveTimer}`)
            : ""
        } ${
          mode === "shortBreak"
            ? (`${classes.buttonActive} ${classes.buttonActiveShortBreak}`)
            : ""
        } ${
          mode === "longBreak"
            ? (`${classes.buttonInactive} ${classes.buttonInactiveLongBreak}`)
            : ""
        }`}
      >
        Rövid szünet
      </button>
      <button
        value={"longBreak"}
        onClick={selectorButtonClickHandler}
        className={`${
          mode === "timer"
            ? (`${classes.buttonInactive} ${classes.buttonInactiveTimer}`)
            : ""
        } ${
          mode === "shortBreak"
            ? (`${classes.buttonInactive} ${classes.buttonInactiveShortBreak}`)
            : ""
        } ${
          mode === "longBreak"
            ? (`${classes.buttonActive} ${classes.buttonActiveLongBreak}`)
            : ""
        }`}
      >
        Hosszú szünet
      </button>
    </SelectorBackground>
  );
};

export default ModeSelector;
