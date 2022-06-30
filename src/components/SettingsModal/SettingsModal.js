import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Backdrop from "../UI/Backdrop";
import Card from "../UI/Card";
import ControlButton from "../UI/ControlButton";
import Button from "../UI/Button";
import MenuDropdown from "../UI/MenuDropdown";

import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

import classes from "./SettingsModal.module.css";

import { counterActions } from "../../store/counter-slice";
import { uiActions } from "../../store/ui-slice";
import { millisecondsToMinutes } from "../../utils/utils";

const SettingsModal = (props) => {
  const dispatch = useDispatch();

  const timerDuration = useSelector((state) => state.counter.timerDuration);
  const [timerInMinutes, setTimerInMinutes] = useState(
    millisecondsToMinutes(timerDuration)
  );

  useEffect(() => {
    setTimerInMinutes(millisecondsToMinutes(timerDuration));
  }, [timerDuration]);

  const incrTimerHandler = () => {
    dispatch(counterActions.increaseTimerDuration());
  };

  const decrTimerHandler = () => {
    if (timerDuration === 5 * 60 * 1000) {
      return;
    }
    dispatch(counterActions.decreaseTimerDuration());
  };

  const closeModalHandler = () => {
    dispatch(uiActions.toggleSettingsModal());
  };

  const submitSettingsHandler = () => {
    dispatch(counterActions.updateRemainingTime(timerDuration));
    closeModalHandler();
  };

  const alarmSelectHandler = (event) => {
    console.log(event.target.value)
  }

  const options = [
    { key: 0, value: "test", label: "Test" },
    { key: 1, value: "test 2", label: "Test 2" },
  ];

  return (
    <Backdrop onClick={closeModalHandler}>
      <Card className={classes.settingsModal}>
        <ul>
          <li>
            <h3>Időzítő</h3>
            <CloseIcon
              className={classes.closeBtn}
              sx={{ transition: "0.2s" }}
              onClick={closeModalHandler}
            />
          </li>
          <li>
            <ControlButton onClick={decrTimerHandler}>
              <RemoveIcon />
            </ControlButton>
            <p>{timerInMinutes} min</p>
            <ControlButton onClick={incrTimerHandler}>
              <AddIcon />
            </ControlButton>
          </li>
          <li>
            <h3>Hangjelzés</h3>
          </li>
          <li>
            <MenuDropdown options={options} onChange={alarmSelectHandler} />
          </li>
          <li>
            <Button className={classes.submitBtn} title={"OK"} onClick={submitSettingsHandler}/>
          </li>
        </ul>
      </Card>
    </Backdrop>
  );
};

export default SettingsModal;
