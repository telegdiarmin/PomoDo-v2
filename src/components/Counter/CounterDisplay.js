import classes from "./CounterDisplay.module.css";
import { displayTimer} from '../../utils/utils'
import {useCounter} from '../../hooks/useCounter'

const CounterDisplay = () => {
  const { remainingTime } = useCounter()

  return <div className={classes.counterDisplay}>{displayTimer(remainingTime)}</div>;
};

export default CounterDisplay;
