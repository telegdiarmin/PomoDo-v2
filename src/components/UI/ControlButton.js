import classes from "./ControlButton.module.css";

const ControlButton = (props) => {
  return (
    <button className={classes.controlButton} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default ControlButton;
