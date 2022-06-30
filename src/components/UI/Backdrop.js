import { Fragment } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";

import classes from "./Backdrop.module.css";

import { uiActions } from "../../store/ui-slice";

const overlayElement = document.getElementById("overlay");

const Backdrop = (props) => {
  const dispatch = useDispatch();

  return (
    <Fragment>
      {createPortal(
        <div
          className={classes.backdrop}
          onClick={props.onClick}
        ></div>,
        overlayElement
      )}
      {createPortal(<Fragment> {props.children}</Fragment>, overlayElement)}
    </Fragment>
  );
};

export default Backdrop;
