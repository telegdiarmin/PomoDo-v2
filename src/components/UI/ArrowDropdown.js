import classes from "./ArrowDropdown.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const ArrowDropdown = (props) => {
  return (
    <KeyboardArrowDownIcon
      className={`${classes.arrowDropdown} ${props.className}`}
      sx={{ fontSize: "3rem", transition: "transform 0.2s linear" }}
      onClick={props.onClick}
    />
  );
};

export default ArrowDropdown;
