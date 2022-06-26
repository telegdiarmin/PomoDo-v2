import { useSelector } from "react-redux";

import classes from "./CounterDisplay.module.css";

const CounterDisplay = () => {
  const setTime = useSelector((state) => state.counter.timerDuration);
  const remainingTime = useSelector((state) => state.counter.remainingTime)

  const displayTimer = (inputTime) => {
    const time = inputTime / 1000;
    let minutes = Math.floor(time / 60);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let seconds = Math.round(time % 60);
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return `${minutes}:${seconds}`;
  };

  const displaySetTime = displayTimer(setTime);

  return <div className={classes.counterDisplay}>{displaySetTime}</div>;
};

export default CounterDisplay;
