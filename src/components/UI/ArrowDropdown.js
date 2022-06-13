import classes from "./ArrowDropdown.module.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ArrowDropdown = (props) => {
    return (
        <KeyboardArrowDownIcon className={classes.arrowDropdown} sx={{fontSize: "3rem", }} onClick={props.onClick}/>
    )
}

export default ArrowDropdown;