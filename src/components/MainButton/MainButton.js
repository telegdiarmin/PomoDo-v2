import classes from "./MainButton.module.css";

const MainButton = (props) => {
  return (
    <button
      className={`${classes.mainButton} ${props.className}`}
      onClick={props.onClick}
    >
      {props.mainButtonText}
    </button>
  );
};

export default MainButton;
