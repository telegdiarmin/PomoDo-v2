import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import SelectorBackground from "./SelectorBackground";

import classes from "./ModeSelector.module.css";

import { counterActions } from "../../store/counter-slice";
import SelectorLabel from "./SelectorLabel";

const ModeSelector = () => {
  const mode = useSelector((state) => state.counter.mode);
  const dispatch = useDispatch();

  const selectorButtonClickHandler = (event) => {
    dispatch(counterActions.setTimerMode(event.target.value));
  };

  return (
    <SelectorBackground className={classes.modeSelector}>
      <SelectorLabel
        mode={mode}
        thisMode={"timer"}
        title={"Pomodoro"}
        onClick={selectorButtonClickHandler}
      />
      <SelectorLabel
        mode={mode}
        thisMode={"shortBreak"}
        title={"Rövid szünet"}
        onClick={selectorButtonClickHandler}
      />
      <SelectorLabel
        mode={mode}
        thisMode={"longBreak"}
        title={"Hosszú szünet"}
        onClick={selectorButtonClickHandler}
      />
      <div
        className={`${classes.toggleSlider} ${
          mode === "timer" ? `${classes.sliderTimer}` : ""
        } ${mode === "shortBreak" ? `${classes.sliderShortBreak}` : ""} ${
          mode === "longBreak" ? `${classes.sliderLongBreak}` : ""
        }`}
      ></div>
    </SelectorBackground>
  );
};

export default ModeSelector;
