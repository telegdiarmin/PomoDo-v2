import { useDispatch } from "react-redux";

import MainButton from "../MainButton/MainButton";
import MainButtonBgr from "../MainButton/MainButtonBgr";
import MainButtonSettings from "../MainButton/MainButtonSettings";
import ArrowDropdown from "../UI/ArrowDropdown";
import CounterFrame from "./CounterFrame";
import classes from "./Counter.module.css"

import { aboutSectionActions } from "../../store/index";

const Counter = ({aboutRef}) => {

    const dispatch = useDispatch();
    const toggleAboutSectionHandler = () => {
        dispatch(aboutSectionActions.toggleAboutSection());
        console.log("Visibility switched!");
        aboutRef.current.scrollIntoView()
    }


    return (
        <section className={classes.counter}>
            <CounterFrame/>
            <MainButtonBgr>
                <MainButton></MainButton>
                <MainButtonSettings/>
            </MainButtonBgr>
            <ArrowDropdown onClick={toggleAboutSectionHandler}/>
        </section>
    )
}

export default Counter;