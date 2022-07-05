import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { formatTime } from "../../utils/utils";

import classes from "./CounterDisplay.module.css";

const CounterDisplay = () => {
  const { mode, remainingTime, timerDuration } = useSelector(
    (state) => state.counter
  );

  const [displayTime, setDisplayTime] = useState(formatTime(timerDuration));

  useEffect(() => {
    const time = formatTime(remainingTime);
    setDisplayTime(time);
  }, [remainingTime]);

  useEffect(() => {
    let message;
    switch (mode) {
      case "timer":
        message = " - Koncentrálj!";
        break;
      case "shortBreak":
        message = " - Tarts szünetet!";
        break;
      case "longBreak":
        message = " - Lazíts egy kicsit!";
        break;
    }
    document.title = `${displayTime} ${message}`;
  }, [displayTime, mode]);

  return <div className={classes.counterDisplay}>{displayTime}</div>;
};

export default CounterDisplay;
