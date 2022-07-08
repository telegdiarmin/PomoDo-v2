import { Fragment } from "react";

import ControlButton from "../UI/ControlButton";

import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

import classes from "./Controls.module.css"

const Controls = (props) => {
    const {displayTime} = props;
  return (
    <Fragment>
      <ControlButton onClick={props.decrease}>
        <RemoveIcon />
      </ControlButton>
      <p className={classes.timerDuration}>{displayTime} min</p>
      <ControlButton onClick={props.increase}>
        <AddIcon />
      </ControlButton>
    </Fragment>
  );
};

export default Controls;
