import classes from "./SelectorLabel.module.css";

const SelectorLabel = (props) => {
  const { mode, thisMode, title } = props;
  return (
    <label
      htmlFor={thisMode}
      onClick={props.onClick}
      className={`${classes.SelectorLabel} ${
        mode === "timer" && mode === thisMode ? `${classes.sliderActiveTimer}` : ""
      } ${mode === "shortBreak" && mode === thisMode ? `${classes.sliderActiveShortBreak}` : ""} ${
        mode === "longBreak" && mode === thisMode ? `${classes.sliderActiveLongBreak}` : ""
      } ${
        mode === "timer" && mode !== thisMode ? `${classes.sliderInactiveTimer}` : ""
      } ${mode === "shortBreak" && mode !== thisMode ? `${classes.sliderInactiveShortBreak}` : ""} ${
        mode === "longBreak" && mode !== thisMode ? `${classes.sliderInactiveLongBreak}` : ""
      }`}
    >
      {title}
      <input
        id={thisMode}
        className={classes.timer}
        type={"radio"}
        value={thisMode}
        name={"menu"}
      ></input>
    </label>
  );
};

export default SelectorLabel;
