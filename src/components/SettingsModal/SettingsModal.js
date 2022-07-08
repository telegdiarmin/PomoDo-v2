import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Backdrop from "../UI/Backdrop";
import Card from "../UI/Card";
import Button from "../UI/Button";
import MenuDropdown from "../UI/MenuDropdown";
import Controls from "./Controls";

import CloseIcon from "@mui/icons-material/Close";

import classes from "./SettingsModal.module.css";

import { ALARMS, counterActions } from "../../store/counter-slice";
import { uiActions } from "../../store/ui-slice";
import { millisecondsToMinutes } from "../../utils/utils";

const SettingsModal = (props) => {
  const dispatch = useDispatch();

  const options = ALARMS;
  const { mode, timerDuration, shortBreakDuration, longBreakDuration } =
    useSelector((state) => state.counter);
  const [timerInMinutes, setTimerInMinutes] = useState(
    millisecondsToMinutes(timerDuration)
  );
  const [shortBreakInMinutes, setShortBreakInMinutes] = useState(
    millisecondsToMinutes(shortBreakDuration)
  );
  const [longBreakInMinutes, setLongBreakInMinutes] = useState(
    millisecondsToMinutes(longBreakDuration)
  );
  const [selectedAlarm, setSelectedAlarm] = useState(null);

  useEffect(() => {
    setTimerInMinutes(millisecondsToMinutes(timerDuration));
    setShortBreakInMinutes(millisecondsToMinutes(shortBreakDuration));
    setLongBreakInMinutes(millisecondsToMinutes(longBreakDuration));
  }, [timerDuration, shortBreakDuration, longBreakDuration]);

  const incrTimerHandler = () => {
    dispatch(counterActions.increaseTimerDuration());
  };

  const decrTimerHandler = () => {
    if (timerDuration === 5 * 60 * 1000) {
      return;
    }
    dispatch(counterActions.decreaseTimerDuration());
  };

  const incrShortBreakHandler = () => {
    dispatch(counterActions.increaseShortBreakDuration());
  };

  const decrShortBreakHandler = () => {
    if (shortBreakDuration === 5 * 60 * 1000) {
      return;
    }
    dispatch(counterActions.decreaseShortBreakDuration());
  };

  const incrLongBreakHandler = () => {
    dispatch(counterActions.increaseLongBreakDuration());
  };

  const decrLongBreakHandler = () => {
    if (longBreakDuration === 5 * 60 * 1000) {
      return;
    }
    dispatch(counterActions.decreaseLongBreakDuration());
  };

  const closeModalHandler = () => {
    dispatch(uiActions.toggleSettingsModal());
  };

  const selectAlarmHandler = (alarm) => {
    console.log(alarm);
    setSelectedAlarm(alarm);
  };

  const submitSettingsHandler = () => {
    switch (mode) {
      case "timer":
        dispatch(counterActions.updateRemainingTime(timerDuration));
        break;
      case "shortBreak":
        dispatch(counterActions.updateRemainingTime(shortBreakDuration));
        break;
      case "longBreak":
        dispatch(counterActions.updateRemainingTime(longBreakDuration));
        break;
    }
    dispatch(counterActions.setAlarm(selectedAlarm));
    closeModalHandler();
  };

  return (
    <Backdrop onClick={closeModalHandler}>
      <Card className={classes.settingsModal}>
        <ul>
          <li>
            <h3>Pomodoro</h3>
            <CloseIcon
              className={classes.closeBtn}
              sx={{ transition: "0.2s" }}
              onClick={closeModalHandler}
            />
          </li>
          <li>
            <Controls
              displayTime={timerInMinutes}
              decrease={decrTimerHandler}
              increase={incrTimerHandler}
            />
          </li>
          <li>
            <h3>Rövid szünet</h3>
          </li>
          <li>
            <Controls
              displayTime={shortBreakInMinutes}
              decrease={decrShortBreakHandler}
              increase={incrShortBreakHandler}
            />
          </li>
          <li>
            <h3>Hosszú szünet</h3>
          </li>
          <li>
            <Controls
              displayTime={longBreakInMinutes}
              decrease={decrLongBreakHandler}
              increase={incrLongBreakHandler}
            />
          </li>
          <li>
            <h3>Hangjelzés</h3>
          </li>
          <li>
            <MenuDropdown
              options={options}
              defaultOption={options[2]}
              onOptionSelect={selectAlarmHandler}
            />
          </li>
          <li>
            <Button
              className={classes.submitBtn}
              title={"OK"}
              onClick={submitSettingsHandler}
            />
          </li>
        </ul>
      </Card>
    </Backdrop>
  );
};

export default SettingsModal;
