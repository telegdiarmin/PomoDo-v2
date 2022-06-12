import classes from "./MainButton.module.css";

const mainButtonText = "START";

const MainButton = () => {
    return (
        <button className={classes.mainButton}>{mainButtonText}</button>
    )
}

export default MainButton;