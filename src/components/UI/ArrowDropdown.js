import classes from "./ArrowDropdown.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const ArrowDropdown = (props) => {
  return (
    <KeyboardArrowDownIcon
      className={`${classes.arrowDropdown} ${props.className}`}
      sx={{ fontSize: "3rem", transition: "0.2s" }}
      onClick={props.onClick}
    />
  );
};

export default ArrowDropdown;
