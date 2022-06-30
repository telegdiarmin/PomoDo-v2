import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { formatTime } from "../../utils/utils";

import classes from "./CounterDisplay.module.css";

const CounterDisplay = () => {
  const remainingTime = useSelector((state) => state.counter.remainingTime);
  const timerDuration = useSelector((state) => state.counter.timerDuration)
  
  const [displayTime, setDisplayTime] = useState(formatTime(timerDuration));

  useEffect(()=>{
    const time = formatTime(remainingTime)
    setDisplayTime(time)
  },[remainingTime])


  return <div className={classes.counterDisplay}>{displayTime}</div>;
};

export default CounterDisplay;
