import classes from "./MainButton.module.css";

const MainButton = (props) => {
  return (
    <button className={classes.mainButton} onClick={props.onClick}>
      {props.mainButtonText}
    </button>
  );
};

export default MainButton;
