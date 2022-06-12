import CounterDisplay from "./CounterDisplay";
import classes from "./CounterFrame.module.css"

const CounterFrame = () => {
    return (
        <div className={classes.counterFrame}>
            <CounterDisplay/>
        </div>
    )
}

export default CounterFrame;