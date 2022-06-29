import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import MainButton from "../MainButton/MainButton";
import MainButtonBgr from "../MainButton/MainButtonBgr";
import MainButtonSettings from "../MainButton/MainButtonSettings";
import ArrowDropdown from "../UI/ArrowDropdown";
import CounterFrame from "./CounterFrame";

import { counterActions } from "../../store/counter-slice";
import { uiActions } from "../../store/ui-slice";

import { useCounter } from "../../hooks/useCounter";

import classes from "./Counter.module.css";

const Counter = () => {
  const { calculateCurrentTime } = useCounter();

  const dispatch = useDispatch();
  const counterRef = useRef();

  const isRunning = useSelector((state) => state.counter.isRunning);

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

  return (
    <section className={classes.counter} ref={counterRef}>
      <CounterFrame />
      <MainButtonBgr>
        <MainButton
          onClick={mainButtonClickHandler}
          mainButtonText={isRunning ? "STOP" : "START"}
        ></MainButton>
        <MainButtonSettings />
      </MainButtonBgr>
      <ArrowDropdown onClick={toggleAboutSectionHandler} />
    </section>
  );
};

export default Counter;
