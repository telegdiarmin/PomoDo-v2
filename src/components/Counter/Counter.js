import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import MainButton from "../MainButton/MainButton";
import MainButtonBgr from "../MainButton/MainButtonBgr";
import MainButtonSettings from "../MainButton/MainButtonSettings";
import ArrowDropdown from "../UI/ArrowDropdown";
import CounterFrame from "./CounterFrame";

import {counterActions} from '../../store/counter-slice'
import { calculateCurrentTime } from '../../utils/utils'

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counterRef = useRef();

  const isRunning = useSelector((state) => state.counter.startTime !== undefined);


  //Main button actions
  const mainButtonClickHandler = () => {
    if (!isRunning) {
      dispatch(counterActions.setStartTime(calculateCurrentTime()))
      return
    }

    dispatch(counterActions.setStartTime(undefined))
  };

  //Toggling About section visibility
  const toggleAboutSectionHandler = () => {
    dispatch(counterActions.toggleAboutSection());
  };

  return (
    <section className={classes.counter} ref={counterRef}>
      <CounterFrame />
      <MainButtonBgr>
        <MainButton
          onClick={mainButtonClickHandler}
          mainButtonText={isRunning ? 'STOP' : 'START'}
        ></MainButton>
        <MainButtonSettings />
      </MainButtonBgr>
      <ArrowDropdown onClick={toggleAboutSectionHandler} />
    </section>
  );
};

export default Counter;
