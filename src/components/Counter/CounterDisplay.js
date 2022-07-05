import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { formatTime } from "../../utils/utils";

import classes from "./CounterDisplay.module.css";

const CounterDisplay = () => {
  const {
    mode,
    remainingTime,
    timerDuration,
    shortBreakDuration,
    longBreakDuration,
  } = useSelector((state) => state.counter);

  const [displayTime, setDisplayTime] = useState(formatTime(timerDuration));

  useEffect(() => {
    const time = formatTime(remainingTime);
    setDisplayTime(time);
  }, [remainingTime]);

  return <div className={classes.counterDisplay}>{displayTime}</div>;
};

export default CounterDisplay;
