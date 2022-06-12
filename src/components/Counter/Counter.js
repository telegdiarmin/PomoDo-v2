import MainButton from "../MainButton/MainButton";
import MainButtonBgr from "../MainButton/MainButtonBgr";
import MainButtonSettings from "../MainButton/MainButtonSettings";
import classes from "./Counter.module.css"
import CounterFrame from "./CounterFrame";

const Counter = () => {
    return (
        <section className={classes.counter}>
            <CounterFrame/>
            <MainButtonBgr>
                <MainButton></MainButton>
                <MainButtonSettings/>
            </MainButtonBgr>
        </section>
    )
}

export default Counter;