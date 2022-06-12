import classes from "./MainButtonBgr.module.css";

const MainButtonBgr = (props) => {
    return (
        <span className={classes.mainButtonBgr}>
            {props.children}
        </span>
    )
}

export default MainButtonBgr;