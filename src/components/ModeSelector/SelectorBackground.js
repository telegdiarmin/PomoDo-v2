import classes from "./SelectorBackground.module.css";

const SelectorBackground = (props) => {
  return (
    <div className={`${classes.selectorBackground} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default SelectorBackground;
